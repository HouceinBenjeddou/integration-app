import { Component, Input } from '@angular/core';
import { faSearch, faLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doctor-appointement',
  templateUrl: './doctor-appointement.component.html',
  styleUrls: ['./doctor-appointement.component.css']
})
export class DoctorAppointementComponent {
  faSearch = faSearch;
  faLocation = faLocation;
  chercher() {
    //to do
  }
}
