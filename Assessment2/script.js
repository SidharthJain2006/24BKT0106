const currentOperand = document.getElementById('currentOperand');
const previousOperand = document.getElementById('previousOperand');
const buttons = document.querySelectorAll('button');

let current = '';
let previous = '';
let operator = null;

function updateDisplay() {
    currentOperand.textContent = current || '0';
    previousOperand.textContent = previous ? `${previous} ${operator || ''}` : '';
}

function clear() {
    current = '';
    previous = '';
    operator = null;
}

function deleteLast() {
    current = current.toString().slice(0, -1);
}

function appendNumber(number) {
    if(number === '.' && current.includes('.')) return;
    current += number;
}

function chooseOperator(op) {
    if(current === '') return;
    if(previous !== '') compute();
    operator = op;
    previous = current;
    current = '';
}

function compute() {
    let result;
    const prev = parseFloat(previous);
    const curr = parseFloat(current);
    if(isNaN(prev) || isNaN(curr)) return;
    switch(operator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': result = prev / curr; break;
        default: return;
    }
    current = result.toString();
    operator = null;
    previous = '';
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim();
        if(button.id === 'clear') {
            clear();
        } else if(button.id === 'delete') {
            deleteLast();
        } else if(button.id === 'equals') {
            compute();
        } else if(button.classList.contains('operator')) {
            chooseOperator(value);
        } else {
            appendNumber(value);
        }
        updateDisplay();
    });
});

updateDisplay();
