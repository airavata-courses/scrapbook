import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';
import * as JSZip from 'jszip';
import { AlbumService } from './album.service';
import { forkJoin } from 'rxjs';
import { saveAs } from "file-saver";
import { Store } from '@ngxs/store';
import { CloseLoading } from '../actions/ui.actions';
import { Album } from '../models/album.model';
import { HttpClient } from '@angular/common/http';
import { GATEWAY_URL } from '../static/url';
import { PutAlbumInView, FetchImagesOfAlbum } from '../actions/album.actions';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(public albumService: AlbumService, public store: Store, public http: HttpClient) { }
  renameImage(userid: string, googleDriveId: string, name: string) {
    const payload = {
      userid: userid,
      googleDriveId: googleDriveId,
      name: name
    }

    console.log(payload)

    return this.http.put(`${GATEWAY_URL}/image/${googleDriveId}`, payload);
  }

  deleteImages(images: string[], userid: string, albumid?: string) {
    const requests = []
    let counter = 0;
    const makeReq = (id: string) => {return this.http.delete(`${GATEWAY_URL}/image/${id}?userid=${userid}`)}
    images.forEach((img, i) => {
      requests.push(makeReq(img))
      counter += 1
    });

    forkJoin(...requests).subscribe(res => {
      this.store.dispatch(new FetchImagesOfAlbum(albumid))
    })

  }

  downloadImage(img: any, fileName: string, blob: Blob) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  downloadMultipleImages(images: Image[], album: Album) {
    const indexToImg: Record<number, Image> = {};
    const requests = [];
      images.forEach((img, i) => {
        indexToImg[i] = img;
       requests.push(this.albumService.getImage(img.googleDriveId))
      });

      forkJoin(...requests).subscribe(res => {
        const zip = new JSZip();
        
        res.forEach((f, i) => {
          zip.file(`${indexToImg[i].name}`, new Blob([f])); 
        });


        zip
        .generateAsync({ type: "blob" })
        .then(blob => {
          saveAs(blob, `${album.name}-selected-images.zip`);
          this.store.dispatch(new CloseLoading());
        });
      })
  }
}
