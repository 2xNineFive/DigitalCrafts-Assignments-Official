


const button = document.getElementById('button');
const dogImageButtons = document.getElementById('image-container');

const dog1 = document.getElementById("dog-image-1");
const dog2 = document.getElementById("dog-image-2");
const dog3 = document.getElementById("dog-image-3");
const dog4 = document.getElementById("dog-image-4");

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

dogImageButtons.addEventListener('click', function (e) {
    const target = e.target
    if (target.matches('img')) {
        console.log('It works!');
    }
    if (!target.matches('img')) {
        console.log('Not an Image');
        return null;
    }
});

