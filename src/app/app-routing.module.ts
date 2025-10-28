import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Proyecto3ContenidoComponent } from './proyectos/proyecto3-contenido/proyecto3-contenido.component';
import { Proyecto3ContenidoMainComponent } from './proyectos/proyecto3-contenido/proyecto3-contenido-main/proyecto3-contenido-main.component';


const routes: Routes = [
  {
    path: 'proyecto3/main',
    component: Proyecto3ContenidoMainComponent,
    
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
