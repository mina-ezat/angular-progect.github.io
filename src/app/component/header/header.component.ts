import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../service/auth.service';
import { ShopingCartService } from './../../service/shoping-cart.service';
import { AngularFireAuth } from 'angularfire2/auth';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appUser;
  cart$
  items  
  userID
  cartID
  userId
  quantitys =0
  constructor(private afaurh: AngularFireAuth ,private auth:AuthService,private shopingcart:ShopingCartService,private db:AngularFireDatabase ) {
    this.userID = this.shopingcart.userUid()
    this.cartID = this.shopingcart.cartID()
    this.auth.AppUser$.subscribe(user=> {
      this.appUser = user
      
     } )
     this.db.object("/user/" + "wOS8gB9QJ1bXWLzMl7UxOMcE00o1" + "/shoping-carts/" +  this.cartID +"/item/" ).valueChanges().subscribe((userw:any) =>{
        for(let item in userw){
          this.quantitys += userw[item].quantity
        }      
               
      })
  }
logout(){
  this.auth.logOut()
}
getcount(){

}
  ngOnInit() {
    this.afaurh.authState.subscribe(user => {
      if(user) this.userId =user.uid
             
    }) 
  
}
gitcount(){
  return this.db.object("/user/" + this.userId + "/shoping-carts/" +  this.cartID +"/item/" ).valueChanges().subscribe(user =>{
  this.items= user
  
  for(let item in this.items){
    this.quantitys += this.items[item].quantity
  }  
  return   this.quantitys     
   
})
}
   
}
 