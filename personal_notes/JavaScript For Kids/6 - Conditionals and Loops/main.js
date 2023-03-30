// Conditionals and Loops are two of the most important concepts in JavaScript! Together, they are called control structures. They work together to control which parts of your code execute and how often they execute, given certain conditions you define. 

    //  Conditionals: if something is true, do this. Otherwise do that. 

    // Loops: as long as something is true, keep doing this. 



// Conditionals
    // There are two conditionals in JS. 

    // if : used to execute code if something is true
    // ex. if you did your homework, you can play video games

    // if...else : used to execute code if something is true and another if false
    // ex. if you drink water, you are hydrated. else you are dehydrated. 


    const myName = 'Frank';
    console.log(`Hello ${myName}`);

    // an if statement has two main parts: the condition and the body. The condition should be a boolean value. and the body is code that executes if the condition is true. The `if` checks whether the condition is true. 
    if (myName.length > 5) {
        console.log('Wow, your name is long!')
    } else console.log('Your name is kinda short.')

    console.log('---')

    

    // Chaining if...else statements 

    var lemonChicken = false;
    var beefWithBlackBean = true;
    var sweetAndSourPork = true;

    beefWithBlackBean = false;
    sweetAndSourPork = false;
    if (lemonChicken) {
        console.log("Great! I'm having lemon chicken!");
    }
    else if (beefWithBlackBean) {
        console.log("I'm having the beef.");
    }
    else if (sweetAndSourPork) {
        console.log("Ok, I'll have pork.");
    }
    else console.log("well, I guess I'll have rice then!");

    console.log('---');
    
    // Try it out! 
    let yourName = "Nohemi";
    if (yourName === "Frankie") {
        console.log ('Hello me!');
    } 
    else if (yourName === 'Francisco') {
        console.log('Hello Dad!');
    } 
    else if (yourName === 'Nohemi') {
        console.log('Hello Mom!');
    }
     else console.log('Hello Stranger!');

     console.log("---")
    // In summary, conditionals allow you to run a piece of code, or another piece of code, if a certain condition is true or not true.  


// Loops 
    // On the other hand, loops allow you to run a piece of code multiple times, depending on whether a condition remains true. 

    // While Loops
    // A while loop keeps running its body until a particular condition stops being true. 
    // ex. If true, keep going. If false, stop going...
    i = 0
    while (i < 2) {
        console.log("cool");
        i++;
    }
    console.log("---")
    
    
    // Counting Sheep with a loop 
    // It is important to avoid infinite loops! If you do not add `sheepCounted++` in the body below, this loop will always stay at 0. 
    var sheepCounted = 0; 
    while (sheepCounted < 10) {
        console.log(`I have counted ${sheepCounted} sheep`);
        sheepCounted++
    } 
    console.log('zzzzzzz - while loop');
    
    console.log("---")
    
    
    // For Loops 
    // For loops make it easier to write loops that create a variable, loop until a condition is true, and update the variable at the end of each turn around the loop. 
    
    // When Setting For Loop: --- and all this happens before the body! 
    // 1. Create variable
    // 2. Specify condition 
    // 3. declare how variable should change at the end of each loop
    
    for (sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
        console.log(`I counted ${sheepCounted} sheep`);
    }
    console.log('zzzzzzzz - for loop');
    
    console.log("---");
    
    // For loops are oftentimes used to run something a set number of times. 
    // For example: 
    const sayHello = 3; 
    for (i = 0; i < 3; i++) {
        console.log('Hello');
    };
    console.log("---");
    
    // Using For Loops with Arrays and Strings 
    // One very common use of loops is to do something with every element in an array or every character in a string 
    // Array example: 
    const animals = ['lion', 'giraffe', 'elephant', 'rhino']; 
    for (i = 0; i < animals.length; i++) {
        console.log(`This zoo contains a(n) ${animals[i]}`);
    }
    console.log("for loop w/ array");
    console.log("---");
    
    // String Example: 
    const myRealName = 'frankie'; 
    for (i = 0; i < myRealName.length; i++) {
        console.log(`My name contains the letter ${myRealName[i]}`);
    }
    console.log("for loop w/ string");
    console.log("---");
    
    // Other ways to use for loops 
    // Example: Printing all the powers of 3 below 1k
    for (x= 3; x <= 10000; x = 3 * x ) {
        console.log(x);
    }
    console.log("for loop - getting powers of 3, upper limit = 1000");
    console.log("---");
    
    // Try it out: Rewrite the loop above with a while loop. 
    i = 3
    while (i <= 10000) {
        console.log(i);
        i = i * 3;
    }
    console.log("while loop - getting powers of 3, upper limit = 1000");
    console.log("---");
    
    
    
// Programming Challenges
// #1: Awesome Animals 
// Write a For Loop that modifies an array of animals, making them awesome! 
const newAnimals = ['dog', 'cat', 'goldfish', 'rabbit'];

for (i = 0; i < newAnimals.length; i++) {
    newAnimals[i] = `Awesome ${newAnimals[i]}`;
    console.log(newAnimals);
};
console.log("for loop - modifying array");
console.log("---");
    

// #2: Random String Generator
// Make a random string generator. You'll need to start with a string containing all the letters in the alphabet. 
const alphabet = "abcdefghijklmnopqrstuvwxyz";


let randomString = '';
while (randomString.length < 5) {
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    randomLetter = alphabet[`${randomIndex}`];
    randomLetter += randomString 
    console.log(randomString);
}


// #3: Turn Text into H4ck3r Sp34k!
const input = "javascript is awesome";
let output = "";

for (var i = 0; i < input.length; i++) {
    if (input[i] === "a") {
    output += "4";
    } else if (input[i] === "e") {
    output += "3";
    } else if (input[i] === "i") {
    output += "1";
    } else if (input[i] === "o") {
    output += "0";
    } else {
    output += input[i];
    }
}
console.log(output);