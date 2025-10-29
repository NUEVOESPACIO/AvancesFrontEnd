import { Component } from '@angular/core';
import { AuthService } from '../../../servicios/auth'
import { Proy3serviciohabilitacionesService } from '../../proy3serviciohabilitaciones.service'

@Component({
  selector: 'app-proyecto3-contenido-main',
  templateUrl: './proyecto3-contenido-main.component.html',
  styleUrls: ['./proyecto3-contenido-main.component.css']
})
export class Proyecto3ContenidoMainComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService,private permService: Proy3serviciohabilitacionesService) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        // Guardar token en localStorage
        localStorage.setItem('authToken', response.token);
        this.errorMessage="Ingreso Exitoso";
         this.permService.setUserRoles(['ROLE_ADMIN']);
      },
      error: () => {
        this.errorMessage = 'Credenciales incorrectas';
      }
    });
  }
}
