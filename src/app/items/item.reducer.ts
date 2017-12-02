import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { Item } from './item';
import * as actions from './item.actions';

export interface State {
  ids: string[];
  entities: { [id: string]: Item};
  selectedItemId: string | null;
}

export const initialState: State = {
  ids: [],
  entities: {},
  selectedItemId: null
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case actions.ActionTypes.LOAD_SUCCESS:
      const clients = action.payload;
      const ids = clients.map(item => item.id);
      const entities = clients.reduce((entities: { [id: string]: Item }, item: Item) => {
        return Object.assign(entities, {
          [item.id]: item
        });
      }, {});

      return {
        ids,
        entities,
        selectedItemId: state.selectedItemId
      };
    case actions.ActionTypes.SELECT:
      return {
        ids: state.ids,
        entities: state.entities,
        selectedItemId: action.payload.id
      };
    case actions.ActionTypes.CLEAR:
      return {
        ids: state.ids,
        entities: state.entities,
        selectedItemId: null
      };
    default: {
      return state;
    }
  }
}

// -------------------------------------------------------------------
// Selectors
// -------------------------------------------------------------------
export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedItemId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});
