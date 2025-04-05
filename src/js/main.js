// State of application

let currentNumber = 1;
let numberOfWindows = 5;
let letter = "A";

/*----------*/

const ventanillasContainer = document.querySelector(".ventanillas");

document.addEventListener("DOMContentLoaded", () => {

})

const esLetra = (caracter) => {
    let ascii = caracter.toUpperCase().charCodeAt(0);
    return ascii > 64 && ascii < 91;
};

const ventanillas = document.querySelectorAll(".ventanilla");

const inputLetter = document.querySelector("#selectLetterInput")
const inputNumberWindows = document.querySelector("#numberWindowsInput")

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
    numberOfWindows = e.target.value;
})

// const numeroV1 = document.getElementById("v1");
// const numeroV2 = document.getElementById("v2");
// const numeroV3 = document.getElementById("v3");
// const numeroV4 = document.getElementById("v4");
// const numeroV5 = document.getElementById("v5");

const nextNumberButton = document.querySelectorAll(".nextNumberButton");
nextNumberButton.forEach((button) => {
    button.addEventListener("click", (event) => {
        let ventanillaAActualizar = event.target.id;
        const numeroVentanilla = document.getElementById("v" + ventanillaAActualizar);
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

        if (currentNumber === 1000) {
            currentNumber = 1;
        }
    });
});

function Speak(textToSpeech) {
    let text = textToSpeech
    const utterThis = new SpeechSynthesisUtterance(text)
    utterThis.lang = "es"

    window.speechSynthesis.speak(utterThis)
}

function Beep(frequency) {
    const context = new AudioContext(); //allows access to webaudioapi
    oscillator = context.createOscillator(); //creates oscillator
    oscillator.type = "sine"; //chooses the type of wave
    oscillator.frequency.value = frequency; //assigning the value of oscPitch to the oscillators frequency value
    oscillator.connect(context.destination); //sends to output
    oscillator.start(context.currentTime) //starts the sound at the current time
    oscillator.stop(context.currentTime + 1);
}

/*-----*/

