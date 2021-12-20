import { Component, OnInit } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  images = [
    '../assets/images/spiderman.jpg',
    '../assets/images/matrix.jpg',
    '../assets/images/gucci.jpg',
  ];
  longText =
    'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.';

  constructor() {}

  ngOnInit(): void {}
}
