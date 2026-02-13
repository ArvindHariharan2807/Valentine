import { Component, EventEmitter, Output, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-curtain',
  standalone: true,
  templateUrl: './curtain.component.html',
  styleUrls: ['./curtain.component.css']
})
export class CurtainComponent {

  @Output() finished = new EventEmitter<void>();

  opened = false;

  private audio?: HTMLAudioElement;
  private isBrowser = false;

  // ✨ dust particles data
  particles = Array.from({ length: 40 }, () => ({
    left: Math.random() * 40 + 30,
    top: Math.random() * 100,
    delay: Math.random() * 6,
    size: Math.random() * 3 + 1
  }));

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    // 🎶 create Audio ONLY in browser
    if (this.isBrowser) {
      this.audio = new Audio('assets/sounds/curtain-open.mp3');
      this.audio.volume = 0.6;
    }
  }

  openGift() {
    if (this.opened) return;

    this.opened = true;

    // 🎶 play sound only in browser
    if (this.isBrowser && this.audio) {
      this.audio.play().catch(() => {});
    }

    setTimeout(() => {
      this.finished.emit();
    }, 1700);
  }
}
