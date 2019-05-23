import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../User';


@Injectable()
export class InscriptionService {

    configUrl = 'localhost:3015/inscription';

    constructor(private http: HttpClient) {}

    /* getInscription() {
        return this.http.get<Inscription>(this.configUrl); // this.http.get<Hero>(LIEN BACK);
    } */
}
