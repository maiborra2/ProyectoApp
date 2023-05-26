import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Empresa} from "../../common/Empresa";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  empresa: any;
  //constructor(private dataService: DataService, private router: Router) { }
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadEmpresa();
    //this.iniciarSesion();
    
  }

 /*  iniciarSesion() {
   //funcion para iniciar sesion sin usuario
    this.router.navigate(['/menu/inicio']);
  }  */

  private loadEmpresa() {
    this.dataService.getEmpresa().subscribe(
      (data: Empresa) => {
        this.empresa = data;
      }
    )
  }
}
