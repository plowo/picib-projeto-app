import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService, Users } from '../fireservice.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  users: Users[] = [];

  constructor(private route: Router, public fireService: FireserviceService, private cd: ChangeDetectorRef) { 
    this.fireService.getDetails().subscribe(res=>{
      this.users = res;
      this.cd.detectChanges();
    });
  }


  ngOnInit() {
  }

}
