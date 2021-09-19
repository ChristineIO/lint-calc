let oneBtn = document.getElementById('calc-one');
let twoBtn = document.getElementById('calc-two');
let threeBtn = document.getElementById('calc-three');
let fourBtn = document.getElementById('calc-four');
let fiveBtn = document.getElementById('calc-five');
let sixBtn = document.getElementById('calc-six');
let sevenBtn = document.getElementById('calc-seven');
let eightBtn = document.getElementById('calc-eight');
let nineBtn = document.getElementById('calc-nine');
let zeroBtn = document.getElementById('calc-zero');

let decimalBtn = document.getElementById('calc-decimal');
let clearBtn = document.getElementById('calc-clear');
let backspaceBtn = document.getElementById('calc-backspace');
let displayVal = document.getElementById('calc-display-val');

let plusBtn = document.getElementById('calc-plus');
let minusBtn = document.getElementById('calc-minus');
let multiplyBtn = document.getElementById('calc-multiply')
let divideBtn = document.getElementById('calc-divide');
let equalBtn = document.getElementById('calc-equals');
let calcBtn = document.getElementsByClassName('calc-btn');

document.querySelector('div').addEventListener('click', calcValue);

backspaceBtn.addEventListener('click', function backspace() {
    let word = displayVal.innerText;
    var lastChar = word.slice(0, -1);
    word = lastChar;
    displayVal.innerText = word;
});

let firstVal;
let lastVal;
let addedVal;
let minusVal;
let multiplyVal;
let divideVal;

function calcValue(event) {
    let getUserNum = event.target.textContent;
    let displayValText = displayVal.textContent;
    if (getUserNum.includes('=')) {
        getUserNum = getUserNum.replace('=', '');
    }
    if (getUserNum.includes('←')) {
        getUserNum = getUserNum.replace('←', "");
    }

    displayVal.innerHTML += getUserNum;

    if (displayVal.innerText.includes("0")) {
        displayVal.innerText = displayVal.innerText.replace("0", "");
    }

    if (displayValText == "NaN" || displayValText.includes("NaN")) {
        displayVal.innerText = "";
    }

    if (getUserNum === "C") {
        displayVal.innerText = "0";
    } else if (displayVal.innerText.includes('+')) {
        firstVal = parseFloat(displayValText.substring(0, displayValText.indexOf('+')));
        lastVal = parseFloat(displayVal.innerText.split('+').pop());
        addedVal = firstVal + lastVal;
        equalBtn.addEventListener('click', function () {
            displayVal.innerText = addedVal;
        });
    } else if (displayVal.innerText.includes('-')) {
        firstVal = parseFloat(displayValText.substring(0, displayValText.indexOf('-')));
        lastVal = parseFloat(displayVal.innerText.split('-').pop());
        minusVal = firstVal - lastVal;
        equalBtn.addEventListener('click', function () {
            displayVal.innerText = minusVal;
        });
    } else if (displayVal.innerText.includes('x')) {
        firstVal = parseFloat(displayValText.substring(0, displayValText.indexOf('x')));
        lastVal = parseFloat(displayVal.innerText.split('x').pop());
        multiplyVal = firstVal * lastVal;
        equalBtn.addEventListener('click', function () {
            displayVal.innerText = multiplyVal;
        });
    } else if (displayVal.innerText.includes('÷')) {
        firstVal = parseFloat(displayValText.substring(0, displayValText.indexOf('÷')));
        lastVal = parseFloat(displayVal.innerText.split('÷').pop());
        divideVal = firstVal / lastVal;
        equalBtn.addEventListener('click', function () {
            displayVal.innerText = divideVal;
        });
    } else if (displayVal.innerText.length >= 6) {
        displayVal.innerText = "0";
    }
}

document.addEventListener('keypress', function (event) {
    let pressedKey = event.key;
    console.log(pressedKey);
    if (pressedKey === '+' || '-' || 'x' || '/') {
        displayVal.innerHTML += pressedKey;
    } if (displayVal.innerText.includes('Enter')) {
        displayVal.innerText = displayVal.innerText.replace("Enter", "");
        if (displayVal.innerText.includes('+') && event.key === "Enter") {
            firstVal = parseFloat(displayVal.innerText.substring(0, displayVal.innerText.indexOf('+')));
            lastVal = parseFloat(displayVal.innerText.split('+').pop());
            addedVal = firstVal + lastVal;
            displayVal.innerText = addedVal;
        } else if (displayVal.innerText.includes('-') && event.key === "Enter") {
            firstVal = parseFloat(displayVal.innerText.substring(0, displayVal.innerText.indexOf('-')));
            lastVal = parseFloat(displayVal.innerText.split('-').pop());
            minusVal = firstVal - lastVal;
            displayVal.innerText = minusVal;
        } else if (displayVal.innerText.includes('x') && event.key === "Enter") {
            firstVal = parseFloat(displayVal.innerText.substring(0, displayVal.innerText.indexOf('x')));
            lastVal = parseFloat(displayVal.innerText.split('x').pop());
            multiplyVal = firstVal * lastVal;
            displayVal.innerText = multiplyVal;
        } else if (displayVal.innerText.includes('/') && event.key === "Enter") {
            if (displayVal.innerText.includes('/') && pressedKey === "/") {
                displayVal.innerText = displayVal.innerText.replace("/", "÷");
            }
            firstVal = parseFloat(displayVal.innerText.substring(0, displayVal.innerText.indexOf('/')));
            lastVal = parseFloat(displayVal.innerText.split('/').pop());
            divideVal = firstVal / lastVal;
            displayVal.innerText = divideVal;
        }
    }
});

function clicked() {
    document.querySelectorAll('.calc-btn').forEach(item => {
        item.addEventListener('click', event => {
            var clickedMent = event.target;
            clickedMent.classList.add('pressed');
            setTimeout(() => {
                clickedMent.classList.remove('pressed');
            }, 125);
        })
    })
}
clicked();