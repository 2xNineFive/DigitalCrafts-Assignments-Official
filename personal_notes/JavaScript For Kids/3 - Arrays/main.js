// Programming Challenges

// #1 & #2 & #3: New Compliments
// Make your own random compliment generator with your own set of words.
// I prefer using template literals because they are really easy to use. In a template literal, I do not have to worry about complexities with single-quotes and double-quotes. 

// Random Compliment Generator
function randomComplimentGenerator() {
    const randomHumanTraits = [
        "bravery",
        "intelligence",
        "compassion",
        "confidence",
        "enthusiasm",
        "honesty",
        "loyalty",
        "humor",
        "patience",
        "wisdom"
    ];
    
    const randomAdjectives = [
        "elegant",
        "fantastic",
        "joyous",
        "healthy",
        "lively",
        "oustanding",
        "successful",
        "victorious"
    ];
    
    const randomWords2 = [
        'monkey',
        'rattlesnake',
        'tiger',
        'cloud',
        'planet',
        'tree',
        'ocean',
        'lion',
        'liger',
        'Zeus',
        'fire',
        'lightning'
    ];
    
    const randomHumanTrait = randomHumanTraits[Math.floor(Math.random() * randomHumanTraits.length)];
    // console.log(randomHumanTrait);
    
    const randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length )];
    // console.log(randomAdjective);
    
    const randomWord2 = randomWords2[Math.floor(Math.random() * randomWords2.length)];
    // console.log(randomWord2);
    
    const randomCompliment = `Your ${randomHumanTrait} is like a ${randomAdjective} ${randomWord2}!!!`;
    console.log(randomCompliment);
}
randomComplimentGenerator();


// #4: Joining Numbers
// How could you turn the array [3, 2, 1] into the string "3 is bigger than 2 is bigger than 1" using the join method?

const numbers = [3, 2 ,1];
const sentence = [numbers[0], " is bigger than ", numbers[1], " is bigger than ", numbers[2]].join('');
// console.log(sentence);






// Trial Runs 

// Random Word Generator
const randomWords = ['dope', 'doper', 'dopest', `Yeet`, `Skur-Skur`];

const randomIndex = Math.floor(Math.random() * randomWords.length);
// console.log(randomWords.length);
const random = randomWords[randomIndex];

// console.log(random);



// Random Response Generator
function giveResponse() {
    var phrases = [
        'That sounds good.',
        'Yes, you should absolutely do that.',
        'Im not sure thats a great idea.',
        'Maybe not today.',
        'Computer says no.'
    ];
    const response = phrases[Math.floor(Math.random() * 5)];
    // Should I go sky-diving?
    // random response
    // console.log(response);   
}
giveResponse();
