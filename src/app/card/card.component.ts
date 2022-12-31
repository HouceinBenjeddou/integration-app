import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() title?: string;
  @Input() image?: string;
  @Input() pargraph?: string;
  @Input() btn?: string;

  @Output() Next = new EventEmitter<boolean>();

  isShow = false;

  toggleCard() {
    alert('static')
  }
}
