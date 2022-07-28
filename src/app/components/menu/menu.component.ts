import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetAlertsComponent } from '../shared/sweet-alerts/sweet-alerts.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  loggeado:boolean = false;
  token!:string;

  constructor(private router: Router, private sweetAlert: SweetAlertsComponent) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')!;
    if(this.token != undefined && this.token != ""){
      this.loggeado = true;
    }
    else{
      this.loggeado = false;
    }
  }

  loginView(){
    this.router.navigateByUrl("Login");
  }

  logOut(){
    Swal.fire({
      title: 'Do you want to log out?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#0d6efd',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem('token','');
        this.sweetAlert.logOutSuccess();
      }
    });
  }
}
