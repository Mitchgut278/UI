import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  portfolio = [
    {
      title: 'Mobile App Landing',
      description:
        'I use animation as a third dimension by which to simplify experiences and kuiding',
      image: '/assets/Thumbnails/Picture1.png',
    },
    {
      title: 'Mobile App Landing',
      description:
        'I use animation as a third dimension by which to simplify experiences and kuiding',
      image: '/assets/Thumbnails/Picture2.png',
    },
    {
      title: 'Mobile App Landing',
      description:
        'I use animation as a third dimension by which to simplify experiences and kuiding',
      image: '/assets/Thumbnails/Picture3.png',
    },
  ];

  currentIndex = 0;

  // scrollLeft() {
  //   if (this.currentIndex > 0) {
  //     this.currentIndex--;
  //   }
  // }

  // scrollRight() {
  //   if (this.currentIndex < this.images.length - 3) {
  //     this.currentIndex++;
  //   }
  // }
}
