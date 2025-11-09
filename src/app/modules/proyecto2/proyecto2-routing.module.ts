import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Proyecto2Component } from './proyecto2.component';
import { MainComponent } from './main/main.component'
import { VersimulacionesComponent } from './versimulaciones/versimulaciones.component';
import { VerplanetasComponent } from './verplanetas/verplanetas.component';
import { InicioComponent } from './inicio/inicio.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

const routes: Routes = [
  {
    path: '',
    component: Proyecto2Component,
    children: [    
      { path: 'inicio', component: InicioComponent },
      { path: 'main', component: MainComponent },
      { path: 'versimulaciones', component: VersimulacionesComponent },
      { path: 'verplanetas', component: VerplanetasComponent },
      { path: 'bienvenida', component: BienvenidaComponent },
        { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Proyecto2RoutingModule { }
