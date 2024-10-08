import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Proporciona el servicio en el ámbito raíz
})
export class ProductoService {
  private apiUrl = 'http://localhost:8080/api'; // Cambia esto según tu configuración

  constructor(private http: HttpClient) {}

  // Obtener los productos del carrito
  getCarrito(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/carrito`);
  }

  // Eliminar un producto del carrito
  removeProductoDelCarrito(productoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/carrito/${productoId}`);
  }

  // Agregar un producto al carrito
  addProductoAlCarrito(producto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/carrito`, producto);
  }

  // Actualizar cantidad de un producto en el carrito
  updateCantidadProducto(productoId: number, cantidad: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/carrito/${productoId}`, { cantidad });
  }
}

