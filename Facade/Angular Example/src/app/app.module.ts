import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccountService } from './services/account.service';
import { DashboardService } from './services/dashboard.service';
import { FacadeService } from './services/factory.service';
import { LoginService } from './services/login.service';
import { ProductsService } from './services/product.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FacadeService, ProductsService,LoginService,DashboardService,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
