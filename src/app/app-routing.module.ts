import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailsComponent } from './cart/booking-details/booking-details.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmOrderComponent } from './cart/confirm-order/confirm-order.component';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import { ViewProductDetailsByCategoryComponent } from './components/view-product-details-by-category/view-product-details-by-category.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'medicine-home',component:MedicineHomeComponent},
  {path:'view-product-details/:drug-code',component:ViewProductDetailsComponent},
  {path:'view-product-details-by-category',component:ViewProductDetailsByCategoryComponent},
  {path:'top-deals',component:TopDealsComponent},

  {path:'cart',component:CartComponent},
  {path:'booking-details',component:BookingDetailsComponent},
  {path:'confirm-order',component:ConfirmOrderComponent},
  
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
