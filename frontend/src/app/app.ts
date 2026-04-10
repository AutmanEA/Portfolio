import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
