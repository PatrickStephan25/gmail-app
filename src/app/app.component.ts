import { Component } from '@angular/core';
import { EmailModel } from './content/email.model';
import { SentEmailModel } from './content/sentemail.model';
import { mock_email } from './content/mock_email';
import { mock_sent_email } from './content/mock_sent_email';
import { mock_more_email } from './content/mock_more_email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gmail';
  emails: EmailModel []=[];
  sentemails: SentEmailModel []=[];
  moreemails: EmailModel []=[];

  constructor(){
    for (var email of mock_email){
      console.log(email);
      this.emails.push(email);
    }
  
    for (var sentemail of mock_sent_email){
      console.log(sentemail);
      this.sentemails.push(sentemail);
    }
    for (var moreemail of mock_more_email){
      console.log(moreemail);
      this.moreemails.push(moreemail);
    }
  }
}
