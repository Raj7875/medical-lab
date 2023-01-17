import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-view-product-details-by-category',
  templateUrl: './view-product-details-by-category.component.html',
  styleUrls: ['./view-product-details-by-category.component.scss']
})
export class ViewProductDetailsByCategoryComponent implements OnInit {
  topDealsByCategory:any;

  constructor(private http:HttpService , private cartservice:CartService ) { }

  ngOnInit(): void {
    this.getViewProductDetailsByCategory()
  }

  getViewProductDetailsByCategory(){
    this.http.getDetailsFromServer('top-deals-by-category').subscribe((response:any)=>{
      if(response){
       this.topDealsByCategory = response
      }
    })
  }

  addToCart(product:any){
    this.cartservice.addSelectedItemToCart(product)
}

}
