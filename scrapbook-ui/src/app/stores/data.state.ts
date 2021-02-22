import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import { Injectable, Inject } from '@angular/core';

export class DataStateModel {
  allAlbums: [];
}

@State<DataStateModel>({
  name: 'dataState',
  defaults: {
    allAlbums: []
  }
})
@Injectable()
export class DataState {
  constructor() {}
}
