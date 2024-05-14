import { NgComponentOutlet } from '@angular/common';
import { Component, HostListener, NgModule } from '@angular/core';
import { Observable, of, fromEvent, timer } from 'rxjs';
import { mergeMap, debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { User } from '../../auth/interfaces/user';
import { AuthModule } from '../../auth/auth.module';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  loggedUser = this.authService.getLoggedUser();

  constructor(private authService: AuthService) { }

  // ngOnInit(): void {
  //   this.authService.getLoggedUser().then(user => {
  //     console.log(user);
  //   }).catch(error => {
  //     console.error(error);
  //   });
  // }

}
