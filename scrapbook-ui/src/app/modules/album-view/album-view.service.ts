import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from 'src/app/models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumViewService {
  album$ = new BehaviorSubject<Album>(null);
  constructor() { }
}
