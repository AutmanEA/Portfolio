import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  template: `
    <aside class="profile-card">
      <div class="profile-header">
        <div class="avatar-container">
          <div class="avatar-placeholder">
             <span>Photo ici</span>
          </div>
          <span class="status-online"></span>
        </div>

        <h2 class="profile-name">Autman</h2>
        <p class="profile-tagline">Développeur Fullstack</p>
      </div>

      <div class="profile-bio">
        <p>
          Passionné par la création d'interfaces intuitives et d'architectures robustes.
          Expertise en **Angular**, **Tailwind** et **Python**. 🐃
        </p>
      </div>

      <div class="profile-footer">
        <button class="contact-button">
          Me contacter
        </button>
      </div>
    </aside>
  `,
  styleUrls: ['./profile-card.css']
})
export class ProfileCard {}
