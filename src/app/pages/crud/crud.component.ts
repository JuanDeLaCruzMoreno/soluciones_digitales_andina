import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';
import { Servicio } from 'src/app/shared/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit, OnDestroy {
  servicios: Servicio[] = [];
  private subscription?: Subscription;

  totalServicios: number = 0;
  serviciosActivos: number = 0;
  serviciosNuevos: number = 0;

  mostrarModal: boolean = false;
  modoEdicion: boolean = false;
  servicioEditar?: Servicio;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.subscription = this.crudService.servicios$.subscribe(servicios => {
      this.servicios = servicios;
      if (servicios.length > 0) {
        this.calcularEstadisticas();
      }
    });
  }

  calcularEstadisticas(): void {
    this.totalServicios = this.servicios.length;
    this.serviciosActivos = this.servicios.filter(s => s.activo !== false).length;
    this.serviciosNuevos = this.servicios.filter(s => s.nuevo === true).length;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addItem(): void {
    this.modoEdicion = false;
    this.servicioEditar = undefined;
    this.mostrarModal = true;
  }

  editarServicio(servicio: Servicio): void {
    this.modoEdicion = true;
    this.servicioEditar = servicio;
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.modoEdicion = false;
    this.servicioEditar = undefined;
  }

  guardarServicio(servicio: Servicio): void {
    if (this.modoEdicion && this.servicioEditar) {
      this.crudService.updateServicio(this.servicioEditar.id, servicio);
    } else {
      const nextId = this.crudService.getNextId();
      const nuevoServicio: Servicio = {
        ...servicio,
        id: nextId
      };
      this.crudService.addServicio(nuevoServicio);
      
      setTimeout(() => {
        this.calcularEstadisticas();
      }, 500);
    }
    
    this.cerrarModal();
  }

  deleteItem(id: string): void {
    const ok = confirm('¿Eliminar este servicio?');
    if (!ok) return;
    this.crudService.deleteServicio(id);
    
    setTimeout(() => {
      this.calcularEstadisticas();
    }, 500);
  }
}
