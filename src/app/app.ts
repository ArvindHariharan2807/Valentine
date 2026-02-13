import { Component, signal } from '@angular/core';
import { CurtainComponent } from './curtain/curtain.component';
import { PasswordComponent } from './password/password.component';
import { ValentineComponent } from './valentine/valentine.component';
import { GiftsComponent } from './gifts/gifts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CurtainComponent,
    PasswordComponent,
    ValentineComponent,
    GiftsComponent
  ],
  templateUrl: './app.html'
})
export class App {

  page = signal<'curtain' | 'password' | 'valentine' | 'gifts'>('curtain');

  goToGifts() {
    console.log('Navigating to gifts'); // 🔍 debug
    this.page.set('gifts');
  }
}
