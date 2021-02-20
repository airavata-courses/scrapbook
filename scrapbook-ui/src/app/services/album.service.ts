import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GATEWAY_URL } from '../static/url';
import { Album } from '../models/album.model';
import * as JSZip from 'jszip';
import { forkJoin } from 'rxjs';
import { Image } from '../models/image.model';
import { saveAs } from "file-saver";
import { Store } from '@ngxs/store';
import { CloseLoading } from '../actions/ui.actions';


@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient, private store: Store) {}

  getAlbumsOfUser(id: string) {
    return this.http.get(`${GATEWAY_URL}/album?userid=${id}`);
  }

  createAlbum(name: string, id: string, desc?: string) {
    return this.http.post(`${GATEWAY_URL}/album?userid=${id}`, {name, description: desc});
  }

  getAllImagesOfAlbum(id: string) {
    return this.http.get(`${GATEWAY_URL}/album/${id}/image`);
  }

  getAlbumByID(id: string) {
    return this.http.get(`${GATEWAY_URL}/album/${id}`);
  }

  getImage(id: String) {
    return this.http.get(`${GATEWAY_URL}/image/${id}`, {responseType: 'blob'});
  }

  uploadFile(file: any, id: string , userid: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userid', userid);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post<any>(`${GATEWAY_URL}/image/upload/${id}`, formData, {headers});
  }

  async downloadAlbum(a: Album[]) {
    const requests = [];
    const album = a[0];
    
    this.getAllImagesOfAlbum(album.googleDriveId).toPromise().then((images: Image[]) => {
      const indexToImg: Record<number, Image> = {};
      images.forEach((img, i) => {
        indexToImg[i] = img;
        requests.push(this.getImage(img.googleDriveId))
      });
      forkJoin(...requests).subscribe(res => {
        const zip = new JSZip();
        
        res.forEach((f, i) => {
          zip.file(`${indexToImg[i].name}`, new Blob([f])); 
        });

        zip
        .generateAsync({ type: "blob" })
        .then(blob => {
          saveAs(blob, `${album.name}.zip`);
          this.store.dispatch(new CloseLoading());
        });
      })
    })
    
  }
}
