import { Component, OnInit } from '@angular/core';
import { GetOrdersService } from 'src/app/services/get-orders.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private getOrdersService: GetOrdersService) {}
  orders = [];

  ngOnInit(): void {
    this.getOrdersService.getOrders().subscribe((res) => {
      console.log(res);

      this.orders = res;
    });
  }
}
