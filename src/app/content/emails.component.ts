import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-emails',
    templateUrl: 'emails.component.html',
    styleUrls: ['emails.component.css']
})
export class EmailsComponent{
    @Input() route: string;
    @Input() sender: string;
    @Input() subject: string;
    @Input() partOfMessage: string;
    @Input() time: string;
    
 
 
   constructor(){
       this.route="sent-email";
       this.sender= "Unknown Sender";
       this.subject= "(no subject)";
       this.partOfMessage= "";
       this.time="Feb 1";
   }


}