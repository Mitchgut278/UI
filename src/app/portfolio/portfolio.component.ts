import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  images = [
    'path/to/image1.png',
    'path/to/image2.png',
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
