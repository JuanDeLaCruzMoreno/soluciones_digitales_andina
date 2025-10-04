import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Servicio {
  id: string;
  nombre: string;
  imagen: string;
  precio: number;
  descripcion: string;
  nuevo: boolean;
  activo?: boolean;
  caracteristicas: string[];
}

export interface ServicioDetalle {
  id: string;
  nombre: string;
  imagen: string;
  descripcion: string;
  beneficios: string[];
  caracteristicas: string[];
  precio: string;
  cta: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private serviciosUrl = 'assets/data/servicios.json';
  private serviciosDetalleUrl = 'assets/data/servicios-detalle.json';

  constructor(private http: HttpClient) { }

  getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.serviciosUrl);
  }

  getServiciosDetalle(): Observable<ServicioDetalle[]> {
    return this.http.get<ServicioDetalle[]>(this.serviciosDetalleUrl);
  }

  getServicioById(id: string): Observable<Servicio | undefined> {
    return new Observable(observer => {
      this.getServicios().subscribe(servicios => {
        const servicio = servicios.find(s => s.id === id);
        observer.next(servicio);
        observer.complete();
      });
    });
  }

  getServicioDetalleById(id: string): Observable<ServicioDetalle | undefined> {
    return new Observable(observer => {
      this.getServiciosDetalle().subscribe(servicios => {
        const servicio = servicios.find(s => s.id === id);
        observer.next(servicio);
        observer.complete();
      });
    });
  }
}
