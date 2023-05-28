import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Factura} from "../common/Factura";
import {Empresa} from "../common/Empresa";
import { User } from '../common/User';

@Injectable({
  providedIn: 'root'
})


export class DataService {
  BASE_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getFacturasPorUser(id: string): Observable<Factura[]>{
    return this.http.get<Factura[]>(this.BASE_URL+'/facturas/user/'+id)
  }

  getEmpresa(): Observable<Empresa>{
    return this.http.get<Empresa>(this.BASE_URL+'/empresa')
  }

  getUser(idUser: string): Observable<User> {
    return this.http.get<User>(this.BASE_URL+'/users/'+idUser);
}

getChartData(idUser: string): Observable<Factura[]> {
  return this.http.get<Factura[]>(this.BASE_URL + '/users/' + idUser);
}

}
