import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'proyecto1', loadChildren: () => import('./modules/proyecto1/proyecto1.module').then(m => m.Proyecto1Module) }, 
  { path: 'proyecto2', loadChildren: () => import('./modules/proyecto2/proyecto2.module').then(m => m.Proyecto2Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
