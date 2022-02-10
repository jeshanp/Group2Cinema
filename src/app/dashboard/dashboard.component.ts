import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/booking';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  bookingList: any[] = new Array();
  //userEmail: String;
  //testing:
  userEmail: String = 'example@mail.com';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('http://localhost:8081/api/v1/booking')
      .toPromise()
      .then((data) => {
        //console.log(data);

        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            if (data[key].customerEmail == this.userEmail)
              this.bookingList.push(data[key]);
          }
        }
      });
  }

  printInfo() {
    console.log(this.bookingList[0]);
  }

  findByEmail(email: String) {
    //   this.http
    //     .get<any>('http://localhost:8081/api/v1/booking')
    //     .subscribe((data) => {
    //       console.log(data);
    //       data.array.forEach((element: any) => {
    //         console.log(element);
    //       });
    //     });
    // }
    console.log(this.bookingList);
    for (let item of this.bookingList) {
      console.log(item); // Will display contents of the object inside the array
    }
  }
}
