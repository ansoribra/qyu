import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from './common/headers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  visibility="hidden";
    username:string;
    password:string;

  constructor(public router: Router, public http: Http) { }

  ngOnInit() {
  }

  tutup(){
    this.visibility="hidden";
  }

  buka(){
    this.visibility="visible";
  }

  login(user_name, user_password) {

    let body = JSON.stringify({ user_name, user_password });
    this.http.post('http://localhost:8090/login', body, { headers: contentHeaders })
        .subscribe(
            response => {
              alert("halo")
              console.log(response)
              localStorage.setItem('id_token', response.json().token);
              this.router.navigate(['sellerarea']);
            },
            error => {
              alert(error.text());
              console.log(error.text());
            }
        );
  }
}
