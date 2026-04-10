import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Profil } from './pages/profil/profil';
import { Projets } from './pages/projets/projets';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }, // Redirection par défaut
  { path: 'accueil', component: Home },
  { path: 'a-propos', component: About },
  { path: 'profil', component: Profil },
  { path: 'projets', component: Projets },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: 'accueil' } // 404 -> Retour accueil
];
