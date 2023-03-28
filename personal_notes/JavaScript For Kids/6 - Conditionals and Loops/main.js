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
    let yourName = "Nohemi" 
    if (yourName === "Frankie") {
        console.log ('Hello me!')
    } 
    else if (yourName === 'Francisco') {
        console.log('Hello Dad!')
    } 
    else if (yourName === 'Nohemi') {
        console.log('Hello Mom!')
    }
     else console.log('Hello Stranger!')