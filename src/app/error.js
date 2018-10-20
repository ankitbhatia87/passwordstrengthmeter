export class Error {
    getErrorMessage(errorCode) {
        switch (errorCode) {
            case 'SHORT_LENGTH' :
                return "Please enter at least 6 digits.";
            case 'NO_LOWER_CASE' :
                return 'Please enter at least 1 lowercase character.';
            case 'NO_UPPER_CASE' :
                return 'Please enter at least 1 uppercase character.';
            case 'NO_NUMBER' :
                return 'Please enter at least 1 number.';
            case 'INVALID_SYMBOL' :
                return 'Please enter at least 1 symbol out of these &, #, @, $, *, !, ^, %, -, _, |';
            default :
                return 'Due to some technical reasons system is unavailable right now.'
        }
    }
}