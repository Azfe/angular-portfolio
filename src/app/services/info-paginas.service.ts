import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginasService {

  info: infoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    //console.log('Servicio de info página cargado...');

    this.cargarInfo();
    this.cargarEquipo();
    
  }

  private cargarInfo(){
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: infoPagina) => {
        this.cargada = true;
        this.info = resp;

        //console.log(resp);
        //console.log( "Título: " + resp.titulo );
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-portfolio-azup-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
      .subscribe((resp: any) => {
        this.cargada = true;
        this.equipo = resp;
        console.log(resp);
      });

  }
}
