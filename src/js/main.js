// State of application

let numberOfWindows = 5;
let letter = "A";
let windowLetter = false;
let rangeFrom = 1;
let rangeTo = 999;
let currentNumber = rangeFrom;
// let services = [];

/*----------*/

// DOM References

const ventanillas = document.querySelectorAll(".ventanilla");
const nextNumberButton = document.querySelectorAll(".nextNumberButton");
const ventanillaTexto = document.querySelectorAll(".ventanillaTexto");
const inputLetter = document.querySelector("#selectLetterInput")
const inputNumberWindows = document.querySelector("#numberWindowsInput")
const toggleLetterOrNumber = document.getElementById("toggleLetterOrNumber");
const rangeFromElem = document.getElementById("rangeInputFrom")
const rangeToElem = document.getElementById("rangeInputTo")
const buttonApplyRange = document.getElementById("applyrange");

/*----------*/

// Utils

const esLetra = (caracter) => {
    let ascii = caracter.toUpperCase().charCodeAt(0);
    return ascii > 64 && ascii < 91;
};

function Speak(textToSpeech) {
    let text = textToSpeech
    const utterThis = new SpeechSynthesisUtterance(text)
    utterThis.lang = "es"

    window.speechSynthesis.speak(utterThis)
}

function Beep(frequency) {
    const context = new AudioContext(); //allows access to webaudioapi
    let oscillator = context.createOscillator(); //creates oscillator
    oscillator.type = "square"; //chooses the type of wave
    oscillator.frequency.value = frequency; //assigning the value of oscPitch to the oscillators frequency value
    oscillator.connect(context.destination); //sends to output
    oscillator.start(context.currentTime) //starts the sound at the current time
    oscillator.stop(context.currentTime + 1);
}

/*----------*/

// Validations

function ValidateNumberWindows(numberWindows) {
    return Number.isInteger(numberWindows)
        && numberWindows >= 1
        && numberWindows <= 10;
}

function ParseIntCustom(value) {
    return Number.isInteger(value)
        && value > 0
        && value < 1000
}

/*----------*/

// Events

buttonApplyRange.addEventListener("click", () => {

    let valorFrom = parseInt(rangeFromElem.value);
    if (ParseIntCustom(valorFrom)) {
        rangeFrom = valorFrom;
        if (currentNumber < rangeFrom || currentNumber > rangeTo) {
            currentNumber = rangeFrom;
        }
    }

    let valorTo = parseInt(rangeToElem.value);
    if (ParseIntCustom(valorTo)) {
        rangeTo = valorTo;
        if (currentNumber < rangeFrom || currentNumber > rangeTo) {
            currentNumber = rangeFrom;
        }
    }

    if (rangeFrom >= rangeTo) {
        currentNumber = 1;
        rangeFrom = 1;
        rangeTo = 999;
    }

})

toggleLetterOrNumber.addEventListener("click", () => {
    windowLetter = !windowLetter;

    LoadWindows()
    LoadButtons()

})

inputLetter.addEventListener("input", (e) => {
    const letterInput = e.target.value.charAt(0).toUpperCase()
    if (letterInput != "" && esLetra(letterInput)) {
        letter = letterInput
    }

    const numeroTextoVentanilla = document.querySelectorAll(".numeroTexto");
    numeroTextoVentanilla.forEach((elem) => {
        elem.innerText = letter + elem.innerText.substring(1, 4)
    })
})

inputNumberWindows.addEventListener("input", (e) => {
    let inputNumberWindowsValue = parseInt(e.target.value);
    if (ValidateNumberWindows(inputNumberWindowsValue)) {
        numberOfWindows = inputNumberWindowsValue;
        UpdateNumberWindows();
    }
})

nextNumberButton.forEach((button) => {
    button.addEventListener("click", (event) => {
        let targetId = event.target.id;
        let ventanillaAActualizar;

        if (windowLetter) {
            switch (targetId) {
                case "1": ventanillaAActualizar = "A"; break;
                case "2": ventanillaAActualizar = "B"; break;
                case "3": ventanillaAActualizar = "C"; break;
                case "4": ventanillaAActualizar = "D"; break;
                case "5": ventanillaAActualizar = "E"; break;
                case "6": ventanillaAActualizar = "F"; break;
                case "7": ventanillaAActualizar = "G"; break;
                case "8": ventanillaAActualizar = "H"; break;
                case "9": ventanillaAActualizar = "I"; break;
                case "10": ventanillaAActualizar = "J"; break;
                default: ventanillaAActualizar = "A";
            }
        } else {
            ventanillaAActualizar = targetId;
        }

        const numeroVentanilla = document.getElementById("v" + targetId);
        const estadoVentanilla = numeroVentanilla.parentNode;
        ventanillas.forEach((vent) => {
            vent.classList.remove("ventanillaActual")
        })
        estadoVentanilla.classList.add("ventanillaActual")
        estadoVentanilla.style.display = "flex"
        if (currentNumber.toString().length === 1) {
            numeroVentanilla.innerText = letter + "00" + currentNumber;
        } else if (currentNumber.toString().length === 2) {
            numeroVentanilla.innerText = letter + "0" + currentNumber;
        } else if (currentNumber.toString().length === 3) {
            numeroVentanilla.innerText = letter + currentNumber;
        }

        Speak("Ventanilla " + ventanillaAActualizar + " Número " + letter + currentNumber);

        Beep(2000)

        currentNumber++;

        if (currentNumber === rangeTo + 1) {
            currentNumber = rangeFrom;
        }
    });
});

