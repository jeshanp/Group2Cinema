import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  images = [
    '../assets/images/spiderman.jpg',
    '../assets/images/matrix.jpg',
    '../assets/images/gucci.jpg',
  ];
  constructor() {}

  ngOnInit(): void {}
}
