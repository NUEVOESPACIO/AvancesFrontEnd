import { Component } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { MenustatebyrolService } from '../servicios/menustatebyrol.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private permService: MenustatebyrolService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', response.token);
        this.errorMessage = `Ingreso Exitoso para ${response.rol}`;
        this.permService.setUserRoles([response.rol]);
        this.permService.setId(response.id);
        this.router.navigate(['bienvenida'], { relativeTo: this.route.parent });
      },
      error: () => {
        this.errorMessage = 'Credenciales incorrectas';
      }
    });
  }
}