import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FAQS } from '../assets/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 faqs = FAQS;
  activeIndex: number = -1;

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }
}
