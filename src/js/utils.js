// Utils

export const esLetra = (caracter) => {
    let ascii = caracter.toUpperCase().charCodeAt(0);
    return ascii > 64 && ascii < 91;
};

export function Speak(textToSpeech) {
    let text = textToSpeech
    const utterThis = new SpeechSynthesisUtterance(text)
    utterThis.lang = "es"

    window.speechSynthesis.speak(utterThis)
}

export function Beep(frequency) {
    const context = new AudioContext(); //allows access to webaudioapi
    let oscillator = context.createOscillator(); //creates oscillator
    oscillator.type = "square"; //chooses the type of wave
    oscillator.frequency.value = frequency; //assigning the value of oscPitch to the oscillators frequency value
    oscillator.connect(context.destination); //sends to output
    oscillator.start(context.currentTime) //starts the sound at the current time
    oscillator.stop(context.currentTime + 1);
}

/*----------*/