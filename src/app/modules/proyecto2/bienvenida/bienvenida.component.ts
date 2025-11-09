import { Component, OnInit } from '@angular/core';
import { MenustatebyrolService } from '../servicios/menustatebyrol.service';
import { AbmsService } from '../servicios/abms.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  rol?: string[];
  id?: number=0;
  username?: string;
  email: string='';
  nombre: string = '';
  apellido: string = '';

  nombre2: string='';
  apellido2: string='';
  email2: string='';

  constructor(
    private permService: MenustatebyrolService,
    private abmsService: AbmsService
  ) {}

  ngOnInit(): void {
    // CORRECCIÓN: usar '=' para asignar valores
    this.rol = this.permService.getUserRoles();
    this.id = this.permService.getId();
    this.username = this.permService.getUsername();
    this.nombre = this.permService.getNombre();
    this.apellido = this.permService.getApellido();
    this.email = this.permService.getEmail();

    this.nombre2=this.nombre;
    this.apellido2=this.apellido;
    this.email2=this.email;   

  }

  actualizarDatos() {
    // Llamada al servicio para actualizar los datos
    this.abmsService.datausermodif(this.nombre2, this.apellido2, this.email2)
      .subscribe({
        next: (response) => {
          console.log('Datos actualizados con éxito', response);
              this.permService.setApellido(this.apellido2);
              this.permService.setNombre(this.nombre2);
              this.permService.setEmail(this.email2);              
    
          // Aquí podrías mostrar un mensaje visual o un snackbar
        },
        error: (error) => {
          console.error('Error al actualizar los datos', error);
          // Aquí podrías mostrar un mensaje de error al usuario
        },
        complete: () => {
          console.log('Petición PATCH completada');
        }
      });
  }
}