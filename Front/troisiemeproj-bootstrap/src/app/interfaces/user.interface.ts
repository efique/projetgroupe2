export class User {
 
    email: string;
    password: string;
    token: string;
 
    constructor(values: Object = {}) { Object.assign(this, values); }
 
}