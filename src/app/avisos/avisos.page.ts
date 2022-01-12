import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.page.html',
  styleUrls: ['./avisos.page.scss'],
})
export class AvisosPage implements OnInit {

  constructor(private route: Router) { }

  addAviso(){
    this.route.navigate(['addavisos'])
  }

  ngOnInit() {
  }

}
