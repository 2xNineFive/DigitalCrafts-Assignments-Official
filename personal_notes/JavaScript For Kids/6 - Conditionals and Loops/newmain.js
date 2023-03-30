const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let randomString = '';

while (randomString.length < 3) {
    const randomIndex = Math.floor(Math.random() * alphabet.length)
    const randomLetter = alphabet[randomIndex];
    randomString += randomLetter;
}

console.log(randomString);

// Frankie is mad dope
// f=1, r=7, a=4, i=1, e=3
input = 'frankie is mad dope';
output = ''; 

for (i = 0; i < input.length; i++) {
    if (input[i] === "a") {
    output += "4";
    } else if (input[i] === "e") {
    output += "3";
    } else if (input[i] === "i") {
    output += "1";
    } else if (input[i] === "o") {
    output += "0";
    } else {
    output += input[i];
    }
}
console.log(output);
