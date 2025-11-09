import { Component, OnInit } from '@angular/core';
import { MenustatebyrolService  } from '../servicios/menustatebyrol.service'

interface FeatureButton {
  label: string;
  route: string;
  featureKey: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  buttons: FeatureButton[] = [
    { label: 'Inicio', route: '/proyecto2/inicio', featureKey: 'INICIO' },
    { label: 'Login', route: '/proyecto2/main', featureKey: 'LOGIN' },
    { label: 'Bienvenida', route: '/proyecto2/bienvenida', featureKey: 'BIENVENIDA_PERFIL' },
    { label: 'Consulta Cuerpos Celestes', route: '/proyecto2/verplanetas', featureKey: 'CONSULTA_CUERPOS_CELESTES' },
    { label: 'ABM Cuerpos Celestes', route: '/proyecto2/abmplanetas', featureKey: 'ABM_CUERPOS_CELESTES' },
    { label: 'Consulta Simulaciones', route: '/proyecto2/versimulaciones', featureKey: 'CONSULTA_SIMULACIONES' },
    { label: 'ABM Simulaciones', route: '/proyecto2/abmsimulaciones', featureKey: 'ABM_SIMULACIONES' },
    { label: 'Consulta Usuarios', route: '/proyecto2/consultausuarios', featureKey: 'CONSULTA_USUARIOS' },
    { label: 'ABM Usuarios', route: '/proyecto2/abmusuarios', featureKey: 'ABM_USUARIOS' },
    { label: 'Logout', route: '/proyecto2/logout', featureKey: 'LOGOUT' },
  ];

  constructor(public permService: MenustatebyrolService) { }

  ngOnInit(): void {
   
  }

}