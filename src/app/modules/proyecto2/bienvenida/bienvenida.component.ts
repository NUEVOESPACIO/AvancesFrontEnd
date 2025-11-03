import { Component, OnInit } from '@angular/core';
import { MenustatebyrolService } from '../servicios/menustatebyrol.service';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  rol?: String[];
  id?: number;
  username?: String;
  email?:String;
  nombre?:String;
  apellido?:String;

  constructor(private permService: MenustatebyrolService) { }

  ngOnInit(): void {
    this.rol=this.permService.getUserRoles();
    this.id=this.permService.getId();
    this.username=this.permService.getUsername();
    this.nombre=this.permService.getNombre();
    this.apellido=this.permService.getApellido();
    this.email=this.permService.getEmail();

  }

    actualizarDatos() {
    // Llamada al servicio para actualizar los datos
    //this.userService.actualizarUsuario({
    //  nombre: this.nombre,
    //  apellido: this.apellido,
    //  email: this.email
    //}).subscribe(
    //  response => {
    //    // Lógica para manejar la respuesta del servidor
    //    console.log('Datos actualizados con éxito', response);
    //  },
    //  error => {
    //    // Lógica para manejar errores
    //    console.error('Error al actualizar los datos', error);
      }
    


}
