import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SERVICIOS } from '../../data/servicios';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  servicio: any;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio = SERVICIOS.find(s => s.id === id);
  }
}