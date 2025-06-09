
//create three variables for operations
let num1 = 0;
let num2 = 0;
let operator = "";
//create a variable to store the display value
let displayValue = "";
let justCalculated = false;
// Functions to perform basic arithmetic operations
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("You can't divide by zero!");
    }
    else {
        return a / b;
    }
}



// Function to perform the calculation based on the operator
function operate() {
    if (operator === "+") {
        return add(num1, num2);
    }
    else if (operator === "-") {
        return subtract(num1, num2);
    }
    else if (operator === "*") {
        return multiply(num1, num2);
    }
    else if (operator === "/") {
        return divide(num1, num2);
    }
    else {
        throw new Error("Invalid operator");
    }
}

// Function to populate the display with the selected value
function appendToDisplay(value) {
    let display = document.getElementById("display");
    if (justCalculated) {
        // If the user just calculated, reset the display
        display.value = "";
        justCalculated = false; // Reset the flag
    }
    // Prevent multiple decimal points
    if (value === "." && display.value.includes(".")) {
        return;
    }
    display.value += value;
}

// Function to clear the display and reset variables
function clearDisplay() {
    let display = document.getElementById("display");
    let displayTwo = document.getElementById("displayTwo");
    display.value = "";
    displayTwo.value = "";
    num1 = 0;
    num2 = 0;
    operator = "";
}

// Function to handle the operator button click
function operatorClick(op) {
    let display = document.getElementById("display");
    let displayTwo = document.getElementById("displayTwo");

    if (display.value === "") {
        return; // Prevents setting an operator with no number
    }
    operator = op;
    displayTwo.value = display.value + " " + operator;
    num1 = parseFloat(display.value);
    display.value = "";
}

// Function to handle the equals button click
function calculateResult() {
    const display = document.getElementById("display");
    const displayTwo = document.getElementById("displayTwo");

    if (operator === "") {
        return; // Prevents calculating without an operator
    }

    if (num1 === 0) {
        return; // Prevents calculating with no numbers
    }

    if (display.value === "") {
        return;
    } // Prevents trying to calculate with nothing

    if (justCalculated) {
        // If the user just calculated, reset the display
        display.value = "";
        displayTwo.value = "";
        justCalculated = false;
    }

    num2 = parseFloat(display.value);

    try {
        let result = parseFloat(operate().toFixed(5)); // Perform the operation and format the result to 2 decimal places and prevent unnecessary trailing zeros
        display.value = result;
        displayTwo.value = `${num1} ${operator} ${num2} =`;
        num1 = result; // Update num1 to the result for further calculations
        num2 = 0; // Reset num2 for the next operation
        operator = ""; // Reset operator for the next operation
        justCalculated = true; // Set flag to indicate a calculation was just performed
    } catch (error) {
        display.value = "Error";
        displayTwo.value = "";
    }

}