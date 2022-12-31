import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faqs-material',
  templateUrl: './faqs-material.component.html',
  styleUrls: ['./faqs-material.component.css']
})
export class FaqsMaterialComponent {

  @Input() question?: string;
  @Input() answer?: string;
}
