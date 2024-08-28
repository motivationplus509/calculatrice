function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    let display = document.getElementById('display');

    if (value === 'Math.sqrt(' || value === 'Math.log(' || value === 'Math.sin(' || value === 'Math.cos(' || value === 'Math.tan(') {
        display.value += value + '(';
    } else {
        display.value += value;
    }
}

function calculate() {
    let display = document.getElementById('display');
    
    try {
        // Evalye ak verifye ekpresyon matematik la
        display.value = eval(display.value);
    } catch (e) {
        display.value = "ere";
    }
}

function appendToDisplay(value) {
    let display = document.getElementById('display');

    if (['Math.sqrt', 'Math.log', 'Math.sin', 'Math.cos', 'Math.tan'].includes(value)) {
        display.value += value + '(';
    } else {
        display.value += value;
    }
}