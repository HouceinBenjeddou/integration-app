import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { DoctorAppointementComponent } from './doctor-appointement/doctor-appointement.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { FaqsComponent } from './faqs/faqs.component';
import { CTAComponent } from './cta/cta.component';
import { SecurityComponent } from './security/security.component';
import { FooterCtaComponent } from './footer-cta/footer-cta.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    DoctorAppointementComponent,
    ShowcaseComponent,
    FaqsComponent,
    CTAComponent,
    SecurityComponent,
    FooterCtaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
