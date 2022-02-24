

export class SentEmailModel{
    route: string;
    recipient: string;
    subject: string;
    partOfMessage: string;
    time: string;

    constructor (route:string, recipient:string, subject:string, partOfMessage:string, time:string){
        this.route=route;
        this.recipient=recipient;
        this.subject=subject;
        this.partOfMessage=partOfMessage;
        this.time=time;
    }
}