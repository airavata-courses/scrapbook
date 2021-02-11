import { Component, OnInit, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { pluck } from "rxjs/operators";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, AfterViewInit {
  
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("stepper", { static: false }) private stepper: MatStepper;

  files: File[] = [];
  currentStep = 0;

  constructor() { }

  ngOnInit(): void {}
  
  ngAfterViewInit(): void {
    this.stepper.selectionChange
      .pipe(pluck('selectedIndex'))
      .subscribe((res: number) => {
        this.currentStep = res;
      })
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
      case 0: 
        if (this.files.length > 0) return false; break;
    }
    return true
  }

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onClose() {
    this.close.emit();
  }

}
