export class FetchAllAlbums {
  static readonly type = '[FETCH] Fetch All Albums';
  constructor() {}
}

export class OpenAlbumInfo {
  static readonly type = '[OPEN] Album Info';
  constructor(public albumId: string) {}
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
  constructor(public files: any, public id: string) {}
}