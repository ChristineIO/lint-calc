function reduce(numerator, denominator) {
    var a = numerator;
    var b = denominator;
    var c;
    while (b) {
        c = a % b; a = b; b = c;
    }
    console.log([numerator / a, denominator / a]);
}

reduce(document.querySelector('#fracP1'), document.querySelector('#fracP2'));

export default reduce;