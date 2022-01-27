import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CardComponent } from './home/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CartService } from './service/cart.service';
import { CartLocalService } from './service/cart.local.service';
import { FoodService } from './service/foods.service';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OrdersService } from './service/orders.service';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    IvyCarouselModule,
    MatCardModule,
    MatChipsModule,
    MatBadgeModule,
    MatSnackBarModule,
  ],
  providers: [
    CartService,
    CartLocalService,
    FoodService,
    OrdersService,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
