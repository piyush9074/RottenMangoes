import { Injectable } from '@angular/core';
import { IMovieData } from '../IMovieData';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  trendingMovies:any;
  constructor(private http:HttpClient) { }

  getTrendingMovies():Observable<IMovieData[]> {
    return this.http.get<IMovieData[]>('http://localhost:4200/assets/data/trending-movies.json');
  }

  getPopularMovies():Observable<IMovieData[]> {
    return this.http.get<IMovieData[]>('http://localhost:4200/assets/data/popular-movies.json');
  }
}
