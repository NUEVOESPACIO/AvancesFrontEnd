import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  // Proyecto seleccionado
  private proyectoSeleccionado = new BehaviorSubject<string>('proyecto1');
  proyecto$ = this.proyectoSeleccionado.asObservable();

  setProyecto(proyecto: string) {
    this.proyectoSeleccionado.next(proyecto);
  }
}