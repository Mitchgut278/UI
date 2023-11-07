import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  onNavigate(target: string) {
    const element = document.getElementById(target);
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = 73;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = rect.top - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' });
    }
  }
}
