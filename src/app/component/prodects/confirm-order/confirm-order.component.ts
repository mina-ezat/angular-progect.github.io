import { ShopingCartService } from './../../../service/shoping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent implements OnInit {
  cards
  constructor(private cartsh: ShopingCartService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cartsh.gitCart().valueChanges().subscribe(valu =>{
      this.cards = valu
    })
  }
  submite(valu){
    // this.cartsh.setCart().push(valu.value)
    this.cartsh.setCart().push({info:valu.value, prodect:this.cards })
    this.cartsh.gitCart().remove();
    this.router.navigate([''], { relativeTo: this.route });
  }

}
