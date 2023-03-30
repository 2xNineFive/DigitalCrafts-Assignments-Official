// #1 Doing Arithmetic with functions 
function add (number1, number2) {
    return number1 + number2
};

function multiply (number1, number2) {
    return number1 * number2
};

const multiAnswer = multiply(36325, 9824);
// console.log(multiAnswer);

const arithAnswer = add(multiAnswer, 777);
console.log(arithAnswer);



// Ask Matt
// #2 Are these Arrays the Same?
function ArraysSame(arr1, arr2) {

    if (arr1.length != arr2.length) {
        console.log('false');
        return false
    }

    if (arr1.length === arr2.length) {
        for (i=0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                answer = true;
                console.log(answer)
                return true;
            }
        }
    }
};

ArraysSame([0,1], [0,2,3]);
