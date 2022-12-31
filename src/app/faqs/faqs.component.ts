import { Component, Input } from '@angular/core';
import {faQuestion, faHome} from  '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  faQuestion = faQuestion;
  faHome = faHome;
}