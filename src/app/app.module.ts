import { FormsModule } from '@angular/forms';
import { appRoutes } from '../app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedComponent } from './shared/shared.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './shared/header/header.component';
import { BasicHighlightDirective } from './shared/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './shared/better-highlight/better-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SharedComponent,
    NotfoundComponent,
    HeaderComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
