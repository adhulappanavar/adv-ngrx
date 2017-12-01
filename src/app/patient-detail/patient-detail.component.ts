import { Component, OnInit, Input } from '@angular/core';
import { Patient} from '../patients/patient';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  @Input() patientInput: Patient;

  constructor() { }

  ngOnInit() {
  }

}
