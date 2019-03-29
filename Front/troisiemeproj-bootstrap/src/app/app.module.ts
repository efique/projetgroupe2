import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { RechercheBienComponent } from './recherche-bien/recherche-bien.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LienVendreAccueilComponent } from './lien-vendre-accueil/lien-vendre-accueil.component';
import { ApercuAnnonceComponent } from './apercu-annonce/apercu-annonce.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InscriptionComponent,
    AccueilComponent,
    FooterComponent,
    RechercheBienComponent,
    LienVendreAccueilComponent,
    ApercuAnnonceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }
