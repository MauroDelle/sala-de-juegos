import { Component } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { AuthService } from '../../auth/services/auth.service';
import Swal from 'sweetalert2';
import { Observable, of, from} from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../core/components/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  loadingAboutMe: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  loadAboutMe() {
    this.loadingAboutMe = true; // Activar la animación de carga
    setTimeout(() => {
      this.loadingAboutMe = false; // Desactivar la animación después de 2 segundos (simulado)
    }, 2000);
  }

  // logout() {
  //   this.AuthService.logout().then(() => {
  //     // Manejar cualquier lógica adicional después de cerrar sesión, como redirigir al usuario a la página de inicio.
  //   }).catch((error) => {
  //     // Manejar errores, si los hay.
  //     console.error(error);
  //   });
  // }

  logout(): void {
    Swal.fire({
      title: '¿Estás seguro de cerrar sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, nos vemos!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout().then( res => {
          this.router.navigateByUrl('/login');
        }, err => {
          Swal.fire(err);
        }
        );
      }
    })
  }


  goToAhorcado() {
    this.router.navigateByUrl('games/ahorcado');
  }

  goToMayorOMenor() {
    this.router.navigateByUrl('games/mayor-menor');
  }

  goToPreguntados() {
    this.router.navigateByUrl('games/preguntados');
  }

  goToBuscaminas() {
    this.router.navigateByUrl('games/buscaminas');
  }


}
