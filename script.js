const generator = document.getElementById("generator");
const result = document.getElementById("result");
const numbers = document.getElementById("numbers");

// set range
let max = 50;
let min = 10;

// function to generate random number
function getRandomInt() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// run when button clicked
generator.onclick = function () {

    // generate random number
    let randomNumber = getRandomInt();

    // take user input
    let number = prompt("Please enter your number");

    // convert to number
    number = Number(number);

    // compare numbers
    if (number === randomNumber) {
        result.textContent = "🎉 You won!";
    } else {
        result.textContent = "❌ You lose!";
    }

    // display numbers
    numbers.textContent =
        "Random number: " + randomNumber +
        "  Your number: " + number;
    // show numbers on console window
    console.log("Random number:", randomNumber);
    console.log("Your number:", number);
};