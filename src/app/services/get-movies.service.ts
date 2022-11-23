import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetMoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<any[]>(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/products',
      {
        headers: {},
      }
    );
  }
}
