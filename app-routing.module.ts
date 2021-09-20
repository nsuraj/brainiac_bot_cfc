import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Cov19descComponent } from './cov19desc/cov19desc.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'ambulance', component: AmbulanceComponent},
  {path: 'cov19', component: Cov19descComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
