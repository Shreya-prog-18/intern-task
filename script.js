const screen = document.getElementById('screen');
const keys = document.querySelectorAll('.key');

let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyId = key.id;

        if (keyId >= '0' && keyId <= '9' || keyId === 'decimal') {
            currentInput += keyId === 'decimal' ? '.' : keyId;
            screen.textContent = currentInput;
        } else if (keyId === 'clear') {
            currentInput = '';
            operator = '';
            firstOperand = '';
            secondOperand = '';
            screen.textContent = '';
        } else if (keyId === 'delete') {
            currentInput = currentInput.slice(0, -1);
            screen.textContent = currentInput;
        } else if (keyId === 'equals') {
            secondOperand = currentInput;
            let result;
            if (operator && firstOperand !== '' && secondOperand !== '') {
                switch (operator) {
                    case 'add':
                        result = parseFloat(firstOperand) + parseFloat(secondOperand);
                        break;
                    case 'subtract':
                        result = parseFloat(firstOperand) - parseFloat(secondOperand);
                        break;
                    case 'multiply':
                        result = parseFloat(firstOperand) * parseFloat(secondOperand);
                        break;
                    case 'divide':
                        result = parseFloat(firstOperand) / parseFloat(secondOperand);
                        break;
                }
                screen.textContent = result;
                currentInput = result.toString();
                operator = '';
                firstOperand = '';
                secondOperand = '';
            }
        } else {
            operator = keyId;
            firstOperand = currentInput;
            currentInput = '';
        }
    });
});
