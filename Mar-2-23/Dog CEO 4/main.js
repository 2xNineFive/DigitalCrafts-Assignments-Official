

// These are all my global variables
// const getScore = document.getElementById('score');
// console.log(getScore);

// let playerScore = getScore;
// console.log(getScore);

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

    if (target.matches('img')) {
        // console.log(target.dataset);
        if (target.dataset.correct === 'true') {
            console.log('correct')
        } else {
            console.log('incorrect')
        }

    }

    if (!target.matches('img')) {
        console.log('Not an Image');
        return null;
    }
});

