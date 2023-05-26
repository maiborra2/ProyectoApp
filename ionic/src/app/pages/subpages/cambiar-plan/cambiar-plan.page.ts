import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cambiar-plan',
  templateUrl: './cambiar-plan.page.html',
  styleUrls: ['./cambiar-plan.page.scss'],
})
export class CambiarPlanPage implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
  }

}
