import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientsService } from './patients/patients.service';
import { PatientEffects } from './patients/patients.effects';
import { reducer } from './reducers';


import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AppRoutingModule } from './/app-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientDetailComponent,
    ItemsComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    // must come AFTER `provideStore` call
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(PatientEffects)
  ],
  providers: [PatientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
