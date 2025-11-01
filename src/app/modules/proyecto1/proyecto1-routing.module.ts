import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Proyecto1Component } from './proyecto1.component';

const routes: Routes = [{ path: '', component: Proyecto1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Proyecto1RoutingModule { }
