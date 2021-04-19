import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { AuthService } from './../../service/auth.service';
import { ShopingCartService } from './../../service/shoping-cart.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProdectsComponent } from '../prodects/prodects.component';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild (ProdectsComponent) count;
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
     
  }
logout(){
  this.auth.logOut()
}
getcount(){

}
ngAfterViewInit(){
 
}

 
 
   
}
 