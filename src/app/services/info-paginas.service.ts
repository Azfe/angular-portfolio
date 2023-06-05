import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginasService {

  info: infoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) {
    //console.log('Servicio de info página cargado...');

    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: infoPagina) => {
        this.cargada = true;
        this.info = resp;

        console.log(resp);
        //console.log( "Título: " + resp.titulo );
      });


  }
}
