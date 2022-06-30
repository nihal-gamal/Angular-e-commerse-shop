import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactusComponent } from './contactus/contactus.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PricePipe } from './price.pipe';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchPipe } from './fetch.pipe';
import { CartComponent } from './cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { WishListComponent } from './wish-list/wish-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { wishListReducer } from './store/wishList-store.reducer';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './loader-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptor.service';
// import { wishListReducer } from './store/wishList-store.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactusComponent,
    ProductListComponent,
    ProductCardComponent,
    NotFoundComponent,
    PricePipe,
    ProductsDetailsComponent,
    FetchPipe,
    WishListComponent,
    CartComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({ wishList: wishListReducer }, {}),
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
