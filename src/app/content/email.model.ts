

export class EmailModel{
    sender: string;
    subject: string;
    partOfMessage: string;
    time: string;

    constructor (sender:string, subject:string, partOfMessage:string, time:string){
        this.sender=sender;
        this.subject=subject;
        this.partOfMessage=partOfMessage;
        this.time=time;
    }
}