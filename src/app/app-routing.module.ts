import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { LoginComponent } from './pages/login/login.component';
import { CrudComponent } from './pages/crud/crud.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nosotros', component: NosotrosComponent },
  {
    path: 'contacto',
    loadComponent: () =>
      import('../../app/contacto/contacto.component').then(
        (m) => m.ContactoComponent
      )
  },
  { path: 'admin', component: CrudComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
