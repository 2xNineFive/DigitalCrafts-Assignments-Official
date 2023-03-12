

// These are all my global variables
const getScore = document.getElementById('score');
// console.log(getScore);

let playerScore = 15;
// console.log(playerScore);

let tryCount = 1;
// console.log(tryCount);

const button = document.getElementById('button');
// const disableButton = () => {
    //     button.disabled = false;
    // }
    
const dogImagesHandler = document.getElementById('image-container');
// const disableDogImagesHandler = () => {
    //     dogImagesHandler.disabled = true
    // }
        
const dog1 = document.getElementById("dog-image-1");
const dog2 = document.getElementById("dog-image-2");
const dog3 = document.getElementById("dog-image-3");
const dog4 = document.getElementById("dog-image-4");

let canPush = false;

// These are my buttons 
button.addEventListener('click', () => {
    
    function myfunction() {
        dog1.src="https://images.dog.ceo/breeds/frise-bichon/3.jpg";
        dog1.style="";
        
        dog2.src="https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_10608.jpg";
        dog2.style="";
        
        dog3.src="https://images.dog.ceo/breeds/beagle/n02088364_2572.jpg";
        dog3.style="";
        
        dog4.src="https://images.dog.ceo/breeds/sheepdog-english/n02105641_9319.jpg";
        dog4.style="";
    }
    myfunction(); 
    
});



dogImagesHandler.addEventListener('click', function (e) {

    const target = e.target;
    const correctDog = target.dataset.correct


    if (target.matches('img')) {
        // console.log(target.dataset);

        // works
        if (correctDog === 'true' && tryCount === 1) {
            console.log(`The try count is ${tryCount}`);
            console.log('You selected "correct" on your 1st try!')
            
            // I want a message to display on the DOM so that the user gets feedback on their porformance. 
            // this.textContent = 'correct!'
            
            winThreePoints();
            updatePlayerScore();

            resetCount();
            console.log(`The try count has been reset to ${tryCount}`);
            removeAllDogs();


            console.log(`The player's score is ${playerScore}`);
            return;
            console.log('cant see this');
        } 

        if (correctDog === 'true' && tryCount === 2) {
            console.log(`The try count is ${tryCount}`);
            console.log('You selected "correct" on your 2nd try!')
            
            // I want a message to display on the DOM so that the user gets feedback on their porformance. 
            // this.textContent = 'correct!'
            
            winTwoPoints();
            updatePlayerScore();
            resetCount();
            console.log(`The try count has been reset to ${tryCount}`);

            removeAllDogs();

            console.log(`The player's score is ${playerScore}`);
            return;
        } 
        

        if (correctDog === 'true' && tryCount === 2) {
            tryCount++
            console.log(`The try count is ${tryCount}`);
            console.log('You selected "correct" on your 3rd try!')
            // I want a message to display on the DOM so that the user gets feedback on their porformance. 
            // this.textContent = 'correct!'
            
            winOnePoint();
            updatePlayerScore();

            resetCount();
            console.log(`The try count is ${tryCount}`);

            removeAllDogs();

            console.log(`The player's score is ${playerScore}`);
            return;
        } 
        
        if (correctDog === 'true' && tryCount === 3) {
            console.log('You selected "correct" on your 4th try!')
            // I want a message to display on the DOM so that the user gets feedback on their porformance. 
            // this.textContent = 'correct!'
            
            lose5Points();
            updatePlayerScore();
            
            console.log(`The try count is ${tryCount}`);
            resetCount();
            console.log(`The try count is ${tryCount}`);

            removeAllDogs();

            console.log(`The player's score is ${playerScore}`);
            // return;
        } 
      
        else {
            // console.log('incorrect')
            console.log(`The try count is ${tryCount}`);
            ++tryCount;
            target.remove();
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

function resetCount() {
    tryCount = 1;
}

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