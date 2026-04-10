import { Component } from '@angular/core';
import { ProfileCard } from './components/profile-card/profile-card';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; // AJOUT ICI

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ProfileCard],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'portfolio-front';
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    // On attrape la balise <html>
    const htmlTag = document.documentElement;

    // Si isDarkMode est vrai, on ajoute la classe 'dark' à <html>, sinon on l'enlève
    if (this.isDarkMode) {
      htmlTag.classList.add('dark');
    } else {
      htmlTag.classList.remove('dark');
    }
  }
}
