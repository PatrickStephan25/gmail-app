import { Component } from "@angular/core";
import { EmailModel } from "./email.model";
import { mock_email } from "./mock_email";

@Component({
    selector:"fm-home-layout",
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent{
    emails: EmailModel []=[];
  
    constructor(){
      for (var email of mock_email){
        console.log(email);
        this.emails.push(email);
      }
    }
}