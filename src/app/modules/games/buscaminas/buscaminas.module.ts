import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaminasComponent } from './components/buscaminas/buscaminas.component';
import { CoreModule } from '../../../core/core.module';
import { BuscaminasRoutingModule } from './buscaminas-routing.module';


@NgModule({
  declarations: [
    BuscaminasComponent
  ],
  imports: [
    CommonModule,
    BuscaminasRoutingModule,
    CoreModule
  ]
})
export class BuscaminasModule { }
