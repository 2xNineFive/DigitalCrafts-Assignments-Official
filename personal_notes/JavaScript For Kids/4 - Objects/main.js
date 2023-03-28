
// Example 1: Creating an Object Literal
let frankie = "Frankie S. Molina "
const testSubject1 = {
    name: frankie
};

// console.log(testSubject1);



// Example 2: Accessing Values of an Object
const Erika = {
    favColor: "Red",
    "likes to run": true,
    dominantHand: "left"
};

// Bracket Notation - The key must be in quotes.
// console.log(Erika["favColor"]);

// Dot Notation - The key must not be in quotes.
// console.log(Erika.favColor);

// Object.keys - This method returns an array with all the keys in an object.
// console.log(Object.keys(Erika));


// Example 3: Adding Values to Objects 

// You can use bracket and dot notation to add keys and values to an array. 
var dog = {};
dog['legs'] = 4;
dog['name'] = 'Rico';
dog['color'] = 'Red';
dog.name = 'Kico';
// console.log(dog);



// Example 4: Combining Arrays and Objects 

var friends = [
    {
        name: 'Kaos',
        age: 2
    },
    {
        name: 'Percy',
        age: 4
    }
];

// This selects the entire object at index 0.
// console.log(friends[0]);

// This is bracket notation
// This selects the value of the key 'name' of the object at index 0. 
// console.log(friends[0]['name']);

// This is dot notation
// This selects the value of the key 'name' of the object at index 0. 
// console.log(friends[0].age);


var anna = {name: 'Anna', age: 27, luckyNumbers: [9, 5, 14 ,111]};
var dave = {name: 'Dave', age: 23, luckyNumbers: [3, 9, 140]};
var kate = {name: 'Kate', age: 26, luckyNumbers: [13, 45, 120]};

var friends = [anna, dave, kate];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[0].luckyNumbers);
// console.log(friends[0].luckyNumbers[3]);


// Useful things to do wiith Objects
// 1. Keeping Track of Owed Money
const owedMoney = {}
owedMoney.Jimmy = 10;
owedMoney.Anna = 5;
// console.log(owedMoney);
owedMoney['Jimmy'] -= 4;
// console.log(owedMoney.Jimmy);
owedMoney['Anna'] += 5;
// console.log(owedMoney.Anna);
// console.log(owedMoney);

// 2. Storing information about your movies
var movies = {
    'Finding Nemo': {
        releaseDate: 2003,
        duration: 100,
        actors: ['Albert Brooks', 'Ellen Degeneres', 'Alexander Gould'], 
        format: 'DVD'
    },
    'Star Wars: Episode VI - Return of the Jedi': {
        releaseDate: 1983,
        duration: 134,
        actors: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
        format: 'DVD'
    }, 
    'Harry Potter and the Goblet of Fire': {
        releaseDate: 2005,
        duration: 157, 
        actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
        format: 'Blu-ray'
    }
};

const findingNemo = movies['Finding Nemo'];
// console.log(findingNemo)

var cars = {
    releaseDate: 2006,
    duration: 117, 
    actors: ['Owen Wilson', 'Bonnie Hunt', 'Paul Newman'],
    format: 'Blu-ray'
}
movies['Cars'] = cars;

// console.log(Object.keys(movies))




// Programming Challenges

// 1. Scorekeeper
const score = {
    Jacob: 0,
    Frankie: 0,
    Vanessa: 0
};

score['Frankie'] += 2;
score['Jacob'] += 1;
score['Vanessa'] += 4;
console.log(score);

// 2. Digging into Objects and Arrays
// Say you had the following object:
var myCrazyObject = {
    name: 'A ridiculous object',
    'some array': [7, 9, {purpose: 'confusion', number: 123}, 3.3 ],
    'random animal': 'Banana Shark'
};
// How would you get the number 123 out of this object using one line of JavaScript?
console.log(myCrazyObject['some array'][2].number);
console.log(Object.keys(myCrazyObject['some array'][2]));
