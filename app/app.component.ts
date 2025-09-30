import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  // El template debe ser solo el router-outlet para manejar las rutas
  template: '<router-outlet></router-outlet>', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SolucionesAndinasApp';
}