import { Component, OnInit ,Input } from '@angular/core';
import { ICustomer } from '../../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})

export class CustomersListComponent implements OnInit {

  private _customers: ICustomer[] = [];
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if(value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  filteredCustomers: ICustomer[] = [];
  customersOrderTotat: number;
  currencyCode: string = 'USD';

  constructor() {}

  ngOnInit() {

  }

  calculateOrders() {
    this.customersOrderTotat = 0;
    this.filteredCustomers.forEach((cust: ICustomer ) => {
      this.customersOrderTotat += cust.orderTotal;
    })
  }

  filter(data: string) {
    if(data) {
      this.filteredCustomers = this.customers.filter((cust:ICustomer)) => {
        return customElements.name.toLowerCase().indexOf(data.toLowerCase())
      }
    }
  }
  sort(prop: string) {
    // A sorter service will handle the sorting
  }
}
