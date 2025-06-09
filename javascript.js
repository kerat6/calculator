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
        throw new Error("Cannot divide by zero");
    }
    else {
        return a / b;
    }
}

//create three variables
let num1 = 0;
let num2 = 0;
let operator = "";

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
    const display = document.getElementById("display");
    display.value += value;
}