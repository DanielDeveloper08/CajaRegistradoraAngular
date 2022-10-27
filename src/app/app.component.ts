import { Component } from '@angular/core';
import { Producto } from './models/producto.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrComida: Producto[];
  arrBebida: Producto[];

  productosSeleccionados: Producto[];

  constructor(){
    this.arrComida=[
      new Producto('Codido','https://mejorconsalud.as.com/wp-content/uploads/2020/01/cocinar-alimentos.jpg',10.50),
      new Producto('Cachopo','https://sivarious.com/wp-content/uploads/2018/04/CACHOPO.jpg',6.90),
      new Producto('Pizza','https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900',7.30),
      new Producto('Pasta','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.406.325.suffix/1615916524567.jpeg',5.50),
      new Producto('Hamburguesa','https://www.eluniverso.com/resizer/avJDoOrozRprf6V3mVGUcFjXuJw=/894x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/43U3T4PEX5FMTJ5ZYIYKYIT5SU.JPG',4.50),
    ];
    this.arrBebida=[
      new Producto('Coca Cola','https://www.cocacolaespana.es/content/dam/one/es/es/products/coca-cola/CC_Original.jpg',1.00),
      new Producto('Fanta','https://lataberna.com.ec/guayaquil/urdesa/6312-large_default/fanta-400-ml.jpg',1.50),
      new Producto('Cerveza','https://freezeocean.com/wp-content/uploads/2020/05/Comprar-cerveza-corona.jpg',1.20),
      new Producto('Agua','https://tiaecuador.vtexassets.com/arquivos/ids/166335/243034000.jpg?v=637201565652500000',1.00),
    ];

    this.productosSeleccionados=[];
  }

  onProductoSeleccionado($eventProducto: Producto){
    const productoEncontrado = this.productosSeleccionados.find(productos => productos.nombre === $eventProducto.nombre);
    if(productoEncontrado){
      productoEncontrado.cantidad++;
    }else{
      $eventProducto.cantidad=1;
      this.productosSeleccionados.push($eventProducto);
    }
  }
}
