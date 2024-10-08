import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { AppComponent } from './app.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { ProductoService } from './services/producto.service'; // Importa el servicio

@NgModule({
  declarations: [
    AppComponent,
    CarritoComprasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule  // Asegúrate de que esto esté aquí
    // Asegúrate de importar HttpClientModule
  ],
  providers: [ProductoService], // Proporciona el servicio
  bootstrap: [AppComponent]
})
export class AppModule { }
