import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../services/global';

@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  public url: string;

  constructor(
    public http: HttpClient

  ) {
    this.url = GLOBAL.url;
   }


  saveEgreso(egreso): Observable<any> {
    let params = JSON.stringify(egreso);
    let headers = new HttpHeaders(({'Content-Type': 'application/json'}));

    return this.http.post(this.url + 'save-egresos', params, {headers});
  }


  // ================================================
  // LISTAR LAS COLECCIONES DE EGRESOS
  // ================================================
  getEgreso(): Observable<any>{
    let headers = new HttpHeaders(({
      'Content-Type': 'application/json'}));


    return this.http.get(this.url + 'get-egresos', {headers});
  }
  

  /***************************************************
   EDITAR UN EGRESO
  ***************************************************/
 updateEgreso(egreso): Observable<any> {
   let params = JSON.stringify(egreso);
   let headers = new HttpHeaders(({
     'Content-Type': 'application/json'
   }));


   return this.http.put(this.url + 'update-egreso', params, {headers});
 }
}
