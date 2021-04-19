import { AngularFireDatabase } from 'angularfire2/database';
import { Component,Input, OnInit } from '@angular/core';
import { ShopingCartService } from './../../service/shoping-cart.service';
import { AuthService } from 'src/app/service/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'prodect-cart',
  templateUrl: './prodect-cart.component.html',
  styleUrls: ['./prodect-cart.component.scss']
})
export class ProdectCartComponent implements OnInit {
  @Input('prodect') prodect:any;
  @Input('shopingCArt') shopingCArt;
  cart$
  userID
  appUser
  items
  cartID
  quantitys
  constructor( private db:AngularFireDatabase,private auth:AuthService,private shopingcart:ShopingCartService) {
    this.userID = this.shopingcart.userUid()
    this.cartID = this.shopingcart.cartID()
    this.auth.AppUser$.subscribe(user=> {
      this.appUser = user
    } );
    
   }
  addCart(){
  this.shopingcart.updatecart(this.prodect,-1);

  }
  removeCart(){
  this.shopingcart.removecart(this.prodect);
   }
//  getqound(test){
//     return   this.shopingcart.getqound(test);

//   }
  gitcountitys(){
    // if(!this.cart$) {
    //    return 0
    //    }else{
    //    this.cart$[this.cart$.key].quantity;
    // }
    return 0
   }
  gitcountity(){
    if(!this.items){return 0}
    let item = this.items[this.prodect.payload.key]
    return item ? item.quantity: 0;
  }
  
 ngOnInit(){ 
  this.shopingcart. gitCart().valueChanges().subscribe(user =>{
    this.items= user
    let quantitys :Number= 1
    for(let item in this.items){
      quantitys += this.items[item].quantity
    }         
 
 }) 

}

}
