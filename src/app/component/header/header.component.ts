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
  count =0
  constructor(private auth:AuthService,private shopingcart:ShopingCartService,private afAuth: AngularFireAuth) { 
    this.auth.AppUser$.subscribe(user=> {
      this.appUser = user
    } )

  }
logout(){
  this.auth.logOut()
}

async  ngOnInit() {
  this.cart$ =await this.shopingcart.getCART()
  
}

}
 