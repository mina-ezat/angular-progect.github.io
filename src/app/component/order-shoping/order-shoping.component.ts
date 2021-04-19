import { ShopingCartService } from './../../service/shoping-cart.service';
import { Component, OnInit } from '@angular/core';
import { OrderInterface } from 'src/app/interface/user';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-order-shoping',
  templateUrl: './order-shoping.component.html',
  styleUrls: ['./order-shoping.component.scss']
})
export class OrderShopingComponent implements OnInit {
  totalmony
  Totalcount
  items:Observable<any[]>
  info
  url
  constructor(private prodectcart:ShopingCartService)
   {
    this.prodectcart.setCart().valueChanges().subscribe((item:any) =>{
     this.items= item
   console.log(this.items)
   for(let its in this.items){ 
   this.info = its
    }
    }) 
  }

  ngOnInit() {
    
  }
  onSelectFile($event){
    this.url = $event
    console.log(this.url)
  }
  delete(){
    this.url =null
  }
}
  //  console.log(this.items)
  //    let it
  //    for( it in this.items){
  //      console.log(it)
  //   //    for(let ites in this.items[it].prodect){
  //   //     console.log(this.items[it].prodect[ites].prodect )
  //   //  }
  //   }