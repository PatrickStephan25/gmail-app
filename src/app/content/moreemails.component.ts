import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-moreemails',
    templateUrl: 'moreemails.component.html',
    styleUrls: ['moreemails.component.css']
})
export class MoreEmailsComponent{
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