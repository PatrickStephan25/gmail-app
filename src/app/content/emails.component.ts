import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-emails',
    templateUrl: 'emails.component.html',
    styleUrls: ['emails.component.css']
})
export class EmailsComponent{
    @Input() sender: string;
    @Input() subject: string;
    @Input() partOfMessage: string;
    @Input() time: string;
 
 
   constructor(){
       this.sender= "Unknown Sender";
       this.subject= "(no subject)";
       this.partOfMessage= "";
       this.time="Feb 1";
   }


}