import { Component, OnInit } from '@angular/core';
import { GetOrdersService } from 'src/app/services/get-orders.service';
import { GetMoviesService } from 'src/app/services/get-movies.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(
    private getOrdersService: GetOrdersService,
    private getMoviesService: GetMoviesService
  ) {}
  orders = [];
  movieArray = [];

  setNamesToOrderRows() {
    this.orders.forEach((order) => {
      order.orderRows.forEach((orderRow) => {
        // Search for the movie in the movieArray
        const movie = this.movieArray.find(
          (movie) => movie.id === orderRow.productId
        );
        if (movie) {
          // Set the orderRow name to the movie name
          orderRow.name = movie.name;
        }
      });
    });
  }

  ngOnInit(): void {
    this.getOrdersService.getOrders().subscribe((res) => {
      this.orders = res;
      console.log(this.orders);
    });

    this.getMoviesService.getMovies().subscribe((res) => {
      this.movieArray = res;
      this.setNamesToOrderRows();
    });
  }
}
