import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  files: File[] = [];

  onSelect(event) {
    this.files.push(...event.addedFiles);
    console.log(this.files)
  }
  
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onClose() {
    this.close.emit();
  }

}
