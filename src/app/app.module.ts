import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmailsComponent } from './content/emails.component';
import { NavBarComponent } from './header/navbar.component';
import { SideNavBarComponent } from './header/sidenavbar.component';
import { TopNavBarComponent } from './header/topnavbar.component';
import { AppRoutingModule } from './app-routing.module';
import { SentEmailsLayoutComponent } from './content/sent-emails-layout.component';
import { HomeLayoutComponent } from './content/home-layout.component';
import { Email1LayoutComponent } from './content/email-1-layout.component';
import { SocialLayoutComponent } from './content/social-layout.component';
import { NextPageLayoutComponent } from './content/next-page-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideNavBarComponent,
    TopNavBarComponent,
    EmailsComponent,
    SentEmailsLayoutComponent,
    HomeLayoutComponent,
    Email1LayoutComponent,
    SocialLayoutComponent,
    NextPageLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
