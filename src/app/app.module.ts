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
import { InputComponent } from './input/input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqsMaterialComponent } from './faqs-material/faqs-material.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PtagComponent } from './ptag/ptag.component';
import { NavsComponent } from './navs/navs.component'

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
    FooterComponent,
    InputComponent,
    CardComponent,
    FaqsMaterialComponent,
    PtagComponent,
    NavsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
