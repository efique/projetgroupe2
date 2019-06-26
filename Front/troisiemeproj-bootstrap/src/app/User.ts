export class User {
    nom: string;
    prenom: string;
    telephone: string;
    rue: string;
    numero: number;
    postal: string;
    ville: string;
    mail: string;
    password: string;

    // tslint:disable-next-line:ban-types
    constructor(values: Object = {}) {
        // Constructor initialization
        Object.assign(this, values);
    }
}
