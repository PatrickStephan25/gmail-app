import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SentEmailsLayoutComponent } from './content/sent-emails-layout.component';
import { HomeLayoutComponent } from './content/home-layout.component';
import { Email1LayoutComponent } from './content/email-1-layout.component';
import { SocialLayoutComponent } from './content/social-layout.component';
import { NextPageLayoutComponent } from './content/next-page-layout.component';

const routes:Routes = [
    {path: '',  redirectTo: 'home', pathMatch: 'full' },
    {path: 'sent-emails', component: SentEmailsLayoutComponent},
    {path: 'home', component: HomeLayoutComponent},
    {path: 'home/email1', component: Email1LayoutComponent},
    {path: 'home/social', component: SocialLayoutComponent},
    {path: 'home/page2', component: NextPageLayoutComponent}
];


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}