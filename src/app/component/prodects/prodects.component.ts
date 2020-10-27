import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from './../../service/shoping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-prodects',
  templateUrl: './prodects.component.html',
  styleUrls: ['./prodects.component.scss']
})
export class ProdectsComponent implements OnInit {
cart$
shoping
items
userID
cartID
prece =0
getTotalcount=0
  constructor(private db:AngularFireDatabase,private shopingcart:ShopingCartService) {  
    this.userID = this.shopingcart.userUid()
      this.cartID = this.shopingcart.cartID()
  }

   ngOnInit() {
 this.db.list("/user/" + this.userID + "/shoping-carts/" + this.cartID +"/item/" ).valueChanges().subscribe(user =>{
     this.items= user
  })

  
  }
   count(){
   for(let cart of this.items){
    this.getTotalcount +=cart.quantity;
  }

  return this.getTotalcount
  }
}
