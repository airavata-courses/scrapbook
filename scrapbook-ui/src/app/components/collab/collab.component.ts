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
import { AddAlbumCollaborator, RemoveAlbumCollaborator } from 'src/app/actions/album.actions';
import Swal from 'sweetalert2';


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
  computedCollaborators = [];

  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  
  @Select(UserState.getSearchedUser) searchedUsers$: Observable<User[]>;
  @Select(AlbumState.getAlbumInView) albuminView$: Observable<Album>;


  constructor(public store: Store) { 
    this.albuminView$.subscribe(album => {
      this.userString = '';
      this.currentAlbum = album;
      this.computeCollabIDs();
    })
    this.currentAlbum = this.store.selectSnapshot(AlbumState.getAlbumInView);
    this.computeCollabIDs();
  }

  ngOnInit(): void { 
  }

  computeCollabIDs() {
    this.currentAlbum.collaborators.forEach(i => {
      this.computedCollaborators.push(i._id)
    })
  }

  onRemoveCollaborator(e: User) {
    Swal.fire({
      title: `Are you sure you want to remove ${e.name} as a collaborator?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#EB7373',
      cancelButtonColor: '#85C685'
    }).then((result) => {
      if (result.value) {
        this.store.dispatch(new RemoveAlbumCollaborator(e, this.currentAlbum.createdBy))
      }
    });
  }

  onClose() {
    this.close.emit();
  }

  onUserSelect(e: User) {
    Swal.fire({
      title: `Are you sure you want to add ${e.name} as a collaborator?`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, for sure!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#85C685',
      cancelButtonColor: '#EB7373'
    }).then((result) => {
      if (result.value) {
        this.store.dispatch(new AddAlbumCollaborator(e, this.currentAlbum.createdBy))
      }
    });
    
  }

  onInputChange(e: string) {
    if (e) this.store.dispatch(new SearchUserBySubstring(e));
    else this.store.dispatch(new RemoveSearchedUserBySubString());
  }
}
