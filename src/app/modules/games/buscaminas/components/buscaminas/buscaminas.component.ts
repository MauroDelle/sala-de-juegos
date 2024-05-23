import { Component } from '@angular/core';
import { Board } from '../../models/board';
import { Cell } from '../../models/cell';
import Swal from 'sweetalert2';
import { FirestoreService } from '../../../../../core/services/firestore.service';
import { AuthService } from '../../../../auth/services/auth.service';


@Component({
  selector: 'app-buscaminas',
  templateUrl: './buscaminas.component.html',
  styleUrl: './buscaminas.component.css'
})
export class BuscaminasComponent {

  title = 'Buscaminas';
  board!: Board;
  loggedUser: any;

  ngOnInit(): void {
    this.reset();
    this.board = new Board(20,50);

    const user = this.authService.getLoggedUser();
    if (user) {
      this.loggedUser = user;
    }
  }

  constructor(private firestoreService: FirestoreService, private authService: AuthService) {}

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      Swal.fire('Perdiste',"","error");
      this.saveGameScore('Perdió');
    } else if (result === 'win') {
      Swal.fire('GANASTE!!!',"","success");
      this.saveGameScore('Ganó');
    }
  }
  flag(cell: Cell) {
    if (cell.status === 'flag') {
      cell.status = 'open';
    } else {
      cell.status = 'flag';
    }
  }

  reset() {
    this.board = new Board(20, 50);
  }

  saveGameScore(gameStatus: string) {

    let date = new Date();
    const timestamp = new Date(date);

    const score = {
      Resultado: gameStatus,
      Puntos:  400 - this.board.remainingCells,
      Fecha: timestamp,
      Usuario:  this.loggedUser.email
    };

    this.firestoreService.save(score, 'buscaminas-score');
  }


}
