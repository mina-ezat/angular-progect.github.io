import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../service/auth.service';
import { User } from './../../interface/user';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private auht:AuthService,private db:AngularFirestore) {
 
   }
          
  ngOnInit(): void {
  }
valueAll(test){
// Add a new document in collection "cities"
this.db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}

}
