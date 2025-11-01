import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto2',
  templateUrl: './proyecto2.component.html',
  styleUrls: ['./proyecto2.component.css']
})
export class Proyecto2Component implements OnInit {

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
