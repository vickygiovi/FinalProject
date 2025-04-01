let currentNumber = 1;
let letter = "A";

const esLetra = (caracter) => {
	let ascii = caracter.toUpperCase().charCodeAt(0);
	return ascii > 64 && ascii < 91;
};

const inputLetter = document.querySelector("#selectLetterInput")
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

const numeroV1 = document.getElementById("v1");
// const numeroV2 = document.getElementById("v2");
// const numeroV3 = document.getElementById("v3");
// const numeroV4 = document.getElementById("v4");
// const numeroV5 = document.getElementById("v5");

const nextNumberButton = document.querySelectorAll(".nextNumberButton");
nextNumberButton.forEach((button) => {
    button.addEventListener("click", (event) => {
        let ventanillaAActualizar = event.target.id;
        const numeroVentanilla = document.getElementById("v" + ventanillaAActualizar);
        if (currentNumber.toString().length === 1) {
            numeroVentanilla.innerText = letter + "00" + currentNumber;
        } else if (currentNumber.toString().length === 2) {
            numeroVentanilla.innerText = letter + "0" + currentNumber;
        } else if (currentNumber.toString().length === 3) {
            numeroVentanilla.innerText = letter + currentNumber;
        }

        const synth = window.speechSynthesis
        SpeakNumberAndWindow(synth, "Ventanilla " + ventanillaAActualizar + " Número " + numeroVentanilla.innerText);

        currentNumber++;
    });
});

function SpeakNumberAndWindow(synth, textToSpeech) {
    let text = textToSpeech
    const utterThis = new SpeechSynthesisUtterance(text)
    utterThis.lang = "es"

    synth.speak(utterThis)
}