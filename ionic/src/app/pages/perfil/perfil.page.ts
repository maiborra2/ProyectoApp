import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }


  //FUNCION PARA ENVIAR LOS PROBLEMAS
  updateProblem(problema: string): void {
    const updatedUserDto = {
      info_problemas: [problema]
    };
    //faltaria tener el id del usuario y ponerlo en "idUser"
    this.dataService.updateUser("idUser", updatedUserDto).subscribe(
      () => {
        console.log('Problema enviado con éxito');
      },
      (error) => {
        console.error('Error al enviar el problema', error);
      }
    );
  }


  //FUNCION PARA BORRAR LA CUENTA
  deleteUser(idUser: string): void {
    this.dataService.deleteUser(idUser).subscribe(
      () => {
        console.log('Usuario eliminado con éxito');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al eliminar el usuario', error);
      }
    );
  }



}
