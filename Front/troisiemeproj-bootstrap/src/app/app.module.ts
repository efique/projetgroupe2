import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { HeaderComponent } from './header/header.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { RechercheBienComponent } from './recherche-bien/recherche-bien.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LienVendreAccueilComponent } from './lien-vendre-accueil/lien-vendre-accueil.component';
import { ApercuAnnonceComponent } from './apercu-annonce/apercu-annonce.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';
import { CreerAnnonceComponent } from './creer-annonce/creer-annonce.component';
import { AjouterBienComponent } from './ajouter-bien/ajouter-bien.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';

import { InscriptionService } from './inscription/inscription.service';
import { ConnexionService } from './connexion/connexion.service';
import { AjouterBienService } from './ajouter-bien/ajouter-bien.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MesBiensComponent } from './mes-biens/mes-biens.component';
import { ListeAnnoncesComponent } from './liste-annonces/liste-annonces.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { ListeAgencesComponent } from './liste-agences/liste-agences.component';
import { DetailsBienComponent } from './details-bien/details-bien.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { BienComponent } from './bien/bien.component';
import { CreerAnnonceService } from './creer-annonce/creer-annonce.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InscriptionComponent,
    ConnexionComponent,
    AccueilComponent,
    FooterComponent,
    RechercheBienComponent,
    LienVendreAccueilComponent,
    ApercuAnnonceComponent,
    ConnexionComponent,
    ContactComponent,
    CreerAnnonceComponent,
    AjouterBienComponent,
    MonCompteComponent,
    MesBiensComponent,
    ListeAnnoncesComponent,
    ListeUtilisateursComponent,
    ListeAgencesComponent,
    DetailsBienComponent,
    AnnonceComponent,
    BienComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [
    InscriptionService,
    ConnexionService,
    AjouterBienService,
    CreerAnnonceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
