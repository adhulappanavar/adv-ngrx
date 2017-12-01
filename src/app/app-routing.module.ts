import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PatientsComponent } from './patients/patients.component';
import { ItemsComponent } from './items/items.component';


const routes: Routes = [
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
  { path: 'patients', component: PatientsComponent },
//  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'items', component: ItemsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
