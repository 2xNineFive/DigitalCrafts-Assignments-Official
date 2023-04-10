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

function renderCount() {
    position.textContent = questions[currentIndex];
    // console.log (questions[currentIndex]);
};

const box = document.getElementById("i");
const box2 = document.getElementById("ii");
const box3 = document.getElementById("iii");
const box4 = document.getElementById("iv");
const box5 = document.getElementById("v");


// We are trying to get the button to change to 2.
// These are my buttons to change back and forth. 
const forwardButton = document.getElementById('forward');

const backButton = document.getElementById('back');


// Now these buttons are listening and know what to do. 
forwardButton.addEventListener('click', () => {
    currentIndex += 1;
    renderCount();
    if (questions[currentIndex] === "2") {
        box.removeAttribute("id", "question")
        box2.setAttribute("id", "question")
    }
    if (questions[currentIndex] === "3") {
        box2.removeAttribute("id", "question")
        box3.setAttribute("id", "question")
    }
    if (questions[currentIndex] === "4") {
        box3.removeAttribute("id", "question")
        box4.setAttribute("id", "question")
    }
    if (questions[currentIndex] === "5") {
        box4.removeAttribute("id", "question")
        box5.setAttribute("id", "question")
    }


});

backButton.addEventListener('click', () => {
    currentIndex -= 1;
    renderCount ();
    if (questions[currentIndex] === "4") {
        box5.removeAttribute("id", "question")
        box4.setAttribute("id", "question")
    }
    if (questions[currentIndex] === "3") {
        box4.removeAttribute("id", "question")
        box3.setAttribute("id", "question")
    }
    if (questions[currentIndex] === "2") {
        box3.removeAttribute("id", "question")
        box2.setAttribute("id", "question")
    }
    if (questions[currentIndex] === "1") {
        box2.removeAttribute("id", "question")
        box.setAttribute("id", "question")
    }
});




if (questions[currentIndex] === "1") {
    box.setAttribute("id", "question")
    
}



