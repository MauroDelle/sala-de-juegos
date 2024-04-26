import { NgComponentOutlet } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Observable, of, fromEvent, timer } from 'rxjs';
import { mergeMap, debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgComponentOutlet,CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  // Propiedad para controlar la rotación del círculo
  rotationDegree: number = 0;

  showHeader = true; // Variable para controlar si se muestra el header
  constructor() { }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    // Si el scroll es mayor a 0, ocultamos el header; de lo contrario, lo mostramos
    this.showHeader = currentScroll <= 0;
  }


  

}

