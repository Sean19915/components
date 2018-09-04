import { Component, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'carousel-component',
  templateUrl: './Carousel.component.html',
  styleUrls: ['./Carousel.component.css']
})
export class CarouselComponent {

  showControls: Boolean = true;
  items = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
  ]

  next() {
    console.log("next");
  }
  prev() {
    console.log("prev");
  }
}
