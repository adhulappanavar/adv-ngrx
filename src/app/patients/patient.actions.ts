import { Action } from '@ngrx/store';
import { Patient } from './patient';
import { type } from '../util';

export const ActionTypes = {
  LOAD: type('[Patient] Load'),
  LOAD_SUCCESS: type('[Patient] Load Success'),
  CREATE: type('[Patient] Create'),
  UPDATE: type('[Patient] Update'),
  DELETE: type('[Patient] Delete'),
  SELECT: type('[Patient] Select'),
  CLEAR: type('[Patient] Clear'),
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadActionSuccess implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Patient[]) { }
}

export class CreateAction implements Action {
  type = ActionTypes.CREATE;

  constructor(public payload: Patient) { }
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: Patient) { }
}

export class DeleteAction implements Action {
  type = ActionTypes.DELETE;

  constructor(public payload: string) { }
}

export class SelectAction implements Action {
  type = ActionTypes.SELECT;

  constructor(public payload: Patient) { }
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
