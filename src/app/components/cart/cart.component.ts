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

  totalSum = 0;

  calculateSum() {
    this.totalSum = this.moviesInCart.reduce(
      (sum, movie) => sum + movie.price * movie.amount,
      0
    );
  }

  orderRows = this.moviesInCart.map((movie) => {
    return {
      id: 0,
      productId: movie.id,
      product: null,
      amount: movie.amount,
      orderId: 0,
    };
  });

  removeFromCart(id) {
    const foundItem = this.moviesInCart.find(function (movie) {
      return movie.id === id;
    });

    const index = this.moviesInCart.indexOf(foundItem);
    if (index > -1) {
      this.moviesInCart.splice(index, 1);
    }

    this.calculateSum();

    localStorage.setItem('movies', JSON.stringify(this.moviesInCart));
  }

  createOrder(order: NgForm) {
    let thisOrder = {
      id: 0,
      companyID: 3201,
      created: new Date(),
      createdBy: order.value.firstName + ' ' + order.value.lastName,
      paymentMethod: order.value.paymentMethod,
      totalPrice: this.totalSum,
      status: 1,
      orderRows: this.orderRows,
    };

    this.sendOrderService.sendOrder(thisOrder);

    this.moviesInCart = [];
    localStorage.setItem('movies', JSON.stringify(this.moviesInCart));
    this.calculateSum();

    order.reset();
  }
  ngOnInit(): void {
    this.calculateSum();
  }
}
