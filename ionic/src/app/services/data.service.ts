import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Factura} from "../common/Factura";
import {Empresa} from "../common/Empresa";
import { User } from '../common/User';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  BASE_URL = 'http://localhost:3000/api';
  public factura: any;

  constructor(private http: HttpClient, private router: Router) { }

  createUser(user: User): Observable<User> {
    const url = `${this.BASE_URL}/user`;
    return this.http.post<User>(url, user);
  }

  //ya tenemos las facturas dentro del usuario, no hace falta
  getFacturasPorUser(id: string): Observable<Factura[]>{
    return this.http.get<Factura[]>(this.BASE_URL+'/facturas/user/'+id)
  }

  getEmpresa(): Observable<Empresa>{
    return this.http.get<Empresa>(this.BASE_URL+'/empresa')
  }

  getUser(idUser: string): Observable<User> {
    return this.http.get<User>(this.BASE_URL+'/users/'+idUser);
  }

  loginUser(email: string): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/user/login/`+email);
  }

  verificacionUser(email: string): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/user/login/`+email);
  }

  logoutUser(idUser: string): Observable<any> {
    return this.http.put<any>(`${this.BASE_URL}/user/logout/${idUser}`, {});
  }

  /*updateUser(idUser: string): Observable<User> {
    const url = `${this.BASE_URL}/users/modificar/${idUser}`;
    return this.http.put<User>(url, {});
  }*/

  //podemos cambiar varios datos del usuario (para cambiar los datos del usuario en perfil)
  updateUser(idUser: string, updatedUserDto: Partial<User>): Observable<User> {
    const url = `${this.BASE_URL}/users/modificar/${idUser}`;

    return this.http.put<User>(url, updatedUserDto);
  }

  deleteUser(idUser: string): Observable<User> {
    const url = `${this.BASE_URL}/users/borrar/${idUser}`;
    return this.http.delete<User>(url);
  }

  updateUserByDNI(dni: string, cuenta_bancaria: string): Observable<User> {
    const url = `${this.BASE_URL}/users/modificar-cuenta/${dni}`;
    const body = { cuenta_bancaria: cuenta_bancaria };
    return this.http.put<User>(url, body);
  }
  getFacturasPagadasPorDNI(dni: string, facturaId: string): Observable<Factura[]> {
    const url = `${this.BASE_URL}/users/${dni}/facturas?pagada=true&id=${facturaId}`;
    return this.http.get<Factura[]>(url);

    
  }
  getChartData(userId: string): Observable<Factura[]> {
    const url = `${this.BASE_URL}/users/${userId}`;
    return this.http.get<Factura[]>(url);
  }
  


  public mostrarFactura(factura: any){
    this.factura = factura;
    console.log(this.factura);
    this.router.navigateByUrl("ultima-factura");
  }


}
