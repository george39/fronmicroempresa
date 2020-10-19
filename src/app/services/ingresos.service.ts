import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../services/global';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  public url: string;

  constructor(
    public http: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

  /***************************************************
   GUARDAR UN INGRESO
  ***************************************************/
  saveIngreso(ingreso): Observable<any>{
    let params = JSON.stringify(ingreso);
    let headers = new HttpHeaders(({'Content-Type': 'application/json'}));

    return this.http.post(this.url + 'save-ingresos', params, {headers});
  }


  // ================================================
  // LISTAR LAS COLECCIONES DE INGRESOS
  // ================================================
  getIngreso(): Observable<any>{
    let headers = new HttpHeaders(({
      'Content-Type': 'application/json'}));


    return this.http.get(this.url + 'get-ingresos', {headers});
  }

}
