import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cambiar-plan',
  templateUrl: './cambiar-plan.page.html',
  styleUrls: ['./cambiar-plan.page.scss'],
})
export class CambiarPlanPage implements OnInit {
  planAhorroInputs = [
    {
      type: 'checkbox',
      label: "Activar"
    }
  ]
  elegirPlanInputs = [
    {
      label: 'Económico',
      type: 'radio',
      value: 'economico',
    },
    {
      label: 'Estándar',
      type: 'radio',
      value: 'estandar',
    },
    {
      label: 'Premium',
      type: 'radio',
      value: 'premium',
    },
  ]

  constructor(protected router: Router) { }

  ngOnInit() {
  }

}
