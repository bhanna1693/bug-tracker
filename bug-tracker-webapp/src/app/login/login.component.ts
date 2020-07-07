import { Component, OnInit } from '@angular/core';
import {AppService} from "../services/app.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: FormGroup = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null)
  });
  error = false;

  constructor(private app: AppService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.app.authenticate(this.credentials.value, () => {
      this.router.navigateByUrl('/');
    });
    return false;
  }

}
