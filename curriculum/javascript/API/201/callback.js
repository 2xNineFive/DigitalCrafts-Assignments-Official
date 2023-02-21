
// callback functions can help us deal with asynchronous code but it can also get messy if we have multiple sequential callbacks (not shown here)

var shoppingList = ['apples', 'biscuits', 'cabbage'];

function addItem(item, callback) {
  setTimeout(() => {
    shoppingList.push(item);
    console.log("Item added to shopping list");
    callback();
  }, 700);
}

function getAllItems() {
  setTimeout(() => {
    console.log('Shopping List Items:');
    console.log(shoppingList);
  }, 10000);
}


// Instead of two calls to two different functions, we have one call with two arguments. 
addItem('dip', getAllItems);

// Because we're passing in `getAllItems` as a `callback` argument in the function `addItem`, the code is forced to execute in the order it is written in. 

