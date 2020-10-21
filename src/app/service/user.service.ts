import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from './../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }
  // set user in data base
  save(user :firebase.User){
    this.db.object('/user/' + user.uid).update({
      name :user.displayName,
      email:user.email,
      id: user.uid,
      photoURL:user.photoURL
    })
  }
  // get user from database
  getuser(uid: string){
    return this.db.object('/user/' + uid);
  }
}
