import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import * as item from './item.actions';
import { ItemsService } from './items.service';

@Injectable()
export class ItemEffects {
  @Effect() load$ = this.actions$
    .ofType(item.ActionTypes.LOAD)
    .switchMap(() => this.itemService.all())
    .map(items => new item.LoadActionSuccess(items))
  ;

  @Effect() create$ = this.actions$
    .ofType(item.ActionTypes.CREATE)
    .map(action => action.payload)
    .switchMap(item => this.itemService.create(item))
    .map(result => new item.LoadAction())
  ;

  @Effect() update$ = this.actions$
    .ofType(item.ActionTypes.UPDATE)
    .map(action => action.payload)
    .switchMap(item => this.itemService.update(item))
    .map(result => new item.LoadAction())
  ;

  @Effect() delete$ = this.actions$
    .ofType(item.ActionTypes.DELETE)
    .map(action => action.payload)
    .switchMap(itemId => this.itemService.delete(itemId))
    .map(result => new item.LoadAction())
  ;

  constructor(
    private itemService: ItemsService,
    private actions$: Actions
  ) { }
}
