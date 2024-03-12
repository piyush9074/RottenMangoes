import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { IMovieData } from '../IMovieData';
import { Observable } from 'rxjs';
import { MovieserviceService } from '../services/movieservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  trendingMovies:any;
  popularMovies:any;
  constructor(private http:HttpClient, private _movieService:MovieserviceService){}
  ngOnInit(): void {
    this.getTrendingMovies();
    this.getPopularMovies();
  }


  getTrendingMovies(){
    this._movieService.getTrendingMovies()
    .subscribe((movies)=>{this.trendingMovies=movies;
    console.log(this.trendingMovies)
    });
  }

  getPopularMovies(){
    this._movieService.getPopularMovies()
    .subscribe((movies)=>{this.popularMovies=movies;
    console.log(this.popularMovies)
    });
  }

}
