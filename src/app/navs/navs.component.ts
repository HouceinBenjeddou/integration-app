import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css']
})
export class NavsComponent {

  @Input() title?: string;
  @Input() item?: string;

}
