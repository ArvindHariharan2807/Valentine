import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feb.component.html',
  styleUrls: ['./feb.component.css']
})
export class FebComponent {

  stage: 'curtain' | 'password' | 'valentine' = 'curtain';

  password = '';
  error = false;

  readonly SECRET = '10102020'; // anniversary date 💖

  openGift() {
    this.stage = 'password';
  }

  verifyPassword() {
    if (this.password === this.SECRET) {
      this.stage = 'valentine';
      this.error = false;
    } else {
      this.error = true;
    }
  }
}
