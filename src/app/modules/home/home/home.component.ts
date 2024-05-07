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

  gameNames: string[] = ["Buscaminas", "Nombre del Juego 2", "Nombre del Juego 3", "Nombre del Juego 4"];


  highlightedGameIndex: number | null = null;

  highlightGame(index: number) : void {

    this.highlightedGameIndex = index;
  }

  removeHighlight() : void {
    this.highlightedGameIndex = null;
  }


}
