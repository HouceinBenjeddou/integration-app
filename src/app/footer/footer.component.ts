import { Component, Input } from '@angular/core';
import { faHome} from  '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faHome = faHome;
  private linkedinUrl: string = 'https://www.linkedin.com/in/mohammadfaysal/';
  private fiverrUrl:string = 'https://www.fiverr.com/faisalmuhammad_';
  private facebookUrl:string = 'https://www.facebook.com/phaysall';
  private twitterUrl:string = 'https://twitter.com/faisssallll';
  private githubUrl:string = 'https://github.com/faisalmuhammad';
  private googleUrl:string = 'https://plus.google.com/+MuhammadFaisal04';
}
