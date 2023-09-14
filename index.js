let count = 0;
let countEl = document.getElementById("count-el");


function decrease() {
    count -= 1;
    countEl.innerText = count;
}

function save() {
    let total = document.getElementById("total");
    total.innerText = count;
    saveEl.textContent += count + " - ";
}


let userName = "Alexander";
let notification = "You have three new messages";


let messageToUser = notification + ", " + userName + "!";

console.log(messageToUser);

let name = "Alexander";
let greeting = "Hi, my name is " + name;

let myGreeting = greeting;

console.log(myGreeting);


let welcomeEl = document.getElementById("welcome-el");

welcomeEl.innerText = myGreeting;

welcomeEl.innerText += ' 👋';

function increment() {
    count += 1;
    countEl.innerText = count;
}

function reset() {
    count = 0;
    countEl.innerText = count;
}

let saveEl = document.getElementById("save-el");


let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function add() {
    let result = num1 + num2;
    sumEl.textContent = "Sum: " + result;
}

function subtract() {
    let result = num1 - num2;
    sumEl.textContent = "Sum: " + result;
}

function multiply() {
    let result = num1 * num2;
    sumEl.textContent = "Sum: " + result;
}

function divide() {
    let result = num1 / num2;
    sumEl.textContent = "Sum: " + result;
}
