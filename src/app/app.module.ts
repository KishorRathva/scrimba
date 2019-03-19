import { OrdersModule } from './orders/orders.module';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './customers/core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomersModule } from './customers/customers.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule , CustomersModule , OrdersModule
    , SharedModule ,CoreModule ,AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
