// const dogList = fetch("https://dog.ceo/api/breeds/list/all")
// .then((response) => response.json())
// .then((data) => console.log(data));



// I think I am wrong about this, but here is my understanding thus far. 
// My understanding is that this getAllBreeds function should return `data` whenever it is fired. 
const getAllBreeds = async () => {
    const x = await fetch("https://dog.ceo/api/breeds/list/all")
    const response = await x.json();
    const data = response.message;
    // console.log(data);
    return data;
}; 

// So when I fire the function below, by running this js file in the terminal (node main.js), why don't I see the object in my terminal? I was under the impression that `data` from the function above should be displayed in my terminal, but it is not. It seems that firing a function will not display anything in the terminal. It appears that only console logging will ever show anything in the terminal. P.s. I added a console log above and I guess I proved that my data is there when I fire this function.  
getAllBreeds();




// Although, now I do understand that this part isn't working as I expected it to. I guess that becuase`listOfBreeds` takes some time to be assigned `data` from `getAllBreeds()`, line 25 gets fired first. And when line 25 fires listOfBreeds hasnt been "resolved" yet. So my object is there, but line 25 hasnt had enough time to capture that assignment yet.
const listOfBreeds = getAllBreeds();
console.log(listOfBreeds);



// I am runnig some experiments here to clarify some stuff regarding returning and console logging. I was under the impression that returning something meant that it would be displayed in terminal, but that does not seem to be the case. It appears that only explicilty firing a console log function will display anything in the terminal. Is that correct? Also a return is only made accessible when it is triggered right? Like that's all a return is. It's like a cache that can the be utilized somehwere else?

// let number = 2;
// console.log(number);

// function numbers() {
//    return number + 1
// }
// console.log(numbers());

// function newNumbers(x) {
//     let dope = numbers();
//     return (dope * x + ' Should be 30')
// }
// console.log(newNumbers(10));