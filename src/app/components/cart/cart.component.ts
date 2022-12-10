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

  totalSum = this.moviesInCart.reduce((sum, price) => sum + price.price, 0);

  orderRows = this.moviesInCart.map((movie) => {
    return { id: 0, productId: movie.id, product: null, amount: 1, orderId: 0 };
  });

  removeFromCart(id) {
    const foundItem = this.moviesInCart.find(function (movie) {
      return movie.id === id;
    });

    const index = this.moviesInCart.indexOf(foundItem);
    if (index > -1) {
      this.moviesInCart.splice(index, 1);
    }

    localStorage.setItem('movies', JSON.stringify(this.moviesInCart));
    console.log(this.moviesInCart);
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
  }
  ngOnInit(): void {}
}
