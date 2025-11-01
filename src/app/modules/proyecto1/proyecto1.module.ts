import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Proyecto1RoutingModule } from './proyecto1-routing.module';
import { Proyecto1Component } from './proyecto1.component';


@NgModule({
  declarations: [
    Proyecto1Component
  ],
  imports: [
    CommonModule,
    Proyecto1RoutingModule
  ]
})
export class Proyecto1Module { }
