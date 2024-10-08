import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

  agregarAlCarrito(productoId: number) {
    this.productoService.addProductoAlCarrito(productoId).subscribe(() => {
      console.log('Producto agregado al carrito');
    });
  }
}
