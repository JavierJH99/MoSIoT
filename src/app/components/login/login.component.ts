import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any;
  users = [
    {
      user:'admin',
      password:'admin'
    }
  ];

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const userFind = this.users.find((user:any) => user.user === this.form.get('user').value && user.password === this.form.get('password').value);
    if(userFind)
    {
      alert('Usuario Logeado!');
      this.router.navigateByUrl('/');
    }
  }
}
