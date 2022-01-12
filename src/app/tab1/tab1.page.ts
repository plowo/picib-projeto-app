import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private route: Router) {}

  toAlunos(){
    this.route.navigate(['alunos'])
  }

  toAvisos(){
    this.route.navigate(['avisos'])
  }

  toCalendar(){
    this.route.navigate(['calendario'])
  }

  toDisciplinas(){
    this.route.navigate(['disciplinas'])
  }

}
