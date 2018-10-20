import { Regex } from './regex';

const regex = new Regex();

export class Validate {
    checkLength (val) {
        return (val.length >= 6);
    }

    checkLowerCase (val) {
        return (regex.lowercase(val) !== null) ? true : false;
    }

    checkUpperCase (val) {
        return (regex.uppercase(val) !== null) ? true : false;
    }

    checkNumber (val) {
        return (regex.number(val) !== null) ? true : false;
    }

    checkSymbol (val) {
        return (regex.symbol(val) !== null) ? true : false;
    }
}