import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  data: any;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.data = data;
  }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit();
  }

  onUpdate() {
    this.update.emit({
      name: this.data.name,
      description: this.data.description
    })
  }

  onPrivacyChange() {
    
  }

  onDelete() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'On deleting, the album will be moved to your bin and after 30 days you won\'t be able to recover it',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      confirmButtonColor: '#EB7373',
      cancelButtonColor: '#737CEB'
    }).then((result) => {
      if (result.value) {
        this.delete.emit();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    })
    
  }

}
