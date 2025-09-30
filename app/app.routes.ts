import { Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: '',
    redirectTo: 'contacto',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'contacto'
  }
];

