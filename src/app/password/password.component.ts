import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  @Output() unlocked = new EventEmitter<void>();

  hearts = Array(30).fill(0);

  password = '';
  error = false;

  private correctPassword = '10102020'; // 👈 your anniversary

  unlock() {
    if (this.password === this.correctPassword) {
      this.error = false;

      // 🎉 SUCCESS → tell parent to move forward
      this.unlocked.emit();
    } else {
      this.error = true;
    }
  }
}
