export class FetchAllAlbums {
  static readonly type = '[FETCH] Fetch All Albums';
  constructor() {}
}

export class OpenAlbumInfo {
  static readonly type = '[OPEN] Album Info';
  constructor(public albumId: string, public type?: string) {}
}

export class CloseAlbumInfo {
  static readonly type = '[CLOSE] Album Info';
  constructor() {}
}

export class SelectAlbums {
  static readonly type = '[SELECT] Albums';
  constructor(public albumId: string){} 
}

export class FetchAllAlbumsOfUser {
  static readonly type = '[FETCH] Fetch All Albums Of User';
  constructor(public id: string) {}
}

export class CreateAlbum {
  static readonly type = '[FETCH] Create Album';
  constructor(public name: string) {}
}

export class Upload {
  static readonly type = '[UPLOAD] Images to Album';
  constructor(public files: any, public id: string, public idx: number) {}
}

export class GetAllImagesInAlbum {
  static readonly type = '[GET] All Images Of Album';
  constructor(public id: string) {}
}

export class PutAlbumInView {
  static readonly type = 'PUT ALBUM INTO VIEW';
  constructor(public id: any) {}
}

export class RemoveAlbumFromView {
  static readonly type = 'REMOVE ALBUM FORM VIEW';
  constructor() {}
}

export class RemoveImage {
  static readonly type = '[REMOVE] Image';
  constructor() {}
}

export class GetImage {
  static readonly type = '[GET] Image';
  constructor(public id: string) {}
}

export class DownloadImage {
  static readonly type = '[DOWNLOAD] Image';
  constructor(public img: any, public name: string) {}
}
