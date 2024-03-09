import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @Output() scrollPage: EventEmitter<string> = new EventEmitter<string>();

  onClickScroll(value: any){
    this.scrollPage.emit(value.target.id)
  }
}
