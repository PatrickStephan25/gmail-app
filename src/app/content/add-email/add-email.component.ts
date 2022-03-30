import { Component, OnInit } from '@angular/core';
import { EmailModel } from '../email.model';
import { EmailsService } from '../emails.service';

@Component({
  selector: 'app-addemail',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.css']
})
export class AddEmailComponent implements OnInit {

  constructor(private es:EmailsService) { }

  ngOnInit(): void {
  }
  addEmail(email:EmailModel){
    console.log("You clicked submit email");
    console.log(email);
    this.es.addEmail(email);
  }
}
