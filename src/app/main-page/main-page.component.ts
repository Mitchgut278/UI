import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  handleScroll(target: string) {
    
    target = target.split("-")[0]
    console.log(target)
    const element = document.getElementById(target);
    if (element) {
      const rect = element.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = rect.top - bodyRect;
      const offsetPosition = elementPosition;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' });
    }
  }
}
