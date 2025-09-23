import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SERVICIOS } from 'src/app/data/servicios';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements AfterViewInit {
  servicios = SERVICIOS;
  mostrarFlechaIzquierda = false;
  mostrarFlechaDerecha = false;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.verificarFlechas();
  }

  scrollIzquierda(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollDerecha(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  verificarFlechas(): void {
    const el = this.scrollContainer.nativeElement;
    this.mostrarFlechaIzquierda = el.scrollLeft > 0;
    this.mostrarFlechaDerecha = el.scrollLeft + el.clientWidth < el.scrollWidth;
  }

  getCheckIcon(texto: string): string {
    const lower = texto.toLowerCase();
    return lower.includes('soporte') || lower.includes('email') ? 'assets/icono/check-gris.svg' : 'assets/icono/check.svg';
  }
  
}