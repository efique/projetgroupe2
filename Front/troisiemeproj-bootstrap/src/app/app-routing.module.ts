import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';
import { CreerAnnonceComponent } from './creer-annonce/creer-annonce.component';
import { AjouterBienComponent } from './ajouter-bien/ajouter-bien.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { MesBiensComponent } from './mes-biens/mes-biens.component';
import { ListeAnnoncesComponent } from './liste-annonces/liste-annonces.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { ListeAgencesComponent } from './liste-agences/liste-agences.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'creer_annonce', component: CreerAnnonceComponent },
  { path: 'ajouter_bien', component: AjouterBienComponent },
  { path: 'mon_compte', component: MonCompteComponent },
  { path: 'mes_biens', component: MesBiensComponent },
  { path: 'annonces', component: ListeAnnoncesComponent },
  { path: 'utilisateurs', component: ListeUtilisateursComponent },
  { path: 'agences', component: ListeAgencesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
