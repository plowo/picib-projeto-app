import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { firebaseAppFactory } from '@angular/fire/app/app.module';
import { Router } from '@angular/router';
import { FireserviceService, Users } from '../fireservice.service';
import * as firebase from '@firebase/app';
import { EmailAuthCredential, getAuth, onAuthStateChanged } from "firebase/auth"




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @Input() id: string;
  users: Users[] = [];




  constructor(private route: Router, public fireService: FireserviceService, private cd: ChangeDetectorRef) {
    this.userCurrent();

    this.fireService.getDetails().subscribe(res => {
      this.users = res;
    });




  }

  userCurrent() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;



      const uid = user.uid;
      return email;
      return displayName; 
    }
    
    

  }




}
