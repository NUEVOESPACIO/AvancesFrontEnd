import { Component, OnInit } from '@angular/core';
import { ProyectoService } from './servicios/proyecto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  proyectoActual: string = 'proyecto1';

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoService.proyecto$.subscribe(proyecto => {
      this.proyectoActual = proyecto;
    });
  }

  seleccionarProyecto(proyecto: string) {
    this.proyectoService.setProyecto(proyecto);
  }
}