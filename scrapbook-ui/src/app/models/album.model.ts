import { User } from './user.model';
import { Image } from './image.model';


export interface Album {
  active?: true;
  createdBy?: string;
  createdDate?: string;
  googleDriveId?: string;
  id?: string;
  images?: Array<Image> | null;
  modifiedBy?: string;
  modifiedDate?: string;
  name?: string;
  size?: number | null;
  description?: string;
  }
