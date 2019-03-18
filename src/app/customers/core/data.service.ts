import { ICustomer ,IOrder } from './../../shared/interfaces';
import { Injectable } from '@angular/core' ;
import { HttpClient } from '@angular/common/http' ;
//help with async operation

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DataService {
    baseUrl: string = 'assets/';
    constructor(private http: HttpClient) {}


    getCustomers() : Observable<ICustomer[]> {
      return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
        .pipe(
          catchError(this.handleError)
        );
    }
    getCustomer(id: number) : Observable<ICustomer> {
      return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
        .pipe(
          map(customers => {
            let customer = customers.filter((cust: ICustomer) => cust.id === id);
            return (customer && customer.length) ? customer[0] : null;
          }),
          catchError(this.handleError)
        )
    }

    getOrders(id: number) : Observable<IOrder[]> {
      return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
        .pipe(
          map(orders => {
            let custOrders = orders.filter((order: IOrder) => order.customerId === id);
            return custOrders;
          }),
          catchError(this.handleError)
        );
    }

    private handleError(error: any) {
      console.error('server error:',error);
      if(error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
        // Use the following instead id using lite-server
        // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }
}
