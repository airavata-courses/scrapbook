import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IMAGE_SERVICE_URL } from '../static/url';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbumsOfUser(id: string) {
    let params = new HttpParams().set('userid', id);
    return this.http.get(`${IMAGE_SERVICE_URL}/album/`, {params: params})
  }
}
