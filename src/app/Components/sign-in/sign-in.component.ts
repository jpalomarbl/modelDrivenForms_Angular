import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';import { UserDTO } from '../../Models/user.dto';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  user: UserDTO = new UserDTO('', '', '', '', '', '', new Date());

  signIn(form: NgForm): void {
    console.log(form);
    if (form.valid) {
      this.joinNow();
    } else {
      console.error('INVALID FORM!');
    }
  }
  
  joinNow(): void {
    console.log(
      'User email --> ' +
        this.user.email +
        ', User password --> ' +
        this.user.password +
        ', User name -->'+
        this.user.name +
        ', User surname1 -->'+
        this.user.surname1 +
        ', User surname2 -->'+
        this.user.surname2 +
        ', User alias -->'+
        this.user.alias +
        ', User birthdate -->'+
        this.user.birthdate.toISOString().split('T')[0]
    );
  }
}
