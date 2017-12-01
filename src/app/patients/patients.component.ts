import { Component, OnInit } from '@angular/core';
import { Patient} from './patient';
import { PATIENTS } from '../server/patients.db';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients = PATIENTS;
  selectedPatient: Patient;

onSelect(selectedPatient: Patient): void {
  this.selectedPatient = selectedPatient;
}

  constructor() { }

  ngOnInit() {
  }

}
