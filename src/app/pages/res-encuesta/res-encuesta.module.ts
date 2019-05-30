import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResEncuestaPage } from './res-encuesta.page';

const routes: Routes = [
  {
    path: '',
    component: ResEncuestaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResEncuestaPage]
})
export class ResEncuestaPageModule {}
