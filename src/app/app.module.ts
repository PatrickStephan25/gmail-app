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
import { EmailNavBarComponent } from './content/emailnavbar.component';
import { EmailContentsComponent } from './content/email-contents.component';
import { SentEmailsComponent } from './content/sentemails.component';
import { SentEmailNavBarComponent } from './content/sentemailnavbar.component';
import { MoreEmailsComponent } from './content/moreemails.component';
import {HttpClientModule} from '@angular/common/http'
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddEmailComponent } from './content/add-email/add-email.component';
import { FormsModule } from '@angular/forms';

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
    NextPageLayoutComponent,
    EmailNavBarComponent,
    EmailContentsComponent,
    SentEmailsComponent,
    SentEmailNavBarComponent,
    MoreEmailsComponent,
    UserInfoComponent,
    AddEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
