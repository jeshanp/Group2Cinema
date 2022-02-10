import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, movies } from 'src/movie';
import { Show } from 'src/show';

@Component({
  selector: 'app-showing',
  templateUrl: './showing.component.html',
  styleUrls: ['./showing.component.css'],
})
export class ShowingComponent implements OnInit {
  movie: Movie;
  show: Show ;
  shows: Show[] = [];
  myMap = new Map<Date, string[]>();
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const movieSlugFromRoute = routeParams.get('slug');
    let response = this.http.get<Show[]>('http://localhost:8081/api/v1/show');

    response.subscribe((data) => {
      for (let key in data) {
        if (data.hasOwnProperty(key))
          this.shows.push(data[key]), console.log(data[key].showId);
      }
      this.movie = movies.find((movie) => movie.slug === movieSlugFromRoute);
      this.show = this.shows.find((show) =>
        
          show.movie.movieName === this.movie.movieName
      
        
      );

    
      this.shows = this.shows.filter(
        (show:Show) => show.movie.movieName === this.movie.movieName
      );
      console.log(this.shows,"filtered");
      console.log(this.shows[0],"filtered");
      
      this.shows.forEach((show:Show, index) => {
        console.log("test",this.shows);
        if (this.myMap.has(show.showDate) === true) {
          
          this.myMap.get(show.showDate).push(this.shows[index].startTime);
          console.log('Adding', this.myMap);
        } else {
          this.myMap.set(show.showDate, [this.shows[index].startTime]);
          console.log('making', this.myMap);
        }
      });
    });
    

    // Find the movie that correspond with the id provided in route.

    //this.shows.forEach((show,index)=>this.myMap.set(show.date,shows[index].startTime))

    //console.log(this.shows)
    // console.log(this.myMap)

    //((show: { movieName: string; })=>show.movieName===this.movie.name)
    //this.show = shows.forEach(show);
  }
}
