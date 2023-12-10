let result = document.getElementById('result');
let calcHistory = document.getElementById('calc-history');
let clearHistoryButton = document.getElementById('clear-history');
let calcul;

function appendChar(char) {
    result.value += char;
}

function deleteChar() {
    result.value = result.value.slice(0, -1);
}

function clearResult() {
    result.value = '';
}

function calculate() {
    try {
        const calculatedResult = eval(result.value);
        calcul = result.value;
        result.value = calculatedResult === undefined || isNaN(calculatedResult) ? 'Error' : calculatedResult;
        addToHistory(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function addToHistory(calculation) {
    let li = document.createElement('li');
    li.textContent = calcul + ' = ' + calculation;
    calcHistory.appendChild(li);
}

function clearHistory() {
    calcHistory.innerHTML = '';
}
