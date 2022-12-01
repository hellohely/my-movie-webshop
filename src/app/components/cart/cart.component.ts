import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SendOrderService } from 'src/app/services/send-order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private sendOrderService: SendOrderService) {}

  moviesInCart = JSON.parse(localStorage.getItem('movies') || '[]');

  customerName = '';

  createOrder(order: NgForm) {
    let thisOrder = {
      id: 0,
      companyID: 3201,
      created: new Date(),
      createdBy: order.value.firstName + ' ' + order.value.lastName,
      paymentMethod: order.value.paymentMethod,
      totalPrice: 200,
      status: 1,
      orderRows: this.moviesInCart,
    };

    this.sendOrderService.sendOrder(thisOrder);
  }
  ngOnInit(): void {}
}
