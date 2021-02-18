import { Album } from './album.model';

export enum UPLOAD_STATE {
  progress = 1,
  done = 2,
  fail = 3
}

export interface Image {
  active: boolean;
  album: Album
  createdBy: string;
  createdDate: string;
  extension: string;
  googleDriveId: string;
  id: string;
  mimeType: string;
  modifiedBy: string;
  modifiedDate: string;
  name: string;
  size: 124729
}

export interface PendingUploadsStateInterface {
  file: any;
  name: string;
  status: UPLOAD_STATE
}


export class PendingUploadsState implements PendingUploadsStateInterface {
  constructor(public file: any, public name: string, public status: UPLOAD_STATE) {
    this.file = file;
    this.name = name;
    this.status = status;
  }
}