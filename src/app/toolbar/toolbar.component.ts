import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    { label: 'About', routerLink: '/#about', command: () => { this.scrollToSection('app-about-page'); } },
    { label: 'Experience' },
    { label: 'Contact', routerLink: '/#contact' },
    { label: 'Resume', routerLink: '/#resume' }
  ];

  scrollToSection(target: string) {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
