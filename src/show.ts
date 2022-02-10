import { Time } from "@angular/common";
import { Movie } from "./movie";

export interface Show {
    showId: string;
    showDate: Date;
    startTime: string;
    endTime: string;
    price:number;
    cinemaHallId: number;
    movie:Movie
    
  }


  export const shows:Show[] = [
  
  ];

