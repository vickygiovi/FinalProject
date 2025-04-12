// Validations

export class Validation {
    constructor () {
 
    }

    ValidateNumberWindows(value) {
        return Number.isInteger(value)
            && value >= 1
            && value <= 10;
    }
    
    ParseIntCustom(value) {
        return Number.isInteger(value)
            && value > 0
            && value < 1000
    }
}

/*----------*/