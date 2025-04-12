// State of application

export let numberOfWindows = 5;
export let letter = "A";
export let windowLetter = false;
export let rangeFrom = 1;
export let rangeTo = 999;
export let currentNumber = rangeFrom;

/*----------*/

// DOM References

export const ventanillas = document.querySelectorAll(".ventanilla");
export const nextNumberButton = document.querySelectorAll(".nextNumberButton");
export const ventanillaTexto = document.querySelectorAll(".ventanillaTexto");
export const inputLetter = document.querySelector("#selectLetterInput")
export const inputNumberWindows = document.querySelector("#numberWindowsInput")
export const toggleLetterOrNumber = document.getElementById("toggleLetterOrNumber");
export const rangeFromElem = document.getElementById("rangeInputFrom")
export const rangeToElem = document.getElementById("rangeInputTo")
export const buttonApplyRange = document.getElementById("applyrange");

/*----------*/