import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';



@NgModule({
  declarations: [
    BookingDetailsComponent,
    ConfirmOrderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
