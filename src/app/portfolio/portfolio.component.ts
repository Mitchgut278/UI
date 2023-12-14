import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  images = [
    '../assets/Thumbnails/Thumbnail1.png',
    '../assets/Thumbnails/Thumbnail2.png',
    '../assets/Thumbnails/Thumbnail3.png',
    '../assets/Thumbnails/Thumbnail4.png',
    // ... more images
  ];

  currentIndex = 0;

  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  scrollRight() {
    if (this.currentIndex < this.images.length - 3) {
      this.currentIndex++;
    }
  }

}
