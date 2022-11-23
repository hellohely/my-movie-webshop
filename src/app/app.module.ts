import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [AppComponent, MoviesComponent, CartComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
