import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Observable, of, from} from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '../../auth.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  user: User = {
    email: '',
    password: '',
  };

  constructor(
    private AuthService: AuthService,
    private router: Router
  ){}

  register() {
    const { email, password } = this.user;
    Swal.fire(email, password);
    this.AuthService.register(email, password).then( res => {
      Swal.fire('Registrado Correctamente');
      this.login();
    }).catch((error) => {
      Swal.fire(error.message);
      return null;
    });
  }

  login() {
    const { email, password } = this.user;
    this.AuthService.login(email, password).then(
      (res) => {
        Swal.fire('Bienvenido!');
        this.router.navigateByUrl('/home');
      },
      (error) => {
        Swal.fire(error.message);
      }
    );
  }

  autoLogin()
  {
    this.user.email = 'mauro@mail.com';
    this.user.password = 'mauro123';
  }




}
