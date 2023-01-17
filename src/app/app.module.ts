import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { RouterModule,  } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import { LoginModule } from "./login/login.module";
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { ViewProductDetailsByCategoryComponent } from './components/view-product-details-by-category/view-product-details-by-category.component';
import { CartComponent } from './cart/cart.component';
import { CartModule } from './cart/cart.module';
import { StoreModule } from '@ngrx/store';
import { createCounterReducer } from 'src/reducers/cartreducers';






@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        PageNotFoundComponent,
        MedicineHomeComponent,
        TopDealsComponent,
        ViewProductDetailsComponent,
        ViewProductDetailsByCategoryComponent,
        CartComponent
        
       
      
        // LoginComponent,
        // SignupComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
        CarouselModule,
        FormsModule,
        HttpClientModule,
        LoginModule,
        ReactiveFormsModule,
        CartModule,
        StoreModule.forRoot({cartCount:createCounterReducer}, {})
    ]
})
export class AppModule { }


