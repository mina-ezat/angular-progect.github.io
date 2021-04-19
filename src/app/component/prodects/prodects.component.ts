import { Component, OnInit, Input } from '@angular/core';
import { ShopingCartService } from './../../service/shoping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodects',
  templateUrl: './prodects.component.html',
  styleUrls: ['./prodects.component.scss']
})
export class ProdectsComponent implements OnInit {
  @Input('prodect') prodect: any
  items
  userID
  cartID
  Totalcount = 0
  totalmony = 0
  id
  item
  constructor(private db: AngularFireDatabase, private shopingcart: ShopingCartService,private activrot:ActivatedRoute) {
    this.id = this.activrot.snapshot.paramMap.get('id');
    this.userID = this.shopingcart.userUid()
    this.cartID = this.shopingcart.cartID()
    console.log(this.prodect)
  }
  
  ngOnInit() {
    this.db.list("/user/" + this.userID + "/shoping-carts/" + this.cartID + "/item/").valueChanges().subscribe((user: any) => {

      this.items = user

      for (let cart of this.items) {
        this.Totalcount += cart.quantity;
      }
      for (let cart of this.items) {
        this.totalmony += cart.quantity * cart.prodect.price;
      }
    })

    this.db.object("/user/" + this.userID + "/shoping-carts/" + this.cartID + "/item/").snapshotChanges().subscribe((user: any) => {

      this.item = user

    })
  }
  removeAllCart() {
    
    // this.db.list("/user/" + this.userID + "/shoping-carts/" + this.cartID + "/item/").remove(this.id);
    console.log(this.item )
  }
}
