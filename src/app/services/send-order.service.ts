import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SendOrderService {
  constructor(private http: HttpClient) {}

  sendOrder(order) {
    this.http
      .post(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/orders',
        order
      )
      .subscribe();
  }
}
