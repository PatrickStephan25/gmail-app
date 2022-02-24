import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-sentemails',
    templateUrl: 'sentemails.component.html',
    styleUrls: ['sentemails.component.css']
})
export class SentEmailsComponent{
    @Input() route: string;
    @Input() recipient: string;
    @Input() subject: string;
    @Input() partOfMessage: string;
    @Input() time: string;
    
 
 
   constructor(){
       this.route="sent-email";
       this.recipient= "To:";
       this.subject= "(no subject)";
       this.partOfMessage= "";
       this.time="Feb 1";
   }


}