// button
// add event listener
// call api
// wait for response
// create image element
// add source value
// append to DOM


// promise1.then((value) => {
//     console.log(value);
// });




// Fetch API is different for Node and for Browser. 
// Node is JS outside of a browser. 
// The browser is its own environment and Node is also its own environment. 
// Node can be used on the server side. 

const dogImg = fetch("https://dog.ceo/api/breeds/image/random")
.then((response) => response.json())
.then((data) => console.log(data));

// const promise1 = new Promise((resolve, reject) => {
//     resolve(dogImg);
// });

// console.log(promise1);

// const imgDiv = document.getElementById('img');
// const createImgDiv = document.createElement('img');
// createImgDiv.src = 'dogImg,';
// imgDiv.appendChild(createImgDiv);

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

