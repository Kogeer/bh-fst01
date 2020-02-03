// Alakítsuk arrow functionökké a függvényeket!
// Ahol lehet, hagyjunk el amit csak lehet a szintaxisból!

<<<<<<< HEAD
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
=======
let double = function double(x) {
    return 2 * x
}
// Megoldás:
    let double = x => x * 2;

function invert(x) {
    return -x
}
// Megoldás:
    let invert = x => -x;

let hello = function() {
    return 'hello'
}
// Megoldás:
    let hello = () => 'hello';
>>>>>>> ff7383a43c9f7ed67cc462f72e100917ca4510ed


// Alakítsuk function expressionökké az arrow functionöket!

<<<<<<< HEAD
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
=======
let helloPrefixer = s => 'hello ' + s
// Megoldás:
    let helloPrefixer = function(s){
        s = 'hello ' + s;
        return s;
    }


let doNothing = () => {}
// Megoldás:
    function doNothing(){}

// Alakítsuk function declaractionné

let advice = raining => raining? 'Take your umbrella' : 'Take you sunglasses'
// Megoldás:
    function advice(raining){
        if(raining === true){
            return 'Take your umbrella';
        }else{
            return 'Take your sunglasses';
        }
    }



let isEmpty = arr => !arr.length
// Megoldás:
    function isEmpty(arr){
        if(arr.length <= 0){
            return false;
        }
    }



let tricky = want => want = false
// Megoldás:
    function tricky(want){
        want = false;
        return want;
    }
>>>>>>> ff7383a43c9f7ed67cc462f72e100917ca4510ed
