import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor() {}

  onSubmit(): void {
    // Comprobación de las credenciales (aquí puedes hacerlo más complejo)
    if (this.username === 'admin' && this.password === 'password') {
      // Almacenar estado de inicio de sesión en localStorage
      localStorage.setItem('loggedIn', 'true');
      alert('Login successful!');
      // Redireccionar a la página de inicio o hacer cualquier otra acción necesaria
    } else {
      alert('Invalid username or password');
    }
  }


}
