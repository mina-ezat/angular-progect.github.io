import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth  } from "firebase/app";
import { Observable ,of} from 'rxjs';

import * as firebase from "firebase";
import { UserService } from './user.service';
import { switchMap } from 'rxjs/operators';   


@Injectable({
  providedIn: 'root'
})
export class AuthService {
user;
user$:Observable<firebase.User>;
users
  constructor(private database: AngularFireDatabase,private afauth:AngularFireAuth,private usersvr:UserService) {
    this.user = this.database.list('/users');
    this.user$ =this.afauth.authState; 
    this.users =this.afauth.authState; 

   }

         //  login by google
    loginGo(){
 this.afauth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
 }
//  signout by google
 logOut(){
    this.afauth.auth.signOut();
 }
 get AppUser$():Observable<any>{ 
return this.user$.pipe(switchMap(user =>{
  if(user){
    return this.usersvr.getuser(user.uid).valueChanges(); 
  }
  else{
    return of(null) 
  }
}))
 }
  userid$(){ 
     this.users.snapshotChanges().subscribe((item:any) =>{
      
        return item.uid
      
    })
   }
}
