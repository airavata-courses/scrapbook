import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/stores/user.state';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { SearchUserBySubstring, RemoveSearchedUserBySubString } from 'src/app/actions/user.actions';
import { Album } from 'src/app/models/album.model';
import { AlbumState } from 'src/app/stores/album.state';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.scss']
})
export class CollabComponent implements OnInit {
  faTimes = faTimes;
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredUsers: Observable<User[]>;
  control = new FormControl();
  userString = '';
  currentAlbum: Album;
  faSortDown = faSortDown;

  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  
  @Select(UserState.getSearchedUser) searchedUsers$: Observable<User[]>;


  constructor(public store: Store) { 
    this.currentAlbum = this.store.selectSnapshot(AlbumState.getAlbumInView);
  }

  ngOnInit(): void { 
  }

  onRemoveCollaborator() {
    
  }

  onClose() {
    this.close.emit();
  }

  onUserSelect(e) {
    console.log(e)
  }

  onInputChange(e: string) {
    if (e) this.store.dispatch(new SearchUserBySubstring(e));
    else this.store.dispatch(new RemoveSearchedUserBySubString());
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
