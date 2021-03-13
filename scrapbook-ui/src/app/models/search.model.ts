export interface Filters {
  startCreatedDate: string;
  endCreatedDate: string;
  startModifiedDate: string;
  endModifiedDate: string;
}

export interface ImageFilters {
  Aperture: any[];
  Camera: any[];
  FocalLength: any[];
  GPS: any[];
  ISO: any[];
}

export interface SelectedImageFilters {
  Aperture: '';
  Camera: '';
  FocalLength: '';
  GPS: '';
  ISO: '';
}