// Imports

import { esLetra } from "./utils.js";
import { Speak } from "./utils.js";
import { Beep } from "./utils.js";
import { Validation } from "./validations.js";
import { Weather } from "./weather.js";
import { Map } from "./map.js";
import { mapConfig } from "./mapConfig.js";

/*----------*/

// // State of application

// let numberOfWindows = 5;
// let letter = "A";

// // Windows are letters or numbers?
// let windowLetter = false;

// // Range of numbers
// let rangeFrom = 1;
// let rangeTo = 999;

// // Current number
// let currentNumber = rangeFrom;

// localStorage.setItem("state", "hola");

let state = [];

if (localStorage.getItem("state")) {
    state = JSON.parse(localStorage.getItem("state"));
} else {
    
    state = [
        {
            numberOfWindows: 5,
            letter: "A",
            windowLetter: false,
            rangeFrom: 1,
            rangeTo: 999,
            currentNumber: 1,
            businessName: "Giovanni's hospital",
            copyright: "Copyright - Giovanni Canavesi - All rights reserved - 2025"
        },
        {
            numberOfWindows: 5,
            letter: "A",
            windowLetter: false,
            rangeFrom: 1,
            rangeTo: 999,
            currentNumber: 1,
            businessName: "Victoria's hospital",
            copyright: "Copyright - Victoria Canavesi - All rights reserved - 2025"
        },
        {
            numberOfWindows: 5,
            letter: "A",
            windowLetter: false,
            rangeFrom: 1,
            rangeTo: 999,
            currentNumber: 1,
            businessName: "Victorio's hospital",
            copyright: "Copyright - Victorio Canavesi - All rights reserved - 2025"
        }
    ]
}

const h1 = document.querySelector("h1")
h1.textContent = state[0].businessName;

const cr = document.getElementById("cr");
cr.textContent = state[0].copyright;

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
const weatherElem = document.getElementById("weather");
const weatherElemSensacion = document.getElementById("sensacion");
const weatherElemMin = document.getElementById("min");
const weatherElemMax = document.getElementById("max");
{/* <p class="center" id="weather"></p>
    <p class="center" id="sensacion"></p>
    <p class="center" id="min"></p>
    <p class="center" id="max"></p> */}


/*----------*/

// Classes

let mapConfigParsed = JSON.parse(mapConfig);

const map = new Map(
    mapConfigParsed.map.latitud,
    mapConfigParsed.map.longitud,
    mapConfigParsed.map.zoom,
    mapConfigParsed.map.layer,
    mapConfigParsed.map.attribution,
    mapConfigParsed.map.locationPopup
);

map.chargeMap();

const weather = new Weather(weatherElem, weatherElemSensacion, weatherElemMin, weatherElemMax);

weather.populateWeather();

class InitDOM {
    constructor() {

    }

    // Show or hide windows depending on the numberOfWindows variable
    UpdateNumberWindows() {
        let numberWindows = state[0].numberOfWindows;
    
        for (let i = 0; i < numberWindows; i++) {
            nextNumberButton[i].style.display = "block";     
        }
    
        for (let i = numberWindows; i < 10; i++) {
            ventanillas[i].style.display = "none";
            nextNumberButton[i].style.display = "none";
        }
    }

    // Controlling if the windows are letters or numbers
    LoadWindows() {

        if (state[0].windowLetter) {
            ventanillaTexto[0].innerText = "Ventanilla A"
        } else {
            ventanillaTexto[0].innerText = "Ventanilla 1"
        }
    
        if (state[0].windowLetter) {
            ventanillaTexto[1].innerText = "Ventanilla B"
        } else {
            ventanillaTexto[1].innerText = "Ventanilla 2"
        }
    
        if (state[0].windowLetter) {
            ventanillaTexto[2].innerText = "Ventanilla C"
        } else {
            ventanillaTexto[2].innerText = "Ventanilla 3"
        }
    
        if (state[0].windowLetter) {
            ventanillaTexto[3].innerText = "Ventanilla D"
        } else {
            ventanillaTexto[3].innerText = "Ventanilla 4"
        }
    
        if (state[0].windowLetter) {
            ventanillaTexto[4].innerText = "Ventanilla E"
        } else {
            ventanillaTexto[4].innerText = "Ventanilla 5"
        }
    
        if (state[0].windowLetter) {
            ventanillaTexto[5].innerText = "Ventanilla F"
        } else {
            ventanillaTexto[5].innerText = "Ventanilla 6"
        }
    
        if (state[0].windowLetter) {
            ventanillaTexto[6].innerText = "Ventanilla G"
        } else {
            ventanillaTexto[6].innerText = "Ventanilla 7"
        }
    
        if (state[0].windowLetter) {
            ventanillaTexto[7].innerText = "Ventanilla H"
        } else {
            ventanillaTexto[7].innerText = "Ventanilla 8"
        }
    
        if (state[0].windowLetter) {
            ventanillaTexto[8].innerText = "Ventanilla I"
        } else {
            ventanillaTexto[8].innerText = "Ventanilla 9"
        }
    
        if (state[0].windowLetter) {
            ventanillaTexto[9].innerText = "Ventanilla J"
        } else {
            ventanillaTexto[9].innerText = "Ventanilla 10"
        }
    }

