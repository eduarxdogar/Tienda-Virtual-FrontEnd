import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  productosCarrito: any[] = [];
  total: number = 0; // Propiedad para el total

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.obtenerCarrito();
  }

  obtenerCarrito() {
    this.productoService.getCarrito().subscribe(carrito => {
      this.productosCarrito = carrito;
      this.calcularTotal(); // Calcula el total al obtener el carrito
    });
  }

  eliminarProducto(productoId: number) {
    this.productoService.removeProductoDelCarrito(productoId).subscribe(() => {
      this.obtenerCarrito(); // Refrescar el carrito después de eliminar
    });
  }

  calcularTotal() {
    this.total = this.productosCarrito.reduce((sum, producto) => sum + producto.precio, 0);
  }
}


