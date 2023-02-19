// Initialize a variable `friends` that contains information on at 
// least three friends with the following information.

// - The first name and the last name stored under separate keys
// - The age of the friend
// - Whether the friend is over 25 years of age
// - A list of at least 3 hobbies that the friend enjoys

// Verify you have set things up correctly by logging to 
// the console the following values.

// - The age of the 1st friend
// - The hobbies of the last friend
// - The first name of the 2nd friend


// This solution is based off of objects.
const friends = {
    friend1 : {
        firstName: 'Joe',
        lastName: 'Bigss',
        age: 27,
        isOver25: true,
        hobbies: ['reading', 'skating', 'drawing']
    },
    
    friend2 : {
        firstName: 'Rebeca',
        lastName: 'Smalsss',
        age: 32,
        isOver25: true,
        hobbies: ['sky diving', 'hiking', 'gardening']
    },
    
    friend3 : {
        firstName: 'Michella',
        lastName: 'Talston',
        age: 24,
        isOver25: false,
        hobbies: ['music production', 'programming', 'MMA']
    }
}

// console.log(friends);
console.log(friends.friend1.age);
console.log(friends.friend3.hobbies);
console.log(friends.friend2.firstName);



// This solution is baased off an array. 
const dogs = [
    {
        firstName: 'Billy',
        lastName: 'Jacobson',
        age: 3,
        isOver5: false,
        hobbies: ['digging', 'barking', 'jumping']
    },
    {
        firstName: 'Wolf',
        lastName: 'Gang',
        age: 6,
        isOver5: true,
        hobbies: ['sleeping', 'eating', 'running']
    },
    {
        firstName: 'Amadeus',
        lastName: 'Bopper',
        age: 2,
        isOver5: false,
        hobbies: ['fallling', 'eating', 'cuddling']
    },
];
