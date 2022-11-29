import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from 'src/app/services/get-movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(
    private getMoviesService: GetMoviesService,
    private http: HttpClient
  ) {}

  movieArray = [];
  productsInCart = JSON.parse(localStorage.getItem('products') || '[]');

  addToCart(id) {
    console.log(id);
    this.productsInCart.push(id);
    localStorage.setItem('products', JSON.stringify(this.productsInCart));
  }

  ngOnInit(): void {
    this.getMoviesService.getMovies().subscribe((res) => {
      console.log(res);
      this.movieArray = res;
    });
  }
}
