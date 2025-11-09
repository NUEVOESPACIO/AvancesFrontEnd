import { Injectable } from '@angular/core';

@Injectable()

export class MenustatebyrolService {

  private roles: string[] = [];
  private id: number = 0;
  private username?: string;
  private nombre: string = '';
  private apellido: string = '';
  private email: string = '';


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


  setUsername(username: string) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }


  setApellido(apellido: string) {
    this.apellido = apellido;
  }

  getApellido() {
    return this.apellido;
  }


  setNombre(nombre: string) {
    this.nombre = nombre;
  }

  getNombre() {
    return this.nombre;
  }


  setEmail(email: string) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }



  canAccess(feature: string): boolean {
    switch (feature) {
      case 'INICIO':
        return !this.roles.some(r => ['ROLE_ADMIN', 'ROLE_VISIT', 'ROLE_ASTRONOMO', 'ROLE_CIENTIFICO'].includes(r));
      case 'LOGIN':
        return !this.roles.some(r => ['ROLE_ADMIN', 'ROLE_VISIT', 'ROLE_ASTRONOMO', 'ROLE_CIENTIFICO'].includes(r));
      case 'BIENVENIDA_PERFIL':
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
