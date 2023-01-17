import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementCartCounter } from 'src/action/cartaction';
import { ShareService } from '../share/services/share.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orderObj:any;

  constructor(private shareService:ShareService,private store:Store<any>) { }

  addSelectedItemToCart(product:any){
    var products :any;
    products = localStorage.getItem("products")
    products = JSON.parse(products)
    if(!products){
     products = []
    }
    products.push(product);
    localStorage.setItem("products",JSON.stringify(products));
   

    // this.shareService.emitSelectedProduct.next(products.length)
    this.store.dispatch(incrementCartCounter());

  }

  setOrder(order:any){
  this.orderObj = order
  }

  getOrder(){
    return this.orderObj;
  }


}
