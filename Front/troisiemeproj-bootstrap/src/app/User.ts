export class User {
    mail: string;
    password: string;

    // tslint:disable-next-line:ban-types
    constructor(values: Object = {}) {
        // Constructor initialization
        Object.assign(this, values);
    }
}
