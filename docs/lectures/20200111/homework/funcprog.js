//1. Feladat

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [2];
let arr3 = [2, 3];

function dividables(arrDivs, divNums) {
    let results = [];
    arrDivs.filter(arrDiv => {
        if ((divNums.every(divNum => arrDiv % divNum === 0))) {
            results.push(arrDiv);
        }
    })
    return results;
}

console.log(`Divided numbers`);
console.log(dividables(arr1, arr2));
console.log(dividables(arr1, arr3));


//2. feladat

let strs1 = ['a', 'aa', 'ab', 'aaa'];
let strs2 = ['b', 'bb', 'ab', 'ba'];
let chars1 = 'a';
let chars2 = 'ab';


function legalStrings(wordsArrs, containChars) {
    let resultWords = [];
    containChars = [...containChars];
    wordsArrs.forEach(wordsArr => {
        let newWords = wordsArr.split("");
        if(newWords.every(newWord => containChars.includes(newWord))) {
            resultWords.push(wordsArr);
        }
    })
    return resultWords;
}

console.log(`Selected characters:`);
console.log(legalStrings(strs1, chars1));
console.log(legalStrings(strs1, chars2));
console.log(legalStrings(strs2, chars2));


//3. Feladat

const nums = [1,2,3,4,5,-6,-7,-8,-9,10];

function getMax(numsArr) {
    let maxNum = 0;
    return numsArr.reduce((accumulator,currentValue) => {
        if(accumulator < currentValue) {
            return currentValue;
        }
        return accumulator;
    });
}

console.log(`The max number is : ${getMax(nums)}`);


//4. Feladat

let values = [1,4,9,3,12];

function theCondition(value) {
    return value > 5;
}

function select(arrElements,cond) {
    let trueElements =[];
    let falseElements = [];
    arrElements.forEach(arrElement => {
        if(cond(arrElement)) {
            trueElements.push(arrElement);
        } else {
            falseElements.push(arrElement);
        }         
    });
    return [trueElements,falseElements];
}

console.log(select(values,theCondition));


//5. Feladat

function isPermutation(subject, base) {
    if(subject.length > base.length) return `Base karakterei nem elegendőek`;
    if(subject.length < base.length) return `Túl rövid subject karakterei`;
    if(subject.length === base.length) {
    let baseChars = [...base];
    let subChars = [...subject];
    if(baseChars.every(baseChar => subChars.includes(baseChar))) {
        return true;
    }
    return false;
    }
}
console.log(isPermutation('ba','ba'));
