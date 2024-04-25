import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor() {}

  onSubmit(): void {
    // Validar que las contraseñas coincidan
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Guardar el usuario en el localStorage (o en tu backend)
    const newUser = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    // Aquí puedes enviar los datos a tu backend para guardarlo en la base de datos

    // Ejemplo de almacenamiento en localStorage
    localStorage.setItem('user', JSON.stringify(newUser));

    alert('Registration successful!');
    // Redirigir a la página de inicio de sesión o realizar cualquier otra acción necesaria
  }

}
