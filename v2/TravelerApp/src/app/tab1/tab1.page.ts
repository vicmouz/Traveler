import { Component, OnInit } from '@angular/core';
import  axios  from 'axios';
//import { HttpClient, Headers, RequestOptions } from '@angular/common/http';

const API = "http://localhost:3000/users/"; 


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
token;
  constructor() {}
  ngOnInit() {
  }

  verifyLogin(){
    this.token = window.sessionStorage.getItem("token");
    if(this.token != null) {
      console.log("Acesso");
      sessionStorage.setItem("login", "a");

    }else{
      setTimeout(() => {this.verifyLogin()}, 500);
    }
  }

  doLogin(){
    let user = {
      'email':'teste123',
      'password': '123456'
    };
    
 /*   this.httpClient.login(user).subscribe(data => {
      let retrivedData = JSON.parse(data);
      console.log(retrivedData);
      sessionStorage.setItem("token", retrivedData.token);
      sessionStorage.setItem("userId", retrivedData.user._id);
      console.log(sessionStorage.getItem("token"));
    });*/
  }

  doSignUp(){
    const user = {
      first_name: 'oi',
      last_name: 'ola',
      email: 'teste123',
      password: '123456'
    };
    axios.post(API + 'new', user).then(function (res)
    {
      console.log(res);
    });
  }


}
