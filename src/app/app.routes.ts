import { Routes } from '@angular/router';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/catalogo', pathMatch: 'full' },
  { path: 'catalogo', component: CatalogoProductosComponent },
  { path: 'carrito', component: CarritoComprasComponent },
  { path: 'registro', component: RegistroUsuariosComponent },
  // Agrega otras rutas aquí según sea necesario
];
