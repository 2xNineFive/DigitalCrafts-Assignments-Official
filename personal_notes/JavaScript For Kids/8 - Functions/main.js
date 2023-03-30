// The Basic Anatomy of a Function

    // This is the syntax for a function
    // function () {
    //     console.log('Do Something');
    // }

// Creating a simple Function 
    const ourFirstFunction = function () {
        // console.log('HelloWorld');
        const cats = 2
        return cats;
    };


// Calling a Function 
    ourFirstFunction();
    // Calling a function will do whatever the body is programmed to do, but the return value of function will be undefined if a return value is not stated. If a return is declared, then the value of that return will be displayed in the console. And it can be used elsewhere in a program. 


// Passing Arguments into Functions
function sayHelloTo(name) {
    console.log(`Hello ${name}`)
};
// sayHelloTo('Frankie');

const drawCats = function (howManyTimes) {
    for (i=0; i < howManyTimes; i++) {
        console.log(`=^.^= ${i}`)
    } 
};
// drawCats(5);


// Passing Multiple Arguments into Functions
const testFunction = function (firstArg, secondArg) {
    console.log(`My first arg is ${firstArg}`);
    console.log(`My second arg is ${secondArg}`);
};
// testFunction(1,2);

function drawThis(howManyTimes, whatToDraw) {
    for (i = 1; i <= howManyTimes; i++) {
        console.log(`${i} ${whatToDraw}`);
    }
};
// drawThis(3, `(*).(*)`)
// drawThis(3, `(>.<)`)



// Returning Values from Functions 
    // If you want to use the output of your function in another areas of your code, you need to output that value. Outputting a value is called a return. 
    
    const double = function (number) {
        answer = number * 2;
        console.log(answer);
        return answer;
    };
    // double(4);


// A Function to Pick a Random Word 
const pickRandomWord = function (words) {
    answer = words[Math.floor(Math.random() * words.length)];
    // console.log(answer);
    return answer;
};

let randomWords = ["Planet", "Worm", "Flower", "Computer"];
pickRandomWord(randomWords);


// A Random Insult Generator
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords2 = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

const randomInsult = `Your ${pickRandomWord(randomBodyParts)} looks like a ${pickRandomWord(randomAdjectives)} ${pickRandomWord(randomWords2)}`
// console.log(randomInsult)


// Making the Random Insult Generator into a Function  
generateRandomInsult = function () {
    var randomBodyParts = ["Face", "Nose", "Hair"];
    var randomAdjectives = ["Smelly", "Boring", "Stupid"];
    var randomWords2 = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

    const randomInsult = `Your ${pickRandomWord(randomBodyParts)} looks like a ${pickRandomWord(randomAdjectives)} ${pickRandomWord(randomWords2)}`
    console.log(randomInsult)
    return randomInsult;
};
// generateRandomInsult();


// Leaving a Function Early with Return
const fifthLetter = function (name) {
    if (name.length < 5) {
        return;
    }

    return `The fifth letter of your name is ${name[4]}`;
};

// Using return multiple times instead of if...else statements

function medalForScore(score) {
    if (score < 3) {
        return 'Bronze';
    }

    if (score < 7) {
        return 'Silver'
    }

    return "Gold!"
};

medalForScore(8);

const phrase = `Frankie earned ${medalForScore(7)}`
// console.log(phrase);


function ArraysSame(arr1, arr2) {

    if (arr1.length != arr2.length) {
        return false
    }

    if (arr1.length === arr2.length) {
        if(arr1.toString() === arr2.toString()) {
            return true
        }
        return false;
    }
};

