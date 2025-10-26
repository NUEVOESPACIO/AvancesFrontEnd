import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth'

@Component({
  selector: 'app-proyecto2-contenido',
  templateUrl: './proyecto2-contenido.component.html',
  styleUrls: ['./proyecto2-contenido.component.css']
})
export class Proyecto2ContenidoComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        // Guardar token en localStorage
        localStorage.setItem('authToken', response.token);
        this.errorMessage="Ingreso Exitoso";
        console.log('Login exitoso');
      },
      error: () => {
        this.errorMessage = 'Credenciales incorrectas';
      }
    });
  }
}
