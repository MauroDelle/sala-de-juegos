import { Component } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { AuthService } from '../../auth/services/auth.service';
import Swal from 'sweetalert2';
import { Observable, of, from} from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgComponentOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  loadingAboutMe: boolean = false;

  constructor(private AuthService: AuthService) { }

  loadAboutMe() {
    this.loadingAboutMe = true; // Activar la animación de carga
    setTimeout(() => {
      this.loadingAboutMe = false; // Desactivar la animación después de 2 segundos (simulado)
    }, 2000);
  }

  logout() {
    this.AuthService.logout().then(() => {
      // Manejar cualquier lógica adicional después de cerrar sesión, como redirigir al usuario a la página de inicio.
    }).catch((error) => {
      // Manejar errores, si los hay.
      console.error(error);
    });
  }


}
