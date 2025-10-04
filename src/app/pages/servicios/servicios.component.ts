import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { DataService, Servicio } from 'src/app/shared/data.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit, AfterViewInit {
  servicios: Servicio[] = [];
  mostrarFlechaIzquierda = false;
  mostrarFlechaDerecha = false;
  isReady = false;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getServicios().subscribe(servicios => {
      this.servicios = servicios;
    });
  }

  ngAfterViewInit(): void {
    this.verificarFlechas();
    const reveal = () => {
      this.isReady = true;
    };

    if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
      window.requestAnimationFrame(reveal);
    } else {
      setTimeout(reveal, 0);
    }
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
