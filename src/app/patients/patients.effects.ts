import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import * as patient from './patient.actions';
import { PatientsService } from './patients.service';

@Injectable()
export class PatientEffects {
  @Effect() load$ = this.actions$
    .ofType(patient.ActionTypes.LOAD)
    .switchMap(() => this.patientService.all())
    .map(patients => new patient.LoadActionSuccess(patients))
  ;

  @Effect() create$ = this.actions$
    .ofType(patient.ActionTypes.CREATE)
    .map(action => action.payload)
    .switchMap(patient => this.patientService.create(patient))
    .map(result => new patient.LoadAction())
  ;

  @Effect() update$ = this.actions$
    .ofType(patient.ActionTypes.UPDATE)
    .map(action => action.payload)
    .switchMap(patient => this.patientService.update(patient))
    .map(result => new patient.LoadAction())
  ;

  @Effect() delete$ = this.actions$
    .ofType(patient.ActionTypes.DELETE)
    .map(action => action.payload)
    .switchMap(patientId => this.patientService.delete(patientId))
    .map(result => new patient.LoadAction())
  ;

  constructor(
    private patientService: PatientsService,
    private actions$: Actions
  ) { }
}
