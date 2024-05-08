import { Component } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgComponentOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  loadingAboutMe: boolean = false;

  constructor() { }

  loadAboutMe() {
    this.loadingAboutMe = true; // Activar la animación de carga
    setTimeout(() => {
      this.loadingAboutMe = false; // Desactivar la animación después de 2 segundos (simulado)
    }, 2000);
  }



}
