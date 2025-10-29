import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto3-contenido',
  templateUrl: './proyecto3-contenido.component.html',
  styleUrls: ['./proyecto3-contenido.component.css']
})
export class Proyecto3ContenidoComponent implements OnInit {

  rol: string = "";

  constructor() { }

  ngOnInit(): void {
    const rolaux = localStorage.getItem('ROLE');
    if (rolaux) {
      this.rol = rolaux;
    } else {
      this.rol = "";
    }

    console.log("Rol detectado:", this.rol);
  }
}