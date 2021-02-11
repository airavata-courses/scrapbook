export interface Image {
  name: string;
  image: string;
  createdDate: string;
  size: number;
  metaData: MetaData;
  modifiedDate: string;
  owner: string;
}

export interface MetaData {
  focalLength: string;
  iso: number;
  shutterSpeed: number;
  camera: string;
  location: string;
  colorSpace: string;
}