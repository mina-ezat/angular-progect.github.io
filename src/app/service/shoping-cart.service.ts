import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { take, map } from 'rxjs/operators';
import { CartItem } from './../interface/user';
import { Observable } from 'rxjs';
 import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class ShopingCartService implements OnInit {
  userId 
  cartId
  constructor(private db:AngularFireDatabase ,private afaurh: AngularFireAuth  ) {
    this.afaurh.authState.subscribe(user => {
      if(user) this.userId =user.uid
    })
   }
  //create list shoping for user

  private create(){
    return this.db.list("/user/" + this.userId +"/shoping-carts").push({
      datacreated: new Date().getTime()
    })
  } 
 
  // get id cart from prowser or set and get id in shoping-cart in databass
  private async getcartid(){
    let cartID = localStorage.getItem("cartID");
    if(cartID) return cartID;
    
    let ressulit =await this.create();
    localStorage.setItem("cartID",ressulit.key); // set key to localstorage
    return ressulit.key;
  }
  // get cart from data base by id
  public async getCART():Promise<Observable<CartItem>> {
    let cartId =await this.getcartid();
    
   return this.db.object("/user/" + this.userId +"/shoping-carts/" + cartId + "/item/").valueChanges().pipe(map( cart => new CartItem( (cart as any).item) ))
  };
// get one cart 
  getcart(cartID:string,prodectId:string){
    return this.db.object("/user/" + this.userId + "/shoping-carts/" + cartID + "/item/" + prodectId)
  }
addcart(prodect){
  this.updatecart(prodect,1)
}
async shoingCarts(){
  let cartId =await this.getcartid();
  return this.db.object("/user/" + this.userId +"/shoping-carts/" + cartId).valueChanges()
}

   async removecart(prodect){
    let cartId =await this.getcartid();
    let item$ = this.getcart(cartId,prodect.key);
     item$.snapshotChanges().pipe(take(1)).subscribe((item:any) =>{
       if(item.payload.val().quantity > 1 ){
         item$.update({quantity: item.payload.val().quantity -1})
       }else{
        item$.remove()
       }
     })
  } 
 
  async updatecart(prodect,addRemov){
    let cartId =await this.getcartid();
    let item$ = this.getcart(cartId,prodect.key);
     item$.snapshotChanges().pipe(take(1)).subscribe((item:any) =>{
       if(item.payload.val() && item.payload.val().quantity >= 1){
         item$.update({quantity: item.payload.val().quantity - addRemov})
       }
       else{
           item$.update({
             prodect: {
             title: prodect.payload.val().title,
             price: prodect.payload.val().price,
             category: prodect.payload.val().category,
             imgUrl: prodect.payload.val().imgUrl
           },quantity: 1})
       }
       
     })
  }
  async removeAllCart(prodect){
    let cartId =await this.getcartid();
    let item$ = this.getcart(cartId,prodect);
          item$.snapshotChanges().pipe(take(1)).subscribe((item:any) =>{
             item$.remove()
          })
  } 
  ngOnInit(){
   }
 userUid(){
   return  this.userId
 }
 cartID(){
   return localStorage.getItem("cartID")
 }
 gitCart(){
   let cartid = this.cartID()
   return this.db.object("/user/" + this.userId + "/shoping-carts/" + cartid +"/item/" )
 }
 setCart(){
  let cartid = this.cartID()
  return this.db.list("/user/" + this.userId + "/shoping-carts/" + cartid +"/order/" )
}
setCarts(){
  let cartid = this.cartID()
  return this.db.object("/user/" + this.userId + "/shoping-carts/" + cartid +"/order/" )
}
}