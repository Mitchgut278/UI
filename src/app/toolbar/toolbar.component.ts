import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    { label: 'Home', routerLink: '/#home', command: () => { this.navigate.emit('home'); } },
    { label: 'About', routerLink: '/#about', command: () => { this.navigate.emit('about'); }  },
    { label: 'Experience', routerLink: '/#experience', command: () => { this.navigate.emit('experience'); }  },
    { label: 'Contact', routerLink: '/#contact', command: () => { this.navigate.emit('contact'); }  }
  ];

  scrollToSection(target: string) {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
