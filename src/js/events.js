// import { InitDOM } from "./init.js";
// import { Validation } from "./validations.js";

// const start = new InitDOM();

// export class Event {
//     constructor(buttonApplyRange, 
//         rangeFromElem, 
//         rangeFrom, 
//         currentNumber, 
//         rangeTo, 
//         rangeToElem, 
//         toggleLetterOrNumber,
//         windowLetter,
//     ) {
//         this.buttonApplyRange = buttonApplyRange;
//         this.rangeFromElem = rangeFromElem;
//         this.rangeFrom = rangeFrom; 
//         this.currentNumber = currentNumber;
//         this.rangeTo = rangeTo;
//         this.rangeToElem = rangeToElem;
//         this.toggleLetterOrNumber = toggleLetterOrNumber;
//         this.windowLetter = windowLetter;
//     }

//     registerbuttonApplyRange() {
//         this.buttonApplyRange.addEventListener("click", () => {

//             const validate = new Validation();
        
//             let valorFrom = parseInt(this.rangeFromElem.value);
//             if (validate.ParseIntCustom(valorFrom)) {
//                 this.rangeFrom = valorFrom;
//                 if (this.currentNumber < this.rangeFrom || this.currentNumber > this.rangeTo) {
//                     this.currentNumber = this.rangeFrom;
//                 }
//             }
        
//             let valorTo = parseInt(this.rangeToElem.value);
//             if (validate.ParseIntCustom(valorTo)) {
//                 this.rangeTo = valorTo;
//                 if (this.currentNumber < this.rangeFrom || this.currentNumber > this.rangeTo) {
//                     this.currentNumber = this.rangeFrom;
//                 }
//             }
        
//             if (this.rangeFrom >= this.rangeTo) {
//                 this.currentNumber = 1;
//                 this.rangeFrom = 1;
//                 this.rangeTo = 999;
//             }
        
//         })
//     }

//     registertoggleLetterOrNumber() {
//         this.toggleLetterOrNumber.addEventListener("click", () => {
//             this.windowLetter = !this.windowLetter;
        
//             start.init();
        
//         })
//     }

//     registerinputLetter() {
//         inputLetter.addEventListener("input", (e) => {
//             const letterInput = e.target.value.charAt(0).toUpperCase()
//             if (letterInput != "" && esLetra(letterInput)) {
//                 letter = letterInput
//             }
        
//             const numeroTextoVentanilla = document.querySelectorAll(".numeroTexto");
//             numeroTextoVentanilla.forEach((elem) => {
//                 elem.innerText = letter + elem.innerText.substring(1, 4)
//             })
//         })
//     }

//     registerinputNumberWindows() {
//         inputNumberWindows.addEventListener("input", (e) => {
//             const validate = new Validation();
//             let inputNumberWindowsValue = parseInt(e.target.value);
//             if (validate.ValidateNumberWindows(inputNumberWindowsValue)) {
//                 numberOfWindows = inputNumberWindowsValue;
//                 start.init();
//             }
//         })
//     }

//     registernextNumberButton() {
//         nextNumberButton.forEach((button) => {
//             button.addEventListener("click", (event) => {
//                 let targetId = event.target.id;
//                 let ventanillaAActualizar;
        
//                 if (windowLetter) {
//                     switch (targetId) {
//                         case "1": ventanillaAActualizar = "A"; break;
//                         case "2": ventanillaAActualizar = "B"; break;
//                         case "3": ventanillaAActualizar = "C"; break;
//                         case "4": ventanillaAActualizar = "D"; break;
//                         case "5": ventanillaAActualizar = "E"; break;
//                         case "6": ventanillaAActualizar = "F"; break;
//                         case "7": ventanillaAActualizar = "G"; break;
//                         case "8": ventanillaAActualizar = "H"; break;
//                         case "9": ventanillaAActualizar = "I"; break;
//                         case "10": ventanillaAActualizar = "J"; break;
//                         default: ventanillaAActualizar = "A";
//                     }
//                 } else {
//                     ventanillaAActualizar = targetId;
//                 }
        
//                 const numeroVentanilla = document.getElementById("v" + targetId);
//                 const estadoVentanilla = numeroVentanilla.parentNode;
//                 ventanillas.forEach((vent) => {
//                     vent.classList.remove("ventanillaActual")
//                 })
//                 estadoVentanilla.classList.add("ventanillaActual")
//                 estadoVentanilla.style.display = "flex"
//                 if (currentNumber.toString().length === 1) {
//                     numeroVentanilla.innerText = letter + "00" + currentNumber;
//                 } else if (currentNumber.toString().length === 2) {
//                     numeroVentanilla.innerText = letter + "0" + currentNumber;
//                 } else if (currentNumber.toString().length === 3) {
//                     numeroVentanilla.innerText = letter + currentNumber;
//                 }
        
//                 Speak("Ventanilla " + ventanillaAActualizar + " Número " + letter + currentNumber);
        
//                 Beep(2000)
        
//                 currentNumber++;
        
//                 if (currentNumber === rangeTo + 1) {
//                     currentNumber = rangeFrom;
//                 }
//             });
//         });
//     }

//     init() {
//         this.registerbuttonApplyRange();
//         this.registerinputLetter();
//         this.registerinputNumberWindows();
//         this.registernextNumberButton();
//         this.registertoggleLetterOrNumber();
//     }
// }