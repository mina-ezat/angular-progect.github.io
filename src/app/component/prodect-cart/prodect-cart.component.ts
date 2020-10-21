import { Component,Input, OnInit } from '@angular/core';
import { ShopingCartService } from './../../service/shoping-cart.service';
import { Observable } from 'rxjs';
import { CartItem } from './../../interface/user';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'prodect-cart',
  templateUrl: './prodect-cart.component.html',
  styleUrls: ['./prodect-cart.component.scss']
})
export class ProdectCartComponent implements OnInit {
  @Input('prodect') prodect:any;
  @Input('shopingCArt') shopingCArt;
  cart$
  test
  id 
  idtest
  userId 
  constructor( private auth:AuthService,private shopingcart:ShopingCartService,private activrot:ActivatedRoute,private cat:CategoriesService) {
  
   }
  addCart(){
  this.shopingcart.updatecart(this.prodect,-1);

  }
  removeCart(){
  this.shopingcart.updatecart(this.prodect,1);

  }
//  getqound(test){
//     return   this.shopingcart.getqound(test);

//   }
  getQuentity(){
    // if(!this.cart$) {
    //    return 0
    //    }else{
    //    this.cart$[this.cart$.key].quantity;
    // }
    return 2
  }
async ngOnInit(){
this.cart$ =await this.shopingcart.getCART()
this.cart$.subscribe(user =>{
 this.test =user
})

}

}
