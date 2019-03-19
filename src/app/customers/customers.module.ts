import { SharedModule } from './../shared/shared.module';

import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.components';
import { CustomersRoutingModule } from './customers-list/customers-routing.module';

@NgModule({
  declarations: [
    CustomersComponent, CustomersListComponent ,FilterTextboxComponent
  ],
  imports: [
    CommonModule,SharedModule,FormsModule , CustomersRoutingModule
  ],
  exports: [ CustomersComponent]
})
export class CustomersModule { }
