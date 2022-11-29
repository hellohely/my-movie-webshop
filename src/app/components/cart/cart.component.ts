import { Component, OnInit } from '@angular/core';
import { SendOrderService } from 'src/app/services/send-order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private sendOrderService: SendOrderService) {}

  moviesInCart = JSON.parse(localStorage.getItem('movies') || '[]');

  order = {
    id: 0,
    companyID: 3201,
    created: new Date(),
    createdBy: 'Henrietta',
    paymentMethod: 'Swish',
    totalPrice: 200,
    status: 1,
    orderRows: [{ id: 0, productId: 77, product: null, amount: 0, orderId: 0 }],
  };

  createOrder() {
    console.log(this.moviesInCart);
    this.sendOrderService.sendOrder(this.order);
  }
  ngOnInit(): void {}
}
