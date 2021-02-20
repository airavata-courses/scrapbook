import { User } from './user.model';
import { Image } from './image.model';


export interface Album {
  active?: true;
  createdBy?: User;
  createdDate?: string;
  googleDriveId?: string;
  id?: string;
  images?: Array<Image> | null;
  modifiedBy?: User;
  modifiedDate?: string;
  name?: string;
  size?: number | null;
  description?: string;
  }
