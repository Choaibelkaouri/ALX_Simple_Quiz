// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

// Helper to get input values as numbers
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Helper to display result
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Event listeners for buttons

document.getElementById('add').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    const result = add(number1, number2);
    displayResult(result);
});

document.getElementById('subtract').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    const result = subtract(number1, number2);
    displayResult(result);
});

document.getElementById('multiply').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    const result = multiply(number1, number2);
    displayResult(result);
});

document.getElementById('divide').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    
    // Optional: handle division by zero in a friendly way
    if (number2 === 0) {
        displayResult('Error');
        return;
    }

    const result = divide(number1, number2);
    displayResult(result);
});
