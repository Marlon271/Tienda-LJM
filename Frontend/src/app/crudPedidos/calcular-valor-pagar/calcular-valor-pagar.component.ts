import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { Producto } from 'src/app/entity/producto';

@Component({
  selector: 'app-calcular-valor-pagar',
  templateUrl: './calcular-valor-pagar.component.html',
  styleUrls: ['./calcular-valor-pagar.component.scss']
})
export class CalcularValorPagarComponent implements OnInit {
  productos: Producto[] = [];
  producto: Producto | null = null;
  cantidad: number = 0;
  valor: number | null = null;

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  calcularValor() {
    if (this.producto && this.cantidad > 0) {
      this.valor = this.cantidad * this.producto.precio;
    } else {
      this.valor = null;
      alert('Por favor seleccione un producto y una cantidad válida.');
    }
  }
}
