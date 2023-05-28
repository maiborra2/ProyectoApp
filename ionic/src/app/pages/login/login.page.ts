import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Empresa} from "../../common/Empresa";
import {Router} from '@angular/router';
import {Preferences} from '@capacitor/preferences';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  empresa: any;
  @ViewChild('emailInput', {static: true}) emailInput: any;
  @ViewChild('passwordInput', {static: true}) passwordInput: any;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.loadEmpresa();
    Preferences.get({key: 'user'}).then(data => {
      console.log(data.value)
      if (data.value != null) this.router.navigateByUrl("menu")
    })
    //this.iniciarSesion();

  }

  onRegisterButtonClick() {
    this.router.navigate(['/register']);
  }

  async login(email: string, password: string) {
    this.dataService.loginUser(email).subscribe(
      async (response: any) => {
        // Autenticación exitosa, hacer algo con la respuesta
        console.log(response);
        if(response.contrasenya == password){
          await Preferences.set({
            key: 'user',
            value: response._id
          })
          await Preferences.get({key: 'user'}).then(data=>console.log(data));
          this.router.navigate(['/menu/inicio']); // Redirigir al usuario a la página de inicio
        }
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

  iniciarSesion() {
    //funcion para iniciar sesion sin usuario
    this.router.navigate(['/menu/inicio']);
  }

  private loadEmpresa() {
    this.dataService.getEmpresa().subscribe(
      (data: Empresa) => {
        this.empresa = data;
      }
    )
  }
}
