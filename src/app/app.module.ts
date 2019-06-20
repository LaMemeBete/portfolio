import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ElementComponent } from './element/element.component';

import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { KwerkComponent } from './kwerk/kwerk.component';
import { SmileComponent } from './smile/smile.component';
import { JblComponent } from './jbl/jbl.component';
import { BackComponent } from './back/back.component';
import { EnexusComponent } from './enexus/enexus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ElementComponent,
    KwerkComponent,
    SmileComponent,
    JblComponent,
    BackComponent,
    EnexusComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    routes,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AnimateOnScrollModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
