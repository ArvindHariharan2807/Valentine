import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valentine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valentine.component.html',
  styleUrls: ['./valentine.component.css']
})
export class ValentineComponent {

  @Output() yes = new EventEmitter<void>();

  hearts = Array.from({ length: 24 });

  onYes() {
    this.yes.emit();
  }

  escapeNo() {
    const btn = document.querySelector('.no-btn') as HTMLElement;
    if (!btn) return;

    const padding = 60;
    const maxX = window.innerWidth - btn.offsetWidth - padding;
    const maxY = window.innerHeight - btn.offsetHeight - padding;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  }

  randomLeft() {
    return Math.random() * 100;
  }

  randomDuration() {
    return 6 + Math.random() * 6;
  }

  randomDelay() {
    return Math.random() * 5;
  }
}
