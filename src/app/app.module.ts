import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmailsComponent } from './content/emails.component';
import { NavBarComponent } from './header/navbar.component';
import { SideNavBarComponent } from './header/sidenavbar.component';
import { TopNavBarComponent } from './header/topnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideNavBarComponent,
    TopNavBarComponent,
    EmailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
