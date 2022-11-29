import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetOrdersService {
  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get<any[]>(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyid=3201',
      {
        headers: {},
      }
    );
  }
}
