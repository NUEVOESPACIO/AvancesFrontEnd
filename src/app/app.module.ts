import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; // 👈 IMPORTANTE

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Proyecto1LateralComponent } from './proyectos/proyecto1-lateral/proyecto1-lateral.component';
import { Proyecto1ContenidoComponent } from './proyectos/proyecto1-contenido/proyecto1-contenido.component';
import { Proyecto2LateralComponent } from './proyectos/proyecto2-lateral/proyecto2-lateral.component';
import { Proyecto2ContenidoComponent } from './proyectos/proyecto2-contenido/proyecto2-contenido.component';
import { Proyecto3LateralComponent } from './proyectos/proyecto3-lateral/proyecto3-lateral.component';
import { Proyecto3ContenidoComponent } from './proyectos/proyecto3-contenido/proyecto3-contenido.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth';
import { Proyecto3ContenidoIzqComponent } from './proyectos/proyecto3-contenido/proyecto3-contenido-izq/proyecto3-contenido-izq.component';
import { Proyecto3ContenidoMainComponent } from './proyectos/proyecto3-contenido/proyecto3-contenido-main/proyecto3-contenido-main.component'



@NgModule({
  declarations: [
    AppComponent,
    Proyecto1LateralComponent,
    Proyecto1ContenidoComponent,
    Proyecto2LateralComponent,
    Proyecto2ContenidoComponent,
    Proyecto3LateralComponent,
    Proyecto3ContenidoComponent,
    Proyecto3ContenidoIzqComponent,
    Proyecto3ContenidoMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     FormsModule,       // 👈 AGREGA ESTO
    

  ],
  providers: [
     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


