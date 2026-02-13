import { Component, HostListener, Output, EventEmitter , NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

type Scene = 'moon' | 'gifts' | 'ring' | 'curtain';
type GiftState = 'open' | 'closed';

interface Gift {
  title: string;
  message: string;
  bg: string;
  state: 'open' | 'closed';
}



@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent {

constructor(private zone: NgZone) {}

  @Output() goCurtain = new EventEmitter<void>();

  scene: Scene = 'moon';
  hasAccepted = false;

  moonX = 0;
  moonY = 0;

  gifts: Gift[] = [
    { title:'🌹 Rose Day', message:'Every rose reminds me of you 💖', bg:'assets/memories/rose.jpg', state:'closed' },
    { title:'💍 Propose Day', message:'Will you always be mine? ❤️', bg:'assets/memories/valentine.jpg', state:'closed' },
    { title:'🍫 Chocolate Day', message:'Life is sweeter with you 😘', bg:'assets/memories/chocolate.jpg', state:'closed' },
    { title:'🧸 Teddy Day', message:'A hug you can keep forever 🤍', bg:'assets/memories/teddy.jpg', state:'closed' },
    { title:'🤞 Promise Day', message:'Always us, no matter what 💕', bg:'assets/memories/promise.jpg', state:'closed' },
    { title:'🤗 Hug Day', message:'Let the world wait for a minute 😌', bg:'assets/memories/hug.jpg', state:'closed' },
    { title:'😘 Kiss Day', message:'Sealed with all my love 💋', bg:'assets/memories/kiss.jpg', state:'closed' },
    { title:'❤️ Valentine’s Day', message:'My heart found its place with you 💞', bg:'assets/memories/valentine.jpg', state:'closed' }
  ];

  collectGifts() {
    this.scene = 'gifts';
  }

  goToRing() {
    this.scene = 'ring';
  }

 openGift(g: Gift) {
  this.gifts.forEach(x => x.state = 'closed');
  g.state = 'open';
}

  closeGift(g: Gift) {
    g.state = 'closed';
  }

  // ✅ NOW THIS WORKS
  restart() {
    this.gifts.forEach(g => g.state = 'closed');
    this.goCurtain.emit();
  }

  @HostListener('mousemove', ['$event'])
  moveMoon(e: MouseEvent) {
    if (this.scene !== 'moon') return;
    this.moonX = (e.clientX - window.innerWidth / 2) / 40;
    this.moonY = (e.clientY - window.innerHeight / 2) / 40;
  }
}
