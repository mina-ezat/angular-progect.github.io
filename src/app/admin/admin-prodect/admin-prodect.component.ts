import { Component, OnInit, OnDestroy } from '@angular/core';
import { SaveProdectService } from './../../service/save-prodect.service';
import { Subscription,Subject } from "rxjs";
@Component({
  selector: 'app-admin-prodect',
  templateUrl: './admin-prodect.component.html',
  styleUrls: ['./admin-prodect.component.scss']
})
export class AdminProdectComponent implements OnDestroy ,OnInit{
  dtOptions: DataTables.Settings = {};
  dtTrigger:any  = new Subject();

prodects:any[];
filterprodect :any[];
subscribe: Subscription;
  constructor(private prodectser:SaveProdectService) {
     this.subscribe = this.prodectser.get().subscribe(prodect =>{
      this.filterprodect =  this.prodects = prodect;
      this.dtTrigger.next();

        });
    
   }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      retrieve: true
        }
    };
  
  filter(type:string){
  if(type){
    this.filterprodect = this.prodects.filter(p => p.payload.val().title.toLowerCase().includes(type.toLocaleLowerCase())
    )
    
  }else{
    this.filterprodect =this.prodects

  }
  }
ngOnDestroy() { 
    this.subscribe.unsubscribe()
  }
}
