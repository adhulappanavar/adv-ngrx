import { Action } from '@ngrx/store';
import { Item } from './item';
import { type } from '../util';

export const ActionTypes = {
  LOAD: type('[Item] Load'),
  LOAD_SUCCESS: type('[Item] Load Success'),
  CREATE: type('[Item] Create'),
  UPDATE: type('[Item] Update'),
  DELETE: type('[Item] Delete'),
  SELECT: type('[Item] Select'),
  CLEAR: type('[Item] Clear'),
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadActionSuccess implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Item[]) { }
}

export class CreateAction implements Action {
  type = ActionTypes.CREATE;

  constructor(public payload: Item) { }
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: Item) { }
}

export class DeleteAction implements Action {
  type = ActionTypes.DELETE;

  constructor(public payload: string) { }
}

export class SelectAction implements Action {
  type = ActionTypes.SELECT;

  constructor(public payload: Item) { }
}

export class ClearAction implements Action {
  type = ActionTypes.CLEAR;

  constructor() { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadAction
  | LoadActionSuccess
  | CreateAction
  | UpdateAction
  | DeleteAction
  | SelectAction
  | ClearAction;
