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
  moviesInCart = JSON.parse(localStorage.getItem('movies') || '[]');

  addToCart(movie) {
    let foundMovie = this.moviesInCart.find(
      (foundMovie) => foundMovie.id === movie.id
    );
    if (foundMovie) {
      foundMovie.amount++;
    } else {
      movie.amount = 1;
      this.moviesInCart.push(movie);
    }

    //movie.amount = 1;
    //this.moviesInCart.push(movie);
    localStorage.setItem('movies', JSON.stringify(this.moviesInCart));
  }

  ngOnInit(): void {
    this.getMoviesService.getMovies().subscribe((res) => {
      console.log(res);
      this.movieArray = res;
    });
  }
}
