import { Component, OnInit } from '@angular/core';
import { Proy3serviciohabilitacionesService } from '../../proy3serviciohabilitaciones.service'


interface FeatureButton {
  label: string;
  route: string;
  featureKey: string;
}

@Component({
  selector: 'app-proyecto3-contenido-izq',
  templateUrl: './proyecto3-contenido-izq.component.html',
  styleUrls: ['./proyecto3-contenido-izq.component.css']
})


export class Proyecto3ContenidoIzqComponent implements OnInit {

  buttons: FeatureButton[] = [
    { label: 'Login', route: '/proyecto3/main', featureKey: 'LOGIN' },
    { label: 'Bienvenida', route: '/proyecto3/main2', featureKey: 'BIENVENIDA' },
    { label: 'Consulta Cuerpos Celestes', route: '/proyecto3/main2', featureKey: 'CONSULTA_CUERPOS_CELESTES' },
    { label: 'ABM Cuerpos Celestes', route: '/proyecto3/main2', featureKey: 'ABM_CUERPOS_CELESTES' },
    { label: 'Consulta Simulaciones', route: '/proyecto3/main2', featureKey: 'CONSULTA_SIMULACIONES' },
    { label: 'ABM Simulaciones', route: '/proyecto3/main2', featureKey: 'VER_SIMULACIONES' },
    { label: 'ABM Usuario y Roles', route: '/proyecto3/main2', featureKey: 'ABM_USUARIO_ROLES' },
    { label: 'Logout', route: '/proyecto3/main2', featureKey: 'LOGOUT' },
    
  ];


  constructor(public permService: Proy3serviciohabilitacionesService) { }

  ngOnInit(): void {

    this.permService.setUserRoles(['']);
  }

}
