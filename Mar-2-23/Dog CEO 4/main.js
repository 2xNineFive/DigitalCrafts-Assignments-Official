

// These are all my global variables

// This is used to change the player's score in the DOM. 
const getScore = document.getElementById('score');
// console.log(getScore);

// This is used to manage the state of the player's score. 
let playerScore = 15;
// console.log(playerScore);

// This is used to to manage the state of the player's turn. 
let turnNumber = 1;
// console.log(turnNumber);

// This is used target the push button in the DOM. 
const getImagesButton = document.getElementById('button');

// This is used to keep track of the amount of img Nodes in the DOM. 
let numberOfImages = document.getElementsByTagName('img').length
console.log(numberOfImages);



// const disableButton = () => {
    //     button.disabled = false;
    // }
    
const handleGameState = document.getElementById('image-container');
// const disableDogImagesHandler = () => {
    //     dogImagesHandler.disabled = true
    // }
        
    
const dog1 = document.getElementById("dog-image-1");
const dog2 = document.getElementById("dog-image-2");
const dog3 = document.getElementById("dog-image-3");
const dog4 = document.getElementById("dog-image-4");
    
 

// These are my buttons 
getImagesButton.addEventListener('click', () => {
    function myfunction() {
        dog1.src="https://images.dog.ceo/breeds/frise-bichon/3.jpg";
        dog1.style="";
        // console.log(dog1.src);
        
        dog2.src="https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_10608.jpg";
        dog2.style="";
        // console.log(dog2.src);
        
        dog3.src="https://images.dog.ceo/breeds/beagle/n02088364_2572.jpg";
        dog3.style="";
        // console.log(dog3.src);
        
        dog4.src="https://images.dog.ceo/breeds/sheepdog-english/n02105641_9319.jpg";
        dog4.style="";
        // console.log(dog4.src);
    }
    myfunction(); 



});



handleGameState.addEventListener('click', function (e) {

    const target = e.target;
    const correctDog = target.dataset.correct


    if (target.matches('img')) {
        // console.log(target.dataset);

        // works
        if (correctDog === 'true' && turnNumber === 1) {
            // target.remove();
            console.log(`The turn number is ${turnNumber}`);
            console.log('You selected "correct" on your 1st try!')
            
            // I want a message to display on the DOM so that the user gets feedback on their porformance. 
            // this.textContent = 'correct!'
            
            winThreePoints();
            updatePlayerScore();
            
            resetTurn();
            console.log(`The turn number has been reset to ${turnNumber}`);
            
            
            console.log(`The player's score is ${playerScore}`);
            removeAllDogs();
            return;
            console.log('cant see this');
        } 
        
        if (correctDog === 'true' && turnNumber === 2) {
            console.log(`The turn number is ${turnNumber}`);
            console.log('You selected "correct" on your 2nd try!')
            
            // I want a message to display on the DOM so that the user gets feedback on their porformance. 
            // this.textContent = 'correct!'
            
            winTwoPoints();
            updatePlayerScore();
            
            resetTurn();
            console.log(`The try count has been reset to ${turnNumber}`);
            
            
            console.log(`The player's score is ${playerScore}`);
            // removeAllDogs();
            return;
            console.log('cant see this');
        } 
        

        if (correctDog === 'true' && turnNumber === 3) {
            console.log(`The turn number is ${turnNumber}`);
            console.log('You selected "correct" on your 3rd try!')
            // I want a message to display on the DOM so that the user gets feedback on their porformance. 
            // this.textContent = 'correct!'
            
            winOnePoint();
            updatePlayerScore();

            resetTurn();
            console.log(`The turn number is ${turnNumber}`);

            removeAllDogs();

            console.log(`The player's score is ${playerScore}`);
            return;
        } 
        
        if (correctDog === 'true' && turnNumber === 4) {
            console.log(`The turn number is ${turnNumber}`);
            console.log('You selected "correct" on your 4th try!')
            // I want a message to display on the DOM so that the user gets feedback on their porformance. 
            // this.textContent = 'correct!'
            
            lose5Points();
            updatePlayerScore();
            
            resetTurn();
            console.log(`The turn number is ${turnNumber}`);

            // removeAllDogs();

            console.log(`The player's score is ${playerScore}`);
            // return;
        } 
      
        else {
            // console.log('incorrect')
            console.log(`The turn number is ${turnNumber}`);
            ++turnNumber;
            console.log(`The turn number is ${turnNumber}`);
            target.remove();
            console.log(numberOfImages.length);
            // return;

        }
    }

    if (!target.matches('img')) {
        // console.log('Not an Image');
        return null;
    }

});



// These functions are triggered when the User selects the correct answer. 
function winThreePoints() {
    ++playerScore
    ++playerScore;
    ++playerScore;
}

function winTwoPoints() {
    ++playerScore;
    ++playerScore;
}

function winOnePoint() {
    ++playerScore;
}

function lose5Points() {
    --playerScore;
    --playerScore;
    --playerScore;
    --playerScore;
    --playerScore;
}


// This function is used to update the player's score in the DOM. 
function updatePlayerScore() {
    getScore.textContent = `${playerScore}`;
}

// This function is used to updata the player's turn to 1. 
function resetTurn() {
    turnNumber = 1;
}

// This function is used to remove the dog images at the end of every wrong turn. It is also used to remove all dog images 
function removeAllDogs() {
    dog1.src="";
    dog1.style="";
    
    dog2.src="";
    dog2.style="";
    
    dog3.src="";
    dog3.style="";
    
    dog4.src="";
    dog4.style="";
}