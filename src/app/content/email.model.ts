

export class EmailModel{
    route: string;
    sender: string;
    subject: string;
    partOfMessage: string;
    time: string;

    constructor (route:string, sender:string, subject:string, partOfMessage:string, time:string){
        this.route=route;
        this.sender=sender;
        this.subject=subject;
        this.partOfMessage=partOfMessage;
        this.time=time;
    }
}