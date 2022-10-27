import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.models';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() productoSelecComanda:Producto[]; 
  constructor() { 
    this.productoSelecComanda=[];
  }

  ngOnInit(): void {
  }

  calcularTotal(){
    let total=0;
    for(let productos of this.productoSelecComanda){
      total += (productos.precio * productos.cantidad);
    } 
    return total;
  }

  onClickBorrar(indice: number){
    if(this.productoSelecComanda[indice].cantidad === 1){
      this.productoSelecComanda.splice(indice,1);
    }else{
      this.productoSelecComanda[indice].cantidad--;
    }

  }

}


