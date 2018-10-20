import { Error } from './error';
import { Validate } from './validation';

const validate = new Validate();
const error = new Error();

export class PasswordStrength {

    init(val) {
        let validation = this.validatePassword(val);
        console.log(validation.errorCode);
        (validation.valid) ? this.removeErrorMessage() : this.sendError(validation.errorCode);
        this.checkPasswordStrength(val);
    }

    removeErrorMessage() {
        document.getElementById('error').innerHTML = '';
    }

    sendError(errorCode) {
        document.getElementById('error').innerHTML = error.getErrorMessage(errorCode);
    }

    validatePassword(val) {
        if(!validate.checkLength(val)) {
            return {
                valid: false,
                errorCode: 'SHORT_LENGTH'
            }
        } else if(!validate.checkLowerCase(val)) {
            return {
                valid: false,
                errorCode: 'NO_LOWER_CASE'
            }
        } else if(!validate.checkUpperCase(val)) {
            return {
                valid: false,
                errorCode: 'NO_UPPER_CASE'
            }
        } else if(!validate.checkNumber(val)) {
            return {
                valid: false,
                errorCode: 'NO_NUMBER'
            }
        } else if(!validate.checkSymbol(val)) {
            return {
                valid: false,
                errorCode: 'INVALID_SYMBOL'
            }
        } else {
            return {
                valid: true,
                errorCode: 'VALID'
            }
        }
    }

    checkPasswordStrength() {

    }
}