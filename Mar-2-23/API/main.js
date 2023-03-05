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

const dogImg = fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => data.message) ;


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

