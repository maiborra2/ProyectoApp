import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Empresa} from "../../common/Empresa";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  empresa: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadEmpresa();
  }


  private loadEmpresa() {
    this.dataService.getEmpresa().subscribe(
      (data: Empresa) => {
        this.empresa = data;
      }
    )
  }
}
