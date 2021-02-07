export class OpenAlbumInfo {
  static readonly type = '[OPEN] Album Info';
  constructor(public albumId: string) {}
}

export class CloseAlbumInfo {
  static readonly type = '[CLOSE] Album Info';
  constructor() {}
}