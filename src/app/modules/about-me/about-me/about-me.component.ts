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

  
}