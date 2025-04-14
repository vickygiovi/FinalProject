// Validations

export class Validation {
    constructor () {
 
    }

    // Validate input of number of windows
    ValidateNumberWindows(value) {
        return Number.isInteger(value)
            && value >= 1
            && value <= 10;
    }
    
    // Validate input of numbers
    ParseIntCustom(value) {
        return Number.isInteger(value)
            && value > 0
            && value < 1000
    }
}

/*----------*/