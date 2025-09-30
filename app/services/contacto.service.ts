import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';

// Interfaz para el Payload del formulario de Contacto (tipado fuerte) [3]
export interface IContactoPayload {
  nombre: string;
  correoElectronico: string;
  mensaje: string;
}

// Interfaz para la respuesta exitosa
export interface IContactoResponse {
  status: string;
  message: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private http = inject(HttpClient);
  private apiUrl = '/api/contacto/enviar';

  /**
   * Simula el manejo de errores HTTP.
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} falló: ${error.message}`);
      return throwError(() => new Error('Error al enviar mensaje. Intente de nuevo más tarde.'));
    };
  }

  /**
   * Realiza una solicitud POST simulada para enviar el formulario de contacto.
   * @param payload Los datos del formulario (Nombre, Email, Mensaje).
   * @returns Un Observable con la respuesta del servidor.
   */
  enviarFormulario(payload: IContactoPayload): Observable<IContactoResponse> {
    console.log('Enviando formulario de contacto:', payload);
    
    // SIMULACIÓN de respuesta del servidor [4]
    if (payload.nombre && payload.correoElectronico && payload.mensaje) {
        return of({ status: 'success', message: '¡Mensaje enviado con éxito! Pronto nos contactaremos con usted.' } as IContactoResponse);
    }
    
    // Si la simulación falla (campos vacíos), lanzamos un error [3]
    return throwError(() => new Error('Faltan campos por llenar.'))
    .pipe(
            catchError(this.handleError<IContactoResponse>('enviarFormulario'))
        );
  }
}
