// This assignment is all about managing state. 

// We're trying to initialize the count on screen load so that it dsiplays "1" when the browser loads. 

// document.getElementById("count").onload = function() {myFunction()};
// function myFunction() {
//     output.textContent = questions[0];
// };

// const questions = ["1", "2", "3", "4", "5"];
// const output = document.getElementById('count');
// output.textContent = questions[0];



// These are some of our global variables. 
const questions = ["1", "2", "3", "4", "5"];

const position = document.getElementById('count');

let currentIndex = 0;
position.textContent = questions[currentIndex];
// This is initializing the count to 1.
// This needs to go inside of a renderFunction. 

function renderCount () {
    position.textContent = questions[currentIndex];
    console.log (questions[currentIndex]);
};


// We are trying to get the button to change to 2.
// These are my buttons to change back and forth. 
const forwardButton = document.getElementById('forward');
const backButton = document.getElementById('back');


// Now these buttons are listening and know what to do. 
forwardButton.addEventListener('click', () => {
    currentIndex += 1;
    renderCount();
});

backButton.addEventListener('click', () => {
    currentIndex -= 1;
    renderCount ();
});

// I still need 







