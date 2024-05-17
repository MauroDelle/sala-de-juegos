import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../modules/auth/services/auth.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth'; // Asegúrate de importar el tipo User

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedUser$: Observable<User | null>;

  constructor(private authService: AuthService, private router: Router) {
    this.loggedUser$ = this.authService.user$; // Asigna el observable del servicio
  }

  ngOnInit(): void {}

  logout(): void {
    Swal.fire({
      title: '¿Estás seguro de cerrar sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, nos vemos!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout().then(() => {
          this.router.navigateByUrl('/login');
        }).catch(err => {
          Swal.fire('Error', err.message, 'error');
        });
      }
    });
  }

  goHome(): void {
    this.router.navigateByUrl('/home');
  }

  goAboutMe(): void {
    this.router.navigateByUrl('/about-me');
  }
}
