import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService, Users } from '../fireservice.service';




@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @Input() id: string;
  users: Users[] = [];
  user: Users = null;

  constructor(private route: Router, public fireService: FireserviceService, private cd: ChangeDetectorRef) {

    this.fireService.getDetails().subscribe(res => {
      this.users = res;
    });
  }

}
