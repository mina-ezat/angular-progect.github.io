import { cartProdect } from './cartProdect';

export class CartItem{
    constructor(private item: cartProdect){}
    /// get totalCounter
     get getTotalcount(){
        let count = 0 
        for(let prodectID in this.item){
           count += this.item[prodectID].quantity;
        }
      
        return count;
    }
     getcount(id){
        let count 
           count = this.item[id].quantity;
      
        return count;
    }
    //work check 
//     get checkcount(){
//         if(!this.item){
//             return 0
//         }else{
//    return for(let prodectID in this.item){
//           this.item[prodectID].quantity;
//          }        
//         }
//     }

}
export interface User {
    name:string;
    email:string;
    isAdmin:string
}
export interface Prodect{
    title:string;
    price:string;
    imgUrl:string;
    category:string;
     id:any;
  key: any;
}
export interface OrderInterface {
info:string;
prodect:string
}