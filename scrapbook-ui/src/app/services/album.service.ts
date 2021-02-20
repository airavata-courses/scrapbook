import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { IMAGE_SERVICE_URL, GOOGLE_DRIVE_SERVICE_URL, GATEWAY_URL } from '../static/url';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAlbumsOfUser(id: string) {
    return this.http.get(`${GATEWAY_URL}/album?userid=${id}`);
  }

  createAlbum(name: string, id: string, desc?: string) {
    return this.http.post(`${GATEWAY_URL}/album?userid=${id}`, {name, description: desc});
  }

  getAllImagesOfAlbum(id: string) {
    return this.http.get(`${GATEWAY_URL}/album/${id}/image`);
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
}
