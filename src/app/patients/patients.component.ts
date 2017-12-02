import { Component, OnInit } from '@angular/core';
import { Patient} from './patient';
import { PATIENTS } from '../server/patients.db';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { State } from '../reducers/index';
import * as reducers from '../reducers/index';
import * as patientActions from './patient.actions'

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients = PATIENTS;
  selectedPatient: Patient;

  patients$: Observable<Patient[]>;

onSelect(selectedPatient: Patient): void {
  this.selectedPatient = selectedPatient;
}
 constructor(private store: Store<reducers.State>) {
    this.patients$ = store.select(reducers.getPatients);
    console.log("constructor", this.patients$)
  }

  ngOnInit() {
        this.store.dispatch(new patientActions.LoadAction());
  }

}


