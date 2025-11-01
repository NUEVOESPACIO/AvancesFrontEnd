import { Injectable } from '@angular/core';

@Injectable()

export class MenustatebyrolService {

  private roles: string[] = [];
  private id?:number;

  constructor() { }

  setUserRoles(roles: string[]) {
    this.roles = roles;
  }

  getUserRoles() {
    return this.roles;
  }

  setId(id: number) {
    this.id = id;
  }

  getId() {
    return this.id;
  }


  canAccess(feature: string): boolean {
    switch (feature) {
      case 'LOGIN':
        return !this.roles || !this.roles.some(r => ['ROLE_ADMIN', 'ROLE_VISIT', 'ROLE_ASTRONOMO', 'ROLE_CIENTIFICO'].includes(r));
      case 'BIENVENIDA & PERFIL':
        return this.roles.some(r => ['ROLE_ADMIN', 'ROLE_VISIT', 'ROLE_ASTRONOMO', 'ROLE_CIENTIFICO'].includes(r));
      case 'CONSULTA_CUERPOS_CELESTES':
        return this.roles.some(r => ['ROLE_ADMIN', 'ROLE_VISIT', 'ROLE_ASTRONOMO', 'ROLE_CIENTIFICO'].includes(r));
      case 'ABM_CUERPOS_CELESTES':
        return this.roles.some(r => ['ROLE_ADMIN', 'ROLE_ASTRONOMO'].includes(r));
      case 'CONSULTA_SIMULACIONES':
         return this.roles.some(r => ['ROLE_ADMIN', 'ROLE_VISIT', 'ROLE_ASTRONOMO', 'ROLE_CIENTIFICO'].includes(r));
      case 'ABM_SIMULACIONES':
        return this.roles.some(r => ['ROLE_ADMIN', 'ROLE_CIENTIFICO'].includes(r));
      case 'CONSULTA_USUARIOS':
       return this.roles.some(r => ['ROLE_ADMIN'].includes(r));
      case 'ABM_USUARIOS':
       return this.roles.some(r => ['ROLE_ADMIN'].includes(r));
      case 'LOGOUT':
        return this.roles.some(r => ['ROLE_ADMIN', 'ROLE_VISIT', 'ROLE_ASTRONOMO', 'ROLE_CIENTIFICO'].includes(r));
      default:
        return true;
    }
  }
  
}
