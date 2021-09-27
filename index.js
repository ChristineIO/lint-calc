/* Calculator app with HTML, CSS and JavaScript */

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

displayVal.innerHTML = "0";

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
let leftPart;
let rightPart;

function calcValue(event) {
    let getUserNum = event.target.textContent;
    let displayValText = displayVal.textContent;

    if (getUserNum.includes('=')) {
        getUserNum = getUserNum.replace('=', '');
    } else if (getUserNum.includes('←')) {
        getUserNum = getUserNum.replace('←', "");
    } else if (displayVal.innerText.slice(0, 1).includes("0")) {
        displayVal.innerText = displayVal.innerText.slice(0, 1).replace(displayVal.innerText.slice(0, 1), "");
    }

    displayVal.innerHTML += getUserNum;

    if (displayValText == "NaN" || displayValText.includes("NaN")) {
        displayVal.innerText = "0";
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
    } else if (displayVal.innerText.includes('×')) {
        firstVal = parseFloat(displayValText.substring(0, displayValText.indexOf('×')));
        lastVal = parseFloat(displayVal.innerText.split('×').pop());
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
    }
//     else if (displayVal.innerText.includes('.')) {
//         equalBtn.addEventListener('click', makeFrac);
//         function makeFrac() {
//             function gcd(x, y) {
//                 if (y === 0) return x;
//                 return gcd(y, x % y);
//             }
// 
//             var fraction = displayVal.innerText;
//             var len = fraction.toString().length - 2;
// 
//             var denominator = Math.pow(10, len);
//             var numerator = fraction * denominator;
// 
//             var divisor = gcd(numerator, denominator);
// 
//             numerator /= divisor;
//             denominator /= divisor;
// 
//             var createSpan = document.createElement('span');
//             document.querySelector('#calc-display-val').appendChild(createSpan).classList.add('frac');
//             var fracPOne = document.createElement('sm');
//             document.querySelector('.frac').appendChild(fracPOne).id = "fracP1";
//             var fracPTwo = document.createElement('sm');
//             document.querySelector('.frac').appendChild(fracPTwo).id = "fracP2";
// 
//             document.getElementById("fracP1").innerHTML = Math.floor(numerator);
//             document.getElementById("fracP2").innerHTML = Math.floor(denominator);
//         }
//         makeFrac();
//     }
}

document.addEventListener('keypress', function (event) {
    let pressedKey = event.key;
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

// equalBtn.addEventListener('click', function () {
//     if (document.getElementById('fracP1').innerText)) {
//         let numUp = document.getElementById('fracP1').innerHTML;
//         let numDown = document.getElementById('fracP2').innerText;
// 
//         console.log(numUp);
//         console.log(numDown);
// 
//         if (numDown < numUp) {
//             console.log('Happy coding!');
//         }
// 
//         alert('I am safe');
// 
//         console.log(numDown < numUp);
//     }
// });

// function impToMixed() {
//     var a = 26;
//     var b = 7;
//     var compute = Math.floor(26 / 7);
//     var computeFrac = a % b;
// 
//     document.querySelector(".keep").innerHTML = compute;
//     document.querySelector(".up").innerHTML = computeFrac;
//     document.querySelector(".down").innerHTML = b;
// }
// 
// impToMixed();

// function reduce(numerator, denominator) {
//     var a = numerator;
//     var b = denominator;
//     var c;
// 
//     if (b) {
//         c = a % b; a = b; b = c;
//     }
// 
//     console.log([numerator / a, denominator / a]);
// }
// 
// reduce(document.querySelector('#fracP1').innerHTML, document.querySelector('#fracP2').innerHTML);