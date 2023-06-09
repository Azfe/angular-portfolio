import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){
    this.http.get('https://angular-portfolio-azup-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
      .subscribe((resp: any) => { // Debería ser: .subscribe((resp: Producto) La llamada a la interface lanza un error que no se ha conseguido solucionar.

        //console.log(resp);
        this.productos = resp;
        
        setTimeout(() => {
          this.cargando = false;          
        }, 2000);
      });
  }

  getProducto(id: string){
    return this.http.get(`https://angular-portfolio-azup-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`);
  }
}
