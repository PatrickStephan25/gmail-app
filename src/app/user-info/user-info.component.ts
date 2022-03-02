import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { UserInfo } from './user-info';

@Injectable()
@Component({
  selector: 'fm-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  myInfo: UserInfo | undefined;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log("Sending get request");
    this.showUserInfo();
  }
  getUserInfo(){
    return this.http.get<UserInfo>("https://app-9a2c8-default-rtdb.firebaseio.com/myinfo.json")
}

  showUserInfo() {
    this.getUserInfo().subscribe((data: UserInfo) =>{
      console.log(data);
      this.myInfo=data; 
    })
  }
}
