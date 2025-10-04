import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Servicio } from 'src/app/shared/data.service';

@Component({
  selector: 'app-modal-servicio',
  templateUrl: './modal-servicio.component.html',
  styleUrls: ['./modal-servicio.component.css']
})
export class ModalServicioComponent implements OnInit {
  @Input() servicio?: Servicio;
  @Input() modoEdicion: boolean = false;
  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<Servicio>();

  nuevoServicio: Partial<Servicio> = {
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: 'assets/img/default.jpg',
    nuevo: false,
    activo: true,
    caracteristicas: []
  };

  caracteristicaTemp: string = '';

  ngOnInit(): void {
    if (this.modoEdicion && this.servicio) {
      this.nuevoServicio = { ...this.servicio };
    }
  }

  agregarCaracteristica(): void {
    if (this.caracteristicaTemp.trim()) {
      if (!this.nuevoServicio.caracteristicas) {
        this.nuevoServicio.caracteristicas = [];
      }
      this.nuevoServicio.caracteristicas.push(this.caracteristicaTemp.trim());
      this.caracteristicaTemp = '';
    }
  }

  eliminarCaracteristica(index: number): void {
    this.nuevoServicio.caracteristicas?.splice(index, 1);
  }

  onGuardar(): void {
    if (this.validarFormulario()) {
      this.guardar.emit(this.nuevoServicio as Servicio);
    }
  }

  validarFormulario(): boolean {
    if (!this.nuevoServicio.nombre?.trim()) {
      alert('El nombre es requerido');
      return false;
    }
    if (!this.nuevoServicio.descripcion?.trim()) {
      alert('La descripción es requerida');
      return false;
    }
    if (!this.nuevoServicio.precio || this.nuevoServicio.precio <= 0) {
      alert('El precio debe ser mayor a 0');
      return false;
    }
    return true;
  }

  onCerrar(): void {
    this.cerrar.emit();
  }
}
