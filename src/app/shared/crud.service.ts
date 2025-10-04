import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Servicio } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private readonly API_URL = 'http://localhost:3000/api/servicios';
  private serviciosSubject: BehaviorSubject<Servicio[]>;
  public servicios$: Observable<Servicio[]>;

  constructor(private http: HttpClient) {
    this.serviciosSubject = new BehaviorSubject<Servicio[]>([]);
    this.servicios$ = this.serviciosSubject.asObservable();
    this.loadServicios();
  }

  private loadServicios(): void {
    this.http.get<Servicio[]>(this.API_URL).subscribe({
      next: (servicios) => {
        this.serviciosSubject.next(servicios);
      },
      error: (error) => {
        console.error('Error al cargar servicios:', error);
        alert('⚠️ No se pudo conectar con el servidor. Asegúrate de ejecutar: npm run server');
      }
    });
  }

  getServicios(): Servicio[] {
    return this.serviciosSubject.value;
  }

  addServicio(servicio: Servicio): void {
    this.http.post<any>(this.API_URL, servicio).subscribe({
      next: () => {
        this.loadServicios();
      },
      error: (error) => {
        console.error('Error al agregar servicio:', error);
        alert('❌ Error al agregar servicio');
      }
    });
  }

  updateServicio(id: string, updates: Partial<Servicio>): void {
    this.http.patch<any>(`${this.API_URL}/${id}`, updates).subscribe({
      next: () => {
        this.loadServicios();
      },
      error: (error) => {
        console.error('Error al actualizar servicio:', error);
        alert('❌ Error al actualizar servicio');
      }
    });
  }

  deleteServicio(id: string): void {
    this.http.delete<any>(`${this.API_URL}/${id}`).subscribe({
      next: () => {
        this.loadServicios();
      },
      error: (error) => {
        console.error('Error al eliminar servicio:', error);
        alert('❌ Error al eliminar servicio');
      }
    });
  }

  getNextId(): string {
    const servicios = this.getServicios();
    if (servicios.length === 0) return 'servicio-1';
    
    return `servicio-${Date.now()}`;
  }

  resetToDefaults(): void {
    this.loadServicios();
  }
}
