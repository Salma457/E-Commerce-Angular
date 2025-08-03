import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
      ])
    });
  }
get formControls(){
  return this.loginForm.controls;
}
  handleSubmitForm(){
    console.log(this.loginForm.value);

  }
}
