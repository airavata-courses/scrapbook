import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { IMAGE_SERVICE_URL, GOOGLE_DRIVE_SERVICE_URL } from '../static/url';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAlbumsOfUser(id: string) {
    let params = new HttpParams().set('userid', id);
    return this.http.get(`${IMAGE_SERVICE_URL}/album/`, { params: params });
  }

  createAlbum(name: string, id: string) {
    let params = new HttpParams().set('userid', id);
    return this.http.post(`${GOOGLE_DRIVE_SERVICE_URL}/album/${name}?userid=${id}`, {});
  }

  uploadFiles(file: any, id: string , userid: string) {
    const formData = new FormData();
    formData.append('file', file.file)
    formData.append('userid', userid)

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    let params = new HttpParams().set('userid', userid);

    return this.http.post<any>(`${GOOGLE_DRIVE_SERVICE_URL}/image/upload/${id}`, formData, {headers: headers, params: params})
  }
}