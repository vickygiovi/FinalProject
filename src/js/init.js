export class InitDOM {
    constructor() {

    }

    UpdateNumberWindows() {
        let numberWindows = numberOfWindows;
    
        for (let i = 0; i < numberWindows; i++) {
            nextNumberButton[i].style.display = "block";     
        }
    
        for (let i = numberWindows; i < 10; i++) {
            ventanillas[i].style.display = "none";
            nextNumberButton[i].style.display = "none";
        }
    }

    LoadWindows() {

        if (windowLetter) {
            ventanillaTexto[0].innerText = "Ventanilla A"
        } else {
            ventanillaTexto[0].innerText = "Ventanilla 1"
        }
    
        if (windowLetter) {
            ventanillaTexto[1].innerText = "Ventanilla B"
        } else {
            ventanillaTexto[1].innerText = "Ventanilla 2"
        }
    
        if (windowLetter) {
            ventanillaTexto[2].innerText = "Ventanilla C"
        } else {
            ventanillaTexto[2].innerText = "Ventanilla 3"
        }
    
        if (windowLetter) {
            ventanillaTexto[3].innerText = "Ventanilla D"
        } else {
            ventanillaTexto[3].innerText = "Ventanilla 4"
        }
    
        if (windowLetter) {
            ventanillaTexto[4].innerText = "Ventanilla E"
        } else {
            ventanillaTexto[4].innerText = "Ventanilla 5"
        }
    
        if (windowLetter) {
            ventanillaTexto[5].innerText = "Ventanilla F"
        } else {
            ventanillaTexto[5].innerText = "Ventanilla 6"
        }
    
        if (windowLetter) {
            ventanillaTexto[6].innerText = "Ventanilla G"
        } else {
            ventanillaTexto[6].innerText = "Ventanilla 7"
        }
    
        if (windowLetter) {
            ventanillaTexto[7].innerText = "Ventanilla H"
        } else {
            ventanillaTexto[7].innerText = "Ventanilla 8"
        }
    
        if (windowLetter) {
            ventanillaTexto[8].innerText = "Ventanilla I"
        } else {
            ventanillaTexto[8].innerText = "Ventanilla 9"
        }
    
        if (windowLetter) {
            ventanillaTexto[9].innerText = "Ventanilla J"
        } else {
            ventanillaTexto[9].innerText = "Ventanilla 10"
        }
    }

    LoadButtons() {

        if (windowLetter) {
            nextNumberButton[0].innerText = "Next Number Ventanilla A"
        } else {
            nextNumberButton[0].innerText = "Next Number Ventanilla 1"
        }
    
        if (windowLetter) {
            nextNumberButton[1].innerText = "Next Number Ventanilla B"
        } else {
            nextNumberButton[1].innerText = "Next Number Ventanilla 2"
        }
    
        if (windowLetter) {
            nextNumberButton[2].innerText = "Next Number Ventanilla C"
        } else {
            nextNumberButton[2].innerText = "Next Number Ventanilla 3"
        }
    
        if (windowLetter) {
            nextNumberButton[3].innerText = "Next Number Ventanilla D"
        } else {
            nextNumberButton[3].innerText = "Next Number Ventanilla 4"
        }
    
        if (windowLetter) {
            nextNumberButton[4].innerText = "Next Number Ventanilla E"
        } else {
            nextNumberButton[4].innerText = "Next Number Ventanilla 5"
        }
    
        if (windowLetter) {
            nextNumberButton[5].innerText = "Next Number Ventanilla F"
        } else {
            nextNumberButton[5].innerText = "Next Number Ventanilla 6"
        }
    
        if (windowLetter) {
            nextNumberButton[6].innerText = "Next Number Ventanilla G"
        } else {
            nextNumberButton[6].innerText = "Next Number Ventanilla 7"
        }
    
        if (windowLetter) {
            nextNumberButton[7].innerText = "Next Number Ventanilla H"
        } else {
            nextNumberButton[7].innerText = "Next Number Ventanilla 8"
        }
    
        if (windowLetter) {
            nextNumberButton[8].innerText = "Next Number Ventanilla I"
        } else {
            nextNumberButton[8].innerText = "Next Number Ventanilla 9"
        }
    
        if (windowLetter) {
            nextNumberButton[9].innerText = "Next Number Ventanilla J"
        } else {
            nextNumberButton[9].innerText = "Next Number Ventanilla 10"
        }
    }

    init() {
        this.UpdateNumberWindows();
        this.LoadButtons();
        this.LoadWindows();
    }
}