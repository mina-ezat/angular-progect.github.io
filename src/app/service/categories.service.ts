import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private db:AngularFireDatabase) { }
  getcagtegores(){
   return  this.db.list('/categories').valueChanges()
  }
  getshoping(){
    return this.db.list('/shoping-carts').snapshotChanges()
  }
}
