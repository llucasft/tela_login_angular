import { Component } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  user: User = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    gender: ""
  }

  constructor(
    private service: UserService,
    private router: Router
  ) {}

  createNewUser(){
    this.service.create(this.user).subscribe(() => {
      this.router.navigate(['/formLogin'])
    })
  }
}
