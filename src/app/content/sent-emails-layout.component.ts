import { Component } from "@angular/core";
import { mock_sent_email } from "./mock_sent_email";
import { SentEmailModel } from "./sentemail.model";

@Component({
    selector:"fm-sent-emails",
    templateUrl: 'sent-emails-layout.component.html',
    styleUrls: ['sent-emails-layout.component.css']
})

export class SentEmailsLayoutComponent{
    sentemails: SentEmailModel []=[];

    constructor(){
        for (var sentemail of mock_sent_email){
            console.log(sentemail);
            this.sentemails.push(sentemail);
          }
    }
}