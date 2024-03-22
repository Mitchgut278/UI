import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  darkMode: boolean = true;
  personUrl: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  toggleMode() {
    this.darkMode = !this.darkMode;
  }

  ngOnInit() {
    this.personUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/person.svg');
  }
}
