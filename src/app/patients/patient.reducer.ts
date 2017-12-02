import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { Patient } from './patient';
import * as actions from './patient.actions';

export interface State {
  ids: string[];
  entities: { [id: string]: Patient};
  selectedPatientId: string | null;
}

export const initialState: State = {
  ids: [],
  entities: {},
  selectedPatientId: null
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case actions.ActionTypes.LOAD_SUCCESS:
      const clients = action.payload;
      const ids = clients.map(patient => patient.id);
      const entities = clients.reduce((entities: { [id: string]: Patient }, patient: Patient) => {
        return Object.assign(entities, {
          [patient.id]: patient
        });
      }, {});

      return {
        ids,
        entities,
        selectedPatientId: state.selectedPatientId
      };
    case actions.ActionTypes.SELECT:
      return {
        ids: state.ids,
        entities: state.entities,
        selectedPatientId: action.payload.id
      };
    case actions.ActionTypes.CLEAR:
      return {
        ids: state.ids,
        entities: state.entities,
        selectedPatientId: null
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

export const getSelectedId = (state: State) => state.selectedPatientId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});
