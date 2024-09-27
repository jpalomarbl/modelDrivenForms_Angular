import { Component } from '@angular/core';
import { UserDTO } from '../../Models/user.dto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: UserDTO = new UserDTO('', '', '', '', '', '', new Date());

  constructor() {}

  checkLogin(): void {
    console.log(
      'User email --> ' + 
        this.user.email +
      ', User password --> ' +
        this.user.password
    )
  }
}
