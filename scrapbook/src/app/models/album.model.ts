import { User } from './user.model'
import { Image } from './image.model';


export interface Album {
  id: string;
  name: string;
  description: string;
  size: number;
  createdDate: string;
  lastEditDate: string;
  owner: string;
  lastEditUser: string;
  access: string;
  collaborators: Array<User>;
  images: Array<Image>;
  }