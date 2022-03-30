import { Injectable } from "@angular/core";
import { EmailModel } from "./email.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn:'root'}
)
export class EmailsService{
    

    constructor(private db:AngularFireDatabase) {

    }

    getEmails(){
        return this.db.list<EmailModel>("emails").valueChanges();
    }
    getEmail(index:number){
        
    }

    public addEmail(email:EmailModel){
        this.db.list<EmailModel>("emails").push(email);
    }
}