
// const deck = [];
// const suits = ["hearts", "spades", "clubs", "diamonds"];
// const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];


// const makeCard = (rank, suit) => {
//   const card = {
//     rank: rank,
//     suit: suit,
//     pointValue: rank > 10 ? 10 : rank,
//   };
//   deck.push(card);
// };

// for (let suit of suits) {
//   for (const rank of ranks) {
//     makeCard(rank, suit);
//   }
// }





// window.addEventListener("DOMContentLoaded", () => {

// });










// This our code 


// Step 4: Dealing the Cards
const dealButton = document.getElementById('deal-button');
const hitButton = document.getElementById('hit-button');

function buildDeck() {
  let deck = [];
  const suits = ["hearts", "spades", "clubs", "diamonds"];
  const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      deck.push(`${ranks[j]}_of_${suits[i]}.png`)
  }
    }
  return deck;
} 
const deck = buildDeck();



dealButton.addEventListener('click', () => {
  const dealerHand = document.getElementById("dealer-hand");
  const playerHand = document.getElementById("player-hand");
  

  function dealPlayer () {

    const getCard = deck.pop();
    playersHand.push(getCard);
    // console.log(playersHand);

    const imgTag = document.createElement('img');
    imgTag.src = `./images/${playersHand[0]}`;
    playerHand.appendChild(imgTag);

  }

  function dealDealer () {
    const cardsArray = [
      "./images/9_of_spades.png",
      "./images/8_of_spades.png",
      "./images/7_of_spades.png",
      "./images/6_of_spades.png"
    ];
    const imgTag = document.createElement('img');
    imgTag.src = cardsArray[0];
    dealerHand.appendChild(imgTag);
    
    const getCard = deck.pop();
    dealersHand.push(getCard);
    // console.log(dealersHand);

  }
  
  function actuallyDealCards() {
    myTimeout = setTimeout(dealPlayer, 500);
    myTimeout = setTimeout(dealDealer, 1000);
    myTimeout = setTimeout(dealPlayer, 1500);
    myTimeout = setTimeout(dealDealer, 2000);
  } 
  actuallyDealCards();

  console.log(playersHand);
  console.log(dealersHand);
});



// Step 5: Hit  Me
hitButton.addEventListener('click', () => {
  
  const dealerHand = document.getElementById("dealer-hand");
  const playerHand = document.getElementById("player-hand");
  
  
  function dealPlayer () {
    const cardsArray = [
      "./images/9_of_spades.png"
    ];

    const imgTag = document.createElement('img');
    imgTag.src = cardsArray[0];
    playerHand.appendChild(imgTag);

    const getCard = deck.pop();
    playersHand.push(getCard);
    // console.log(playersHand);
    
  }


  function dealDealer () {
    const cardsArray = [
      "./images/9_of_spades.png"
    ];

    const imgTag = document.createElement('img');
    imgTag.src = cardsArray[0];
    dealerHand.appendChild(imgTag);

    const getCard = deck.pop();
    dealersHand.push(getCard);
    // console.log(dealersHand);
    
  }
  
  function actuallyHitCards() { 
    myTimeout = setTimeout(dealPlayer, 200);
    myTimeout = setTimeout(dealDealer, 800);
  }
  actuallyHitCards();

  console.log(playersHand);
  console.log(dealersHand);
});


let dealersHand = [];
// console.log(dealersHand);


let playersHand = [];





// testing whether or not the pop actually affects the value of the friends array. 

// const friends = [
//   "One",
//   "Two",
// ];
// console.log(friends);

// const notFriends = friends.pop();
// console.log(notFriends);
// console.log(friends);
