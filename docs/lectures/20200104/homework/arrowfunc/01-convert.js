// Alakítsuk arrow functionökké a függvényeket!
// Ahol lehet, hagyjunk el amit csak lehet a szintaxisból!

// let double = function double(x) {
//     return 2 * x
// }
let double = x => 2*x;
console.log(`Első feladat: ${double(2)}`);

// function invert(x) {
//     return -x
// }
let invert = x => -x;
console.log(`Második feladat: ${invert(2)}`);

// let hello = function() {
//     return 'hello'
// }
let hello = () => 'hello';
console.log(`Harmadik feladat: ${hello()}`);


// Alakítsuk function expressionökké az arrow functionöket!

// let helloPrefixer = s => 'hello ' + s
let helloPrefixer = function(s) {
    return 'hello'+s;
}
console.log(`Negyedik feladat: ${helloPrefixer(' Mami')}`);

// let doNothing = () => {}
let doNothing = function () {};
console.log(`Ötödik feladat: ${doNothing()}`);

// Alakítsuk function declaractionné

// let advice = raining => raining? 'Take your umbrella' : 'Take you sunglasses'

function advice(raining) {
    return raining ? 'Take your umbrella' : 'Take your sunglasses'
}
console.log(`Hatodik feladat: ${advice('Rain')}`);

// let isEmpty = arr => !arr.length
function isEmpty(arr) {
    return !arr.length;
}
console.log(`Hetedik feladat: ${isEmpty([])}`);

// let tricky = want => want = false
function tricky(want) {
    want = false;
    return want;
}
console.log(`Nyolcadik feladat: ${tricky(1)}`);