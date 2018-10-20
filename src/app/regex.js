export class Regex {
    lowercase (val) {
        return val.match(/[a-z]/g);
    }

    uppercase (val) {
        return val.match(/[A-Z]/g);
    }

    number (val) {
        return val.match(/[0-9]/g);
    }

    symbol (val) {
        return val.match(/[-&#@$*!^_|]/g);
    }
}