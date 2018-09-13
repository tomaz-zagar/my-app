import { NgModule } from '@angular/core';
import {ElementiComponent} from './elementi/elementi.component';
import {MaterialiComponent} from './materiali/materiali.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'elementi', component: ElementiComponent },
  { path: 'materiali', component: MaterialiComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
