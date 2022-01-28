import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from '@angular/fire/auth'


export interface Users {
  id?: string;
  email: any;
  password: any;
}

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(private firestore: Firestore, public auth: Auth) { }
  


  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signup({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  saveDetails(users:  Users) {
    const usersRef = collection(this.firestore, 'users');
    return addDoc(usersRef, users);
  }
 

  getDetails(): Observable<Users[]> {
    const usersRef = collection(this.firestore, 'users');
    return collectionData(usersRef, { idField: 'id'}) as Observable<Users[]>;
  }

}
