import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../otros/apidata';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenustatebyrolService } from './menustatebyrol.service';

@Injectable(
)


export class AbmsService {

  private apiUrl = API_ENDPOINTS.baseurlauth;

  constructor(private http: HttpClient, private permService: MenustatebyrolService ) { }

  datausermodif(nombre: string, apellido: string, email: string): Observable<any> {
    // Obtener el token desde el localStorage
    const token = localStorage.getItem('authTokenProyect2'); // Asegúrate de que 'token' sea la clave correcta
    var idx: number=this.permService.getId();

    // Configurar los headers con el token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    // Crear el cuerpo de la solicitud
    const body = {
      nombre: nombre,
      apellido: apellido,
      email: email
    };

    // Devolver el observable con manejo de errores
    return this.http.patch<any>(`${this.apiUrl}/abm/edituser/${idx}`, body, { headers })
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud PATCH:', error);
          return throwError(() => error);
        })
      );
  }
}