import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GATEWAY_URL } from '../static/url';
import { Album } from '../models/album.model';
import * as JSZip from 'jszip';
import { forkJoin } from 'rxjs';
import { Image } from '../models/image.model';
import { saveAs } from 'file-saver';
import { Store } from '@ngxs/store';
import { CloseLoading } from '../actions/ui.actions';
import { Filters } from '../models/search.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient, private store: Store) {}

  getAlbumsOfUser(id: string) {
    return this.http.get(`${GATEWAY_URL}/album?userid=${id}`);
  }

  createAlbum(name: string, id: string, desc?: string) {
    return this.http.post(`${GATEWAY_URL}/album?userid=${id}`, {
      name,
      description: desc,
    });
  }

  getAllImagesOfAlbum(id: string) {
    return this.http.get(`${GATEWAY_URL}/album/${id}/image`);
  }

  getAlbumByID(id: string) {
    return this.http.get(`${GATEWAY_URL}/album/${id}`);
  }

  getImage(id: String) {
    return this.http.get(`${GATEWAY_URL}/image/${id}`, {
      responseType: 'blob',
    });
  }

  addCollaborator(user: string, owner: string, googleDriveId: string) {
    return this.http.put(`${GATEWAY_URL}/album/collab/add`, {
      collabid: user,
      googleDriveId: googleDriveId,
      owner: owner,
    });
  }

  removeCollaborator(user: string, owner: string, googleDriveId: string) {
    return this.http.put(`${GATEWAY_URL}/album/collab/remove`, {
      collabid: user,
      googleDriveId: googleDriveId,
      owner: owner,
    });
  }

  editAlbumSettings(name: string, desc: string, user: string, gid: string) {
    const payload = {
      name: name,
      description: desc,
      userid: user,
      gid: gid,
    };
    return this.http.put(`${GATEWAY_URL}/album/${gid}`, payload);
  }

  getSharedAlbumsOfUser(userid: string) {
    return this.http.get(`${GATEWAY_URL}/album/shared?userid=${userid}`);
  }

  uploadFile(file: any, id: string, userid: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userid', userid);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post<any>(`${GATEWAY_URL}/image/upload/${id}`, formData, {
      headers,
    });
  }

  downloadAlbum(a: Album[]) {
    const requests = [];
    const album = a[0];

    this.getAllImagesOfAlbum(album.googleDriveId)
      .toPromise()
      .then((images: Image[]) => {
        const indexToImg: Record<number, Image> = {};
        images.forEach((img, i) => {
          indexToImg[i] = img;
          requests.push(this.getImage(img.googleDriveId));
        });
        forkJoin(...requests).subscribe((res) => {
          const zip = new JSZip();

          res.forEach((f, i) => {
            zip.file(`${indexToImg[i].name}`, new Blob([f]));
          });

          zip.generateAsync({ type: 'blob' }).then((blob) => {
            saveAs(blob, `${album.name}.zip`);
            this.store.dispatch(new CloseLoading());
          });
        });
      });
  }

  deleteAlbum(albumid: string, userid: string) {
    return this.http.delete(`${GATEWAY_URL}/album/${albumid}?userid=${userid}`);
  }

  searchAndFilterAlbums(payload: any, userid: string) {
    let obj = {};
    if (payload['createdDateFilter']) {
      let creationSplit = payload.createdDateFilter.split(' - ');
      if (creationSplit.length > 1) {
        let [start, end] = creationSplit;
        start = moment(start).format('MM/DD/yyyy');
        end = moment(end).format('MM/DD/yyyy');
        if (end === 'Invalid date') end = null;
        obj['startCreatedDate'] = start;
        obj['endCreatedDate'] = end;
      }
    }

    if (payload['modifiedDateFilter']) {
      let modifiedSplit = payload.modifiedDateFilter.split(' - ');

      if (modifiedSplit.length > 1) {
        let [start, end] = modifiedSplit;
        start = moment(start).format('MM/DD/yyyy');
        end = moment(end).format('MM/DD/yyyy');
        if (end === 'Invalid date') end = null;
        obj['startModifiedDate'] = start;
        obj['endModifiedDate'] = end;
      }
    }

    if (payload['name']) {
      obj['name'] = payload.name;
    }

    return this.http.post(`${GATEWAY_URL}/album/search?userid=${userid}`, obj);
  }

  searchAndFilterImages(payload: any, userid: string, googledriveid) {
    let obj = {};
    if (payload['createdDateFilter']) {
      let creationSplit = payload.createdDateFilter.split(' - ');
      if (creationSplit.length > 1) {
        let [start, end] = creationSplit;
        start = moment(start).format('MM/DD/yyyy');
        end = moment(end).format('MM/DD/yyyy');
        if (end === 'Invalid date') end = null;
        obj['startCreatedDate'] = start;
        obj['endCreatedDate'] = end;
      }
    }

    if (payload['modifiedDateFilter']) {
      let modifiedSplit = payload.modifiedDateFilter.split(' - ');

      if (modifiedSplit.length > 1) {
        let [start, end] = modifiedSplit;
        start = moment(start).format('MM/DD/yyyy');
        end = moment(end).format('MM/DD/yyyy');
        if (end === 'Invalid date') end = null;
        obj['startModifiedDate'] = start;
        obj['endModifiedDate'] = end;
      }
    }

    if (payload['name']) {
      obj['name'] = payload.name;
    }

    if(payload['metadata']) {
      obj['metadata'] = {};
      if(payload["metadata"].Aperture)
      obj["metadata"]['aperture'] = payload["metadata"].Aperture;
      if( payload["metadata"].GPS)
      payload["metadata"]['gps'] = payload["metadata"].GPS;
      if(payload["metadata"].FocalLength)
      payload["metadata"]['focalLength'] = payload["metadata"].FocalLength;
      if(payload["metadata"].Camera)
      payload["metadata"]['camera'] = payload["metadata"].Camera;
      if(payload["metadata"].ISO)
      payload["metadata"]['iso'] = payload["metadata"].ISO;

    }


    return this.http.post(`${GATEWAY_URL}/album/image/search?userid=${userid}&googledriveid=${googledriveid}`, obj);
  }
}
