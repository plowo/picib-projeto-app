import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email:any;
  public password:any;

  constructor(private route: Router, public fireService: FireserviceService) { }

  ngOnInit() {
  }

  inicioPage(){
    this.route.navigate(['inicio'])
  }

  login(){
    this.fireService.login({email:this.email,password:this.password}).then(res=>{
      console.log(res);
      if(res.user.uid){
        this.fireService.getDetails().subscribe(res=>{
          console.log(res);
          alert('Welcome '+ res['name']);
          this.route.navigate(['tabs'])
        },err=>{
          console.log(err);
        });
      }
    },err=>{
      alert(err.message)
      console.log(err);
    })
  }


  signup(){
    this.route.navigateByUrl('signup');
  }

}