/*----------*/

// Init

function UpdateNumberWindows() {
    let numberWindows = numberOfWindows;

    for (let i = 0; i < numberWindows; i++) {
        nextNumberButton[i].style.display = "block";     
    }

    for (let i = numberWindows; i < 10; i++) {
        ventanillas[i].style.display = "none";
        nextNumberButton[i].style.display = "none";
    }
}

UpdateNumberWindows()

function LoadWindows() {

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

function LoadButtons() {

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

LoadWindows();
LoadButtons();

/*----------*/

// Trash Code

// function UpdateServicesList() {
    // chooseSvc.innerHTML = "";
    // let servicesHTML = services.map((serv) => `<option value=${serv.letter}>${serv.letter}</option>`);
    // servicesHTML.forEach((svc) => chooseSvc.innerHTML += svc);

// }

// UpdateServicesList()

// function ServicesPlaceholder() {
    // if (services.length == 0) {
    //     tableExternalServicios.hidden = true;
    //     serviciosPlaceholder.hidden = false;
    // } else {
    //     tableExternalServicios.hidden = false;
    //     serviciosPlaceholder.hidden = true;
    // }
// }

// ServicesPlaceholder();

// const applySvc = document.getElementById("applyServices")
// const nameSvc = document.getElementById("service");
// const letterSvc = document.getElementById("letterService")
// const fromRangeSvc = document.getElementById("fromRangeService")
// const toRangeSvc = document.getElementById("toRangeService")
// const servicesList = document.getElementById("servicesList")
// const tablaServicios = document.getElementById("tablaServicios");
// const tableExternalServicios = document.getElementById("tableExternalServicios");
// const serviciosPlaceholder = document.getElementById("serviciosPlaceholder");
// const chooseSvc = document.getElementById("chooseSvc");
// const letterService = document.getElementById("letterService");

// const numeroV1 = document.getElementById("v1");
// const numeroV2 = document.getElementById("v2");
// const numeroV3 = document.getElementById("v3");
// const numeroV4 = document.getElementById("v4");
// const numeroV5 = document.getElementById("v5");

// rangeFromElem.addEventListener("input", () => {
    // let valor = parseInt(e.target.value)
    // if (Number.isInteger(valor)) {
    //     rangeFrom = valor;
    //     if (currentNumber < rangeFrom || currentNumber > rangeTo) {
    //         currentNumber = rangeFrom;
    //     }
    // }
// })

// rangeToElem.addEventListener("input", () => {
    // let valor = parseInt(e.target.value)
    // if (Number.isInteger(valor)) {
    //     rangeTo = valor;
    //     if (currentNumber < rangeFrom || currentNumber > rangeTo) {
    //         currentNumber = rangeFrom;
    //     }
    // }
// })

// applySvc.addEventListener("click", () => {
//     let name = nameSvc.value;
//     let letter = letterSvc.value.charAt(0).toUpperCase();
//     let from = parseInt(fromRangeSvc.value);
//     let to = parseInt(toRangeSvc.value);
//     // const letterInput = e.target.value.charAt(0).toUpperCase()
//     // if (letterInput != "" && esLetra(letterInput)) {
//     //     letter = letterInput
//     // }
//     if (ValidateNewService(name, letter, from, to)) {
//         let objectService = { name, letter, from, to, current: from }
//         services.push(objectService);

//         ServicesPlaceholder();

//         tablaServicios.innerHTML += `
//         <tr>
//             <td>${name}</td>
//             <td>${letter}</td>
//             <td>${from}</td>
//             <td>${to}</td>
//         </tr>
//     `

//     }

//     window.scrollTo(0, document.body.scrollHeight);

//     UpdateServicesList();

// })

// function ValidateNewService(name, letter, from, to) {
//     return name !== ""
//         && letter !== ""
//         && esLetra(letter)
//         && from < to
//         && from > 0
//         && to < 1000
//         && Number.isInteger(from)
//         && Number.isInteger(to);
// }

// const ventanillasContainer = document.querySelector(".ventanillas");

/*----------*/