import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Proyecto2RoutingModule } from './proyecto2-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Proyecto2Component } from './proyecto2.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { VerplanetasComponent } from './verplanetas/verplanetas.component';
import { VersimulacionesComponent } from './versimulaciones/versimulaciones.component';
import { AuthService } from './servicios/auth.service';
import { MenustatebyrolService } from './servicios/menustatebyrol.service';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AbmsService } from './servicios/abms.service';

@NgModule({
  declarations: [
    Proyecto2Component,
    MenuComponent,
    MainComponent,
    VerplanetasComponent,
    VersimulacionesComponent,
    BienvenidaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Proyecto2RoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,            // ✅ servicios locales
    MenustatebyrolService,
    AbmsService

  ]

  
})
export class Proyecto2Module { }