import { Error } from './error';

export class PasswordStrength {
    init() {
        let validation = this.validatePassword();
        (validation.valid) ? this.checkPasswordStrength() : this.sendError(validation.errorCode);
        //console.log(this);
    }

    sendError(errorCode) {
        let error = new Error(errorCode);
        return error;
    }

    validatePassword() {
        
    }

    checkPasswordStrength() {

    }
}