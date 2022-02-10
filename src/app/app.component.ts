import { Component } from '@angular/core';
import { EmailModel } from './content/email.model';
import { mock_email } from './content/mock_email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gmail';
  emails: EmailModel []=[];

  constructor(){
    for (var email of mock_email){
      console.log(email);
      this.emails.push(email);
    }
  }
}
