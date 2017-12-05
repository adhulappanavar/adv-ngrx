import { Component, OnInit } from '@angular/core';
import { Patient} from './patient';
import { PATIENTS } from '../server/patients.db';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { State } from '../reducers/index';
import * as reducers from '../reducers/index';
import * as patientActions from "./patient.actions";
import { NgForm } from "@angular/forms/forms";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients = PATIENTS;
  selectedPatient: Patient;
  name : string;
  city : string;
  mode : string;

  isSaved: boolean = false;

  patients$: Observable<Patient[]>;

	sampleChildData : string = '';


	public handleEvent(childData:any){
		this.sampleChildData = childData;
	}


onSelect(selectedPatient: Patient): void {
  console.log("selectedPatient", selectedPatient);
  this.selectedPatient = selectedPatient;
  this.name = selectedPatient.name;
  this.city = selectedPatient.city;
  this.mode="Edit";

}
 constructor(private store: Store<reducers.State>) {
    this.patients$ = store.select(reducers.getPatients);
    console.log("constructor", this.patients$)
    this.mode="Add";
  }

  ngOnInit() {
        this.store.dispatch(new patientActions.LoadAction());
  }

  savePatient(patientForm : NgForm) {
    if (!patientForm.value.id) {
      this.createPatient(patientForm);
    } else {
      this.updatePatient(patientForm);
    }
  }

  createPatient(patientForm : NgForm) {
    console.log("New Patient : ", patientForm.value)
    this.store.dispatch(new patientActions.CreateAction(patientForm.value));
    this.resetCurrentPatient();
  }

    updatePatient(patient) {
    this.store.dispatch(new patientActions.UpdateAction(patient));
    this.resetCurrentPatient();
  }

resetCurrentPatient() {
    const newPatient = { id: null, name: '', city:''};
    this.store.dispatch(new patientActions.SelectAction(newPatient));
      this.mode="Add";
  }


 deletePatient(patient) {
    this.store.dispatch(new patientActions.DeleteAction(patient.id));
    this.resetCurrentPatient();
}
}

