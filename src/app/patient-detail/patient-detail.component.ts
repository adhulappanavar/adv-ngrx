import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient} from '../patients/patient';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  @Input() patientInput: Patient;
  @Output('childData') outgoingData = new EventEmitter<string>();


  ngOnInit() {
  }



	childSampleData :string = "Some child Data";

	constructor() { }

	public sendData(data:any){
		this.outgoingData.emit(data);
  }
}
