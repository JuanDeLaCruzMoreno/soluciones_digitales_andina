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
  editingId: string | null = null;
  editModel: Partial<Servicio> = {};
  private subscription?: Subscription;

  totalServicios: number = 0;
  serviciosActivos: number = 0;
  serviciosNuevos: number = 0;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.subscription = this.crudService.servicios$.subscribe(servicios => {
      this.servicios = servicios;
      this.calcularEstadisticas();
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
    const nextId = this.crudService.getNextId();
    const nuevo: Servicio = { 
      id: nextId, 
      nombre: 'Nuevo servicio', 
      imagen: 'assets/img/default.jpg',
      precio: 0, 
      descripcion: 'Descripción del servicio',
      nuevo: true,
      activo: true,
      caracteristicas: []
    };
    this.crudService.addServicio(nuevo);
    this.startEdit(nuevo);
  }

  startEdit(servicio: Servicio): void {
    this.editingId = servicio.id;
    this.editModel = { ...servicio };
  }

  saveEdit(): void {
    if (this.editingId == null) return;
    this.crudService.updateServicio(this.editingId, this.editModel);
    this.cancelEdit();
  }

  cancelEdit(): void {
    this.editingId = null;
    this.editModel = {};
  }

  deleteItem(id: string): void {
    const ok = confirm('¿Eliminar este servicio?');
    if (!ok) return;
    this.crudService.deleteServicio(id);
    if (this.editingId === id) this.cancelEdit();
  }

  resetData(): void {
    const ok = confirm('¿Recargar servicios desde el archivo JSON original?');
    if (!ok) return;
    this.crudService.resetToDefaults();
    this.cancelEdit();
  }
}
