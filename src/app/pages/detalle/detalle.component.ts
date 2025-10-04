import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Servicio, ServicioDetalle } from 'src/app/shared/data.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  servicio: any;
  likeIcon = 'assets/icono/like.svg';
  carritoIcon = 'assets/icono/carrito.svg';
  contadorVistas = 0;
  servicioId: string = '';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.servicioId = id;
      
      this.cargarEstadoLike();
      
      this.incrementarVistas();
      
      forkJoin({
        servicioBase: this.dataService.getServicioById(id),
        servicioDetalle: this.dataService.getServicioDetalleById(id)
      }).subscribe(({ servicioBase, servicioDetalle }) => {
        this.servicio = {
          ...servicioDetalle,
          nombre: servicioBase?.nombre || servicioDetalle?.nombre,
          descripcion: servicioBase?.descripcion || servicioDetalle?.descripcion,
          precio: servicioBase?.precio ? this.formatPrecio(servicioBase.precio) : servicioDetalle?.precio,
          precioNumerico: servicioBase?.precio
        };
      });
    }
  }

  cargarEstadoLike(): void {
    const likes = this.getLikes();
    if (likes[this.servicioId]) {
      this.likeIcon = 'assets/icono/like_dado.svg';
    }
  }

  incrementarVistas(): void {
    const vistas = this.getVistas();
    if (!vistas[this.servicioId]) {
      vistas[this.servicioId] = 0;
    }
    vistas[this.servicioId]++;
    this.contadorVistas = vistas[this.servicioId];
    localStorage.setItem('servicios_vistas', JSON.stringify(vistas));
  }

  getVistas(): any {
    const stored = localStorage.getItem('servicios_vistas');
    return stored ? JSON.parse(stored) : {};
  }

  getLikes(): any {
    const stored = localStorage.getItem('servicios_likes');
    return stored ? JSON.parse(stored) : {};
  }

  saveLikes(likes: any): void {
    localStorage.setItem('servicios_likes', JSON.stringify(likes));
  }

  formatPrecio(precio: number): string {
    return '$' + precio.toLocaleString('es-CO');
  }

  toggleLike(): void {
    const likes = this.getLikes();
    
    if (likes[this.servicioId]) {
      delete likes[this.servicioId];
      this.likeIcon = 'assets/icono/like.svg';
    } else {
      likes[this.servicioId] = true;
      this.likeIcon = 'assets/icono/like_dado.svg';
    }
    
    this.saveLikes(likes);
  }

  toggleCarrito(): void {
    this.carritoIcon = this.carritoIcon.includes('carrito_lleno')
      ? 'assets/icono/carrito.svg'
      : 'assets/icono/carrito_lleno.svg';
  }
}