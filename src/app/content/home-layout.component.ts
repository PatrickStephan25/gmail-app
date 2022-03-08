import { Component, OnInit } from "@angular/core";
import { EmailModel } from "./email.model";
import { EmailsService } from "./emails.service";


@Component({
    selector:"fm-home-layout",
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent implements OnInit{
  emails: EmailModel []=[];
  
  constructor(private emailsService:EmailsService){
      }
  ngOnInit(): void {
    this.emailsService.getEmails().subscribe((data: EmailModel[])=> {
      console.log("Fetching Emails");
      for (var email of data){
        console.log(email);
        this.emails.push(email);
      }
      
    });
  }
}