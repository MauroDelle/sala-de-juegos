import { Component, OnInit } from '@angular/core';


import Swal from 'sweetalert2';
import { FirestoreService } from '../../../../../core/services/firestore.service';
import { AuthService } from '../../../../auth/services/auth.service';
import { PokemonService } from '../../services/pokemon.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {

  maxMistakes: number = 6;
  answer: string = '';
  mistakes: number = 0;
  guessed: string[] = [];
  keyboard: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '-'
  ];
  pokemones: string[] = [];
  imageUrl: string = '';
  wordStatus: string = '';
  loggedUser: any ;

  constructor(private pokemonService: PokemonService, private firestoreService: FirestoreService, private authService: AuthService) {}


  ngOnInit(): void {
    this.getPokemonNames();
    this.randomWord();
    this.guessedWord();

    const user = this.authService.getLoggedUser();
    if (user) {
      this.loggedUser = user;
    }
  }

  getPokemonNames() {
    this.pokemonService.getAllPokemonNames().subscribe(
      (data: any) => {
        this.pokemones = data.results.map((pokemon: any) => pokemon.name);
      },
      (error) => {
        console.error('Error al traer los nombres de los Pokemones', error);
      }
    );
  }


  handleGuess(chosenLetter: string) {
    if (!this.guessed.includes(chosenLetter)) {
      this.guessed.push(chosenLetter);
      if (this.answer.includes(chosenLetter)) {
        this.guessedWord();
        this.checkIfGameWon();
      } else {
        this.mistakes++;
        this.checkIfGameLost();
      }
    }
  }


  randomWord() {
    this.answer = this.pokemones[Math.floor(Math.random() * this.pokemones.length)];
    console.log(this.answer);
    this.pokemonService.getPokemonDetails(this.answer).subscribe(
      (data: any) => {
        this.imageUrl = data.sprites.front_default;
      },
      (error) => {
       Swal.fire(error);
      }
    );

  }

  checkIfGameWon() {
    if (this.wordStatus == this.answer) {
      Swal.fire({
        title: 'Ganaste! :)',
        imageUrl: this.imageUrl,
        imageWidth: 150,
        imageHeight: 150,
        icon: 'success',
        confirmButtonColor: '#3085d6',
      })

      this.saveGameScore('Ganó', this.answer);
      this.reset();
    }
  }

  checkIfGameLost() {
    if (this.mistakes == this.maxMistakes) {
      Swal.fire({
        title: 'Perdiste! La respuesta era: ' + this.answer + ' :(',
        imageUrl: this.imageUrl,
        imageWidth: 150,
        imageHeight: 150,
        icon: 'error',
        confirmButtonColor: '#3085d6',
      });

      this.saveGameScore('Perdió', this.answer);

      this.reset();
    }
  }



  reset() {
    this.mistakes = 0;
    this.guessed = [];
    this.keyboard = 'abcdefghijklmnopqrstuvwxyz-'.split('');
    this.randomWord();
    this.guessedWord();
  }

  guessedWord() {
    this.wordStatus = this.answer
      .split('')
      .map((letter) => (this.guessed.includes(letter) ? letter : ' _ '))
      .join('');
  }


  saveGameScore(gameStatus: string, guess: string) {

    let date = new Date();
    const timestamp = new Date(date);

    const score = {
      Resultado: gameStatus,
      Pokemon: guess,
      Errores:  this.mistakes,
      Fecha: timestamp,
      Usuario:  this.loggedUser.email
    };

    this.firestoreService.save(score, 'ahorcado-score');
  }



}
