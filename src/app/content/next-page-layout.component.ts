import { Component } from "@angular/core";
import { EmailModel } from "./email.model";
import { mock_more_email } from "./mock_more_email";

@Component({
    selector:"fm-next-page",
    templateUrl: 'next-page-layout.component.html',
    styleUrls: ['next-page-layout.component.css']
})

export class NextPageLayoutComponent{
    moreemails: EmailModel []=[];

    constructor(){
        for (var moreemail of mock_more_email){
            console.log(moreemail);
            this.moreemails.push(moreemail);
          }
    }
}