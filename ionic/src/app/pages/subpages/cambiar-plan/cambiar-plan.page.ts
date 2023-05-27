import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from "../../../services/data.service";
import { User } from "../../../common/User";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cambiar-plan',
  templateUrl: './cambiar-plan.page.html',
  styleUrls: ['./cambiar-plan.page.scss'],
})
export class CambiarPlanPage implements OnInit {
  planAhorroInputs = [
    {
      type: 'checkbox',
      label: "Activar",
      checked: false
    }
  ];
  // @ts-ignore
  selectedPlan: string;
  mostrarPlanAhorro = false;
  mostrarElegirPlan = false;

  constructor(
    protected router: Router,
    private dataService: DataService,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  mostrarPlanAhorroModal() {
    this.mostrarPlanAhorro = true;
  }

  cerrarPlanAhorroModal() {
    this.mostrarPlanAhorro = false;
  }

  activarAhorro() {
    const userId = '645a046240cc99c1c82a2db1';
    const ahorroCheckbox = this.planAhorroInputs[0];
    const ahorro = ahorroCheckbox.checked;

    this.dataService.getUser(userId).subscribe(
      (user: User) => {
        user.plan = { ...user.plan, ahorro: ahorro };

        this.dataService.updateUser(userId, user).subscribe(
          (updatedUser: User) => {
            console.log('Usuario actualizado:', updatedUser);
          },
          (error) => {
            console.error('Error al actualizar el usuario:', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener el usuario:', error);
      }
    );
  }

  mostrarElegirPlanModal() {
    this.mostrarElegirPlan = true;
  }

  cerrarElegirPlanModal() {
    this.mostrarElegirPlan = false;
  }

  activarPlan() {
    const userId = '645a046240cc99c1c82a2db1';

    this.dataService.getUser(userId).subscribe(
      (user: User) => {
        user.plan = { ...user.plan };

        if (this.selectedPlan === 'estandar') {
          user.plan.estandard = true;
          user.plan.premium = false;
          user.plan.classic = false;
        } else if (this.selectedPlan === 'premium') {
          user.plan.estandard = false;
          user.plan.premium = true;
          user.plan.classic = false;
        } else if (this.selectedPlan === 'classic') {
          user.plan.estandard = false;
          user.plan.premium = false;
          user.plan.classic = true;
        }

        this.dataService.updateUser(userId, user).subscribe(
          (updatedUser: User) => {
            console.log('Usuario actualizado:', updatedUser);
          },
          (error) => {
            console.error('Error al actualizar el usuario:', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener el usuario:', error);
      }
    );
  }
}
