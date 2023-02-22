// without a callback, asynchronous code has unexpected results

var shoppingList = ['apples', 'biscuits', 'cabbage'];

function addItem(item) {
  setTimeout(() => {
    shoppingList.push(item);
    console.log("Item added to shopping list");
  }, 200);
}

function getAllItems() {
  setTimeout(() => {
    console.log('Shopping List Items:');
    console.log(shoppingList);
  }, 100);
}


// Is this an argument or an a function, or a function/argument???
// Regarldess of the order, node will dispaly it in the same reverse order.

// This is called firing a function. `addItem1 has an argument. 
addItem('dip');
getAllItems();

// This will fire before the two functions 
console.log('a string');

// We have a shopping list with three items. And we have a function that gets items and another that adds items. 

// The `setTimeout` function is just mocking a network request. Avoid using this! Employers do not like it!!! Any code inside a `setTimeout` is delayed by `n` milliseconds. 

// We have this idea that if we write code in order, it will execute in order. That is why the last two arguments are in their order. 

// But when you fire node, you will notice that the code was not executed in order. Why is that???

// `getAllItems` fired first and then `addItem` fired second due to their timeouts. Also note that line 14 does not actually list the newly added item: `dip`. 

// It seems that the completion time of a network request via functions would determine what would occur first. 

// The item is there in memory, but it did not print out because the time to add the item is longer than the time to get the item. 


// So why do the `console.log('');` strings populate? Why are they not affected by the timeout?  



