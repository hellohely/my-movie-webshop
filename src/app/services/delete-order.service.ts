import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeleteOrderService {
  constructor(private http: HttpClient) {}
  deleteOrder(id) {
    return this.http
      .delete(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' +
          id,
        {
          headers: {},
        }
      )
      .subscribe();
  }
}
