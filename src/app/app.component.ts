import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'modelDrivenForms_Angular';
}
