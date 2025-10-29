import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Proy3serviciohabilitacionesService {
  private roles: string[] = [];

  constructor() { }

  setUserRoles(roles: string[]) {
    this.roles = roles;
  }

  canAccess(feature: string): boolean {
    switch (feature) {
      case 'LOGIN': 
        return !this.roles || !this.roles.some(r => ['ROLE_ADMIN', 'ROLE_VISIT', 'ROLE_ASTRONOMO','ROLE_CIENTIFICO'].includes(r));
      case 'BIENVENIDA':
        return this.roles.some(r => ['ROLE_ADMIN', 'ROLE_VISIT', 'ROLE_ASTRONOMO','ROLE_CIENTIFICO'].includes(r));
      case 'CONSULTA_SIMULACIONES':
        return this.roles.some(r => ['ROLE_ADMIN', 'ROLE_VISIT', 'ROLE_ASTRONOMO','ROLE_CIENTIFICO'].includes(r));
      case 'VER_SIMULACIONES':
        return this.roles.includes('ROLE_VISIT');
      case 'LOGOUT':
        return this.roles.includes('ADMIN');

      case 'ABM_CUERPOS_CELESTES':
        return this.roles.includes('ADMIN');
      case 'ABM_USUARIO_ROLES':
        return this.roles.includes('ROLE_ASTRONOMO');
      case 'CONSULTA_CUERPOS_CELESTES':
        return this.roles.includes('USER') || this.roles.includes('ADMIN');
      default:
        return true;
    }
  }
}


