import { Component, OnInit, Output,OnDestroy } from '@angular/core';
import { SaveProdectService } from './../../service/save-prodect.service';
import { CategoriesService } from './../../service/categories.service';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription ,Observable} from 'rxjs';
import { ShopingCartService } from './../../service/shoping-cart.service';
import { CartItem } from './../../interface/user';
import { cartProdect } from './../../interface/cartProdect';
@Component({
  selector: 'app-shoping',
  templateUrl: './shoping.component.html',
  styleUrls: ['./shoping.component.scss']
})
export class ShopingComponent implements OnInit,OnDestroy {
prodect: any[] =[];
catogry = '';
filtarCatogry: any[] =[]
subscribe:Subscription;
cart$:Observable<CartItem>
  constructor(private prodectser:SaveProdectService,private route:Router,private activate:ActivatedRoute,private shopingcart:ShopingCartService) { 
   
     this.subscribe= this.prodectser.get().subscribe(prodects =>{
                this.prodect = prodects;
               this.activate.queryParamMap.subscribe(params =>{
      this.catogry = params.get("catogry")
       this.filtarCatogry = (this.catogry) ? 
       this.prodect.filter(p => p.payload.val().category === this.catogry) : this.prodect});
       })
  
  }

 async ngOnInit(){
this.cart$ =await this.shopingcart.getCART()
  }   
  ngOnDestroy(){
    this.subscribe.unsubscribe()
  }

}