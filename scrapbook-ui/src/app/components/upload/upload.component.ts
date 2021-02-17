import { Component, OnInit, EventEmitter, Output, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { pluck } from "rxjs/operators";
import { Album } from 'src/app/models/album.model';
import { Select, Store } from '@ngxs/store';
import { AlbumState } from 'src/app/stores/album.state';
import { Observable } from 'rxjs';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { CreateAlbum, Upload } from 'src/app/actions/album.actions';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, AfterViewInit {
  faLayerGroup = faLayerGroup;
  albums: Album[];
  public uploadResult?: any;
  @Output() getAllUsersAlbums: EventEmitter<any> = new EventEmitter<any>()
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("stepper", { static: false }) private stepper: MatStepper;
  
  @Select(AlbumState.getAllAlbumsOfUser) allAlbumsOfUser$: Observable<Album[]>;

  selectedAlbum = '';
  newAlbum: string;
  newAlbumDescription: string;
  files: File[] = []
  currentStep = 0;

  constructor(public store: Store) { 
    this.allAlbumsOfUser$.subscribe(aaou => {
      if (aaou.length)  {
        this.newAlbum = ''
        this.albums = aaou
      }
    })
  }

  ngOnInit(): void {}
  
  ngAfterViewInit(): void {
    this.stepper.selectionChange
      .pipe(pluck('selectedIndex'))
      .subscribe((res: number) => {
        this.currentStep = res;

        if (res === 1) {
          this.albumSelection();
        }

        if (res === 2) {
          console.log(this.files)
        }
      })
  }

  createAlbum() {
    this.selectedAlbum = this.newAlbum;
    this.store.dispatch(new CreateAlbum(this.newAlbum, this.newAlbumDescription)) 
  }

  albumSelection() {
    this.getAllUsersAlbums.emit()
  }

  goNext() {
    this.stepper.selected.completed = true;
    this.stepper.selected.editable = true;
    this.stepper.next();
  }

  goBack() {
    this.stepper.previous();
  }

  getNextBtnStatus() {
    switch(this.currentStep) {
      case 1: 
        return false; break;
      
      case 0:
        if(this.selectedAlbum.length > 0) return false; break
    }
    return true
  }

  
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onClose() {
    this.close.emit();
  }

  

  async uploadFile(fileInput: any) {
    this.files.push(fileInput.files);
    if (this.files.length < 1) {
      return;
    }

    let file = this.files[0];
    const idx = this.albums.findIndex(a => a.id === this.selectedAlbum)
    const googleDriveId = this.albums[idx].googleDriveId
    this.store.dispatch(new Upload({file: file, name: file.name}, googleDriveId, idx))
  }

}
