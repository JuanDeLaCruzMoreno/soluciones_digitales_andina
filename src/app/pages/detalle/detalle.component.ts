import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DETALLE_SERVICIOS } from 'src/app/data/servicios-detalle';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.servicio = DETALLE_SERVICIOS.find(s => s.id === id);
    this.contadorVistas++;
  }

  toggleLike(): void {
    this.likeIcon = this.likeIcon.includes('like_dado')
      ? 'assets/icono/like.svg'
      : 'assets/icono/like_dado.svg';
  }

  toggleCarrito(): void {
    this.carritoIcon = this.carritoIcon.includes('carrito_lleno')
      ? 'assets/icono/carrito.svg'
      : 'assets/icono/carrito_lleno.svg';
  }
}