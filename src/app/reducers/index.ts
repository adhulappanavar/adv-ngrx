import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';


import * as patients from '../patients/patient.reducer';
import * as items from '../items/item.reducer';

export interface State {
  patients: patients.State,
  items: items.State
}

const reducers = {
  patients: patients.reducer,
  items: items.reducer
};

const developmentReducer: ActionReducer<any> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<any> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}


// -------------------------------------------------------------------
// Patients Selectors - Equivalent to SQL Queries
// -------------------------------------------------------------------
export const getPatientsState = (state: State) => state.patients;
export const getPatientIds = createSelector(getPatientsState, patients.getIds);
export const getPatientEntities = createSelector(getPatientsState, patients.getEntities);
export const getSelectedPatient = createSelector(getPatientsState, patients.getSelected);
export const getPatients = createSelector(getPatientEntities, getPatientIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

// -------------------------------------------------------------------
// Items Selectors - Equivalent to SQL Queries
// -------------------------------------------------------------------
export const getItemsState = (state: State) => state.items;
export const getItemIds = createSelector(getItemsState, items.getIds);
export const getItemEntities = createSelector(getItemsState, items.getEntities);
export const getSelectedItem = createSelector(getItemsState, items.getSelected);
export const getItems = createSelector(getItemEntities, getItemIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});