    // Controlling if the windows are letters or numbers
    LoadButtons() {

        if (state[0].windowLetter) {
            nextNumberButton[0].innerText = "Next Number Ventanilla A"
        } else {
            nextNumberButton[0].innerText = "Next Number Ventanilla 1"
        }
    
        if (state[0].windowLetter) {
            nextNumberButton[1].innerText = "Next Number Ventanilla B"
        } else {
            nextNumberButton[1].innerText = "Next Number Ventanilla 2"
        }
    
        if (state[0].windowLetter) {
            nextNumberButton[2].innerText = "Next Number Ventanilla C"
        } else {
            nextNumberButton[2].innerText = "Next Number Ventanilla 3"
        }
    
        if (state[0].windowLetter) {
            nextNumberButton[3].innerText = "Next Number Ventanilla D"
        } else {
            nextNumberButton[3].innerText = "Next Number Ventanilla 4"
        }
    
        if (state[0].windowLetter) {
            nextNumberButton[4].innerText = "Next Number Ventanilla E"
        } else {
            nextNumberButton[4].innerText = "Next Number Ventanilla 5"
        }
    
        if (state[0].windowLetter) {
            nextNumberButton[5].innerText = "Next Number Ventanilla F"
        } else {
            nextNumberButton[5].innerText = "Next Number Ventanilla 6"
        }
    
        if (state[0].windowLetter) {
            nextNumberButton[6].innerText = "Next Number Ventanilla G"
        } else {
            nextNumberButton[6].innerText = "Next Number Ventanilla 7"
        }
    
        if (state[0].windowLetter) {
            nextNumberButton[7].innerText = "Next Number Ventanilla H"
        } else {
            nextNumberButton[7].innerText = "Next Number Ventanilla 8"
        }
    
        if (state[0].windowLetter) {
            nextNumberButton[8].innerText = "Next Number Ventanilla I"
        } else {
            nextNumberButton[8].innerText = "Next Number Ventanilla 9"
        }
    
        if (state[0].windowLetter) {
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

const start = new InitDOM();

/*----------*/

// Events

class Event {
    constructor() {
        
    }

    registerbuttonApplyRange() {
        buttonApplyRange.addEventListener("click", () => {

            const validate = new Validation();
        
            // Update initial value of numbers
            let valorFrom = parseInt(rangeFromElem.value);
            if (validate.ParseIntCustom(valorFrom)) {
                state[0].rangeFrom = valorFrom;
                if (state[0].currentNumber < state[0].rangeFrom || state[0].currentNumber > state[0].rangeTo) {
                    state[0].currentNumber = state[0].rangeFrom;
                }
            }
        
            // Update final value of numbers, and return to the initial value again
            let valorTo = parseInt(rangeToElem.value);
            if (validate.ParseIntCustom(valorTo)) {
                state[0].rangeTo = valorTo;
                if (state[0].currentNumber < state[0].rangeFrom || state[0].currentNumber > state[0].rangeTo) {
                    state[0].currentNumber = state[0].rangeFrom;
                }
            }
        
            // Controlling errors
            if (state[0].rangeFrom >= state[0].rangeTo) {
                state[0].currentNumber = 1;
                state[0].rangeFrom = 1;
                state[0].rangeTo = 999;
            }

            
        
        })
    }

    registertoggleLetterOrNumber() {

        // Handling if the windows are numbers or letters
        toggleLetterOrNumber.addEventListener("click", () => {
            state[0].windowLetter = !state[0].windowLetter;
        
            start.init();

            let stateSave = [
                {
                    numberOfWindows: state[0].numberOfWindows,
                    letter: state[0].letter,
                    windowLetter: state[0].windowLetter,
                    rangeFrom: 1,
                    rangeTo: 999,
                    currentNumber: 1,
                    businessName: "Giovanni's hospital",
                    copyright: "Copyright - Giovanni Canavesi - All rights reserved - 2025"
                },
                {
                    numberOfWindows: 5,
                    letter: "A",
                    windowLetter: false,
                    rangeFrom: 1,
                    rangeTo: 999,
                    currentNumber: 1,
                    businessName: "Victoria's hospital",
                    copyright: "Copyright - Victoria Canavesi - All rights reserved - 2025"
                },
                {
                    numberOfWindows: 5,
                    letter: "A",
                    windowLetter: false,
                    rangeFrom: 1,
                    rangeTo: 999,
                    currentNumber: 1,
                    businessName: "Victorio's hospital",
                    copyright: "Copyright - Victorio Canavesi - All rights reserved - 2025"
                }
            ]

            localStorage.setItem("state", JSON.stringify(stateSave))
        
        })
    }

    registerinputLetter() {
        inputLetter.addEventListener("input", (e) => {
            const letterInput = e.target.value.charAt(0).toUpperCase()
            if (letterInput != "" && esLetra(letterInput)) {
                state[0].letter = letterInput
            }
        
            const numeroTextoVentanilla = document.querySelectorAll(".numeroTexto");

            // Updating the letter before the numbers of the windows (type of service)
            numeroTextoVentanilla.forEach((elem) => {
                elem.innerText = state[0].letter + elem.innerText.substring(1, 4)
            })

            let stateSave = [
                {
                    numberOfWindows: state[0].numberOfWindows,
                    letter: state[0].letter,
                    windowLetter: state[0].windowLetter,
                    rangeFrom: 1,
                    rangeTo: 999,
                    currentNumber: 1,
                    businessName: "Giovanni's hospital",
                    copyright: "Copyright - Giovanni Canavesi - All rights reserved - 2025"
                },
                {
                    numberOfWindows: 5,
                    letter: "A",
                    windowLetter: false,
                    rangeFrom: 1,
                    rangeTo: 999,
                    currentNumber: 1,
                    businessName: "Victoria's hospital",
                    copyright: "Copyright - Victoria Canavesi - All rights reserved - 2025"
                },
                {
                    numberOfWindows: 5,
                    letter: "A",
                    windowLetter: false,
                    rangeFrom: 1,
                    rangeTo: 999,
                    currentNumber: 1,
                    businessName: "Victorio's hospital",
                    copyright: "Copyright - Victorio Canavesi - All rights reserved - 2025"
                }
            ]

            localStorage.setItem("state", JSON.stringify(stateSave))
        })
    }

    registerinputNumberWindows() {

        // Handling number of windows
        inputNumberWindows.addEventListener("input", (e) => {
            const validate = new Validation();
            let inputNumberWindowsValue = parseInt(e.target.value);
            if (validate.ValidateNumberWindows(inputNumberWindowsValue)) {
                state[0].numberOfWindows = inputNumberWindowsValue;
                start.init();
            }

            let stateSave = [
                {
                    numberOfWindows: state[0].numberOfWindows,
                    letter: state[0].letter,
                    windowLetter: state[0].windowLetter,
                    rangeFrom: 1,
                    rangeTo: 999,
                    currentNumber: 1,
                    businessName: "Giovanni's hospital",
                    copyright: "Copyright - Giovanni Canavesi - All rights reserved - 2025"
                },
                {
                    numberOfWindows: 5,
                    letter: "A",
                    windowLetter: false,
                    rangeFrom: 1,
                    rangeTo: 999,
                    currentNumber: 1,
                    businessName: "Victoria's hospital",
                    copyright: "Copyright - Victoria Canavesi - All rights reserved - 2025"
                },
                {
                    numberOfWindows: 5,
                    letter: "A",
                    windowLetter: false,
                    rangeFrom: 1,
                    rangeTo: 999,
                    currentNumber: 1,
                    businessName: "Victorio's hospital",
                    copyright: "Copyright - Victorio Canavesi - All rights reserved - 2025"
                }
            ]

            localStorage.setItem("state", JSON.stringify(stateSave))
        })
    }

    registernextNumberButton() {
        nextNumberButton.forEach((button) => {
            button.addEventListener("click", (event) => {
                // Obtain id
                let targetId = event.target.id;
                let ventanillaAActualizar;
        
                // Obtain window to update
                if (state[0].windowLetter) {
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
        
                // Obtain window
                const numeroVentanilla = document.getElementById("v" + targetId);
                const estadoVentanilla = numeroVentanilla.parentNode;

                // Handling styles
                ventanillas.forEach((vent) => {
                    vent.classList.remove("ventanillaActual")
                })
                estadoVentanilla.classList.add("ventanillaActual")
                estadoVentanilla.style.display = "flex"

                // Handling zeros before the number
                if (state[0].currentNumber.toString().length === 1) {
                    numeroVentanilla.innerText = state[0].letter + "00" + state[0].currentNumber;
                } else if (state[0].currentNumber.toString().length === 2) {
                    numeroVentanilla.innerText = state[0].letter + "0" + state[0].currentNumber;
                } else if (state[0].currentNumber.toString().length === 3) {
                    numeroVentanilla.innerText = state[0].letter + state[0].currentNumber;
                }
        
                // Speak with Speech API
                Speak("Ventanilla " + ventanillaAActualizar + " Número " + state[0].letter + state[0].currentNumber);
        
                // Create an oscillator with Audio API
                Beep(2000)
        
                state[0].currentNumber++;
        
                // Return to initial value
                if (state[0].currentNumber === state[0].rangeTo + 1) {
                    state[0].currentNumber = state[0].rangeFrom;
                }
            });
        });
    }

    init() {
        this.registerbuttonApplyRange();
        this.registerinputLetter();
        this.registerinputNumberWindows();
        this.registernextNumberButton();
        this.registertoggleLetterOrNumber();
    }
}

const eventRegister = new Event();
eventRegister.init();

/*----------*/

// Init

start.init();

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

// let services = [];

/*----------*/