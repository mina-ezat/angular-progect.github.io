                                    // get , set ,update and remove data 
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SaveProdectService {

  constructor(private db:AngularFireDatabase) { }
  // create prodect in database
create(prodect){
  this.db.list('/prodects').push(prodect)

}
// get data from database
get(){
  return this.db.list('/prodects').snapshotChanges();
}
// get date by id
getById(prodectID:string){
return this.db.object('/prodects/' + prodectID).valueChanges()
}
// edit data by id 
update(prodectID:string,prodect:string){
  return this.db.object('/prodects/' + prodectID).update(prodect)

}
// remove from database
remove(prodectID:string){
  return this.db.object('/prodects/' + prodectID).remove()

}
}
