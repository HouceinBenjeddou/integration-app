import { Component, Input } from '@angular/core';
import { faUser } from  '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-ptag',
  templateUrl: './ptag.component.html',
  styleUrls: ['./ptag.component.css']
})
export class PtagComponent {
  faPerson =faUser;

  @Input () text?:string;
}
