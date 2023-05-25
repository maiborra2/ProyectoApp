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

  loginUser(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/user/login`, { email, password });
  }

  logoutUser(idUser: string): Observable<any> {
    return this.http.put<any>(`${this.BASE_URL}/user/logout/${idUser}`, {});
  }


}
