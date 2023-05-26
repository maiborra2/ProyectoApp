import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Empresa} from "../../common/Empresa";
<<<<<<< HEAD
import {Router} from "@angular/router";
import {User} from "../../common/User";
=======
import { Router } from '@angular/router';
>>>>>>> yonqui

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  empresa: any;
<<<<<<< HEAD
  @ViewChild('emailInput', { static: true }) emailInput: any;
  @ViewChild('passwordInput', { static: true }) passwordInput: any;

  constructor(private dataService: DataService, private router: Router) { }
=======
  //constructor(private dataService: DataService, private router: Router) { }
  constructor(private dataService: DataService) { }
>>>>>>> yonqui

  ngOnInit() {
    this.loadEmpresa();
    //this.iniciarSesion();
    
  }

<<<<<<< HEAD
  login(email: string, password: string): void {
    this.dataService.loginUser(email, password).subscribe(
      (response: any) => {
        // Autenticación exitosa, hacer algo con la respuesta
        console.log(response);
        this.router.navigate(['/menu/inicio']); // Redirigir al usuario a la página de inicio
      },
      (error) => {
        // Manejar el error de autenticación
        console.log(error);
      }
    );
  }

  onLoginButtonClick() {
    const email = (document.getElementById('emailInput') as HTMLInputElement).value;
    const password = (document.getElementById('passwordInput') as HTMLInputElement).value;
    this.login(email, password);
  }




  /*onLoginButtonClick() {
    this.router.navigate(['/menu/inicio']);
  }*/

=======
 /*  iniciarSesion() {
   //funcion para iniciar sesion sin usuario
    this.router.navigate(['/menu/inicio']);
  }  */
>>>>>>> yonqui

  private loadEmpresa() {
    this.dataService.getEmpresa().subscribe(
      (data: Empresa) => {
        this.empresa = data;
      }
    )
  }
}
