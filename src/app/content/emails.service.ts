import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmailModel } from "./email.model";

@Injectable(
    {providedIn:'root'}
)
export class EmailsService{
    private baseUrl:string="https://app-9a2c8-default-rtdb.firebaseio.com/";
    private emailsEndPoint:string="emails.json";

    constructor(private http:HttpClient){

    }

    getEmails(){
        return this.http.get<EmailModel[]>(this.baseUrl+this.emailsEndPoint);
    }
    getEmail(index:number){
        return this.http.get<EmailModel[]>(this.baseUrl+ 'emails' +'/'+index+'.json');
    }
}