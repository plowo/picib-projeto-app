import { Component, OnInit } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private route: Router) { }
  
  ngOnInit() {
  }

  loginPage(){
    this.route.navigate(['login'])
  }

}
