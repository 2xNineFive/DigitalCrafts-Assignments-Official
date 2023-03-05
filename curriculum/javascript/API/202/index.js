

const shoppingList = ['apples', 'biscuits', 'cabbage', 'dip'];

const isCode200  = () => Math.random() >= 0.5;


// This function returns a `promise`. It is mocking a network call that has some delay to it (asynchrounous). This means that this function cannot return data right away. But because it is a function, it still has to do something or return something right away. So when we call `getShoppingList();`, it returns a `promise`. 

// The `promise` allows JavaScript to keep running the code after the `promise`, even though it does not have the data it needs. When it is eventually resloved, then everything is well. But if the promise is eventually rejected, then you need to handle that `error` so that JS will not break. 

// To build a `promise`, you need to use the `Promise` `CLASS`. Usually, whenever you see a capital letter letter preceded by the `new` keyword, you are dealing with a `CLASS`. This gives us a new instance of a promise. The parameters, `resolve` and `reject`, inside the `Promise` object are `callback functions` it passed back to us. All the code, including the parameters, inside the `Promise` function is a `callback function` we are passing in. It seems that we are 
function getShoppingList() {
    return new Promise((resolve, reject) => {
        // This setTimeout
        setTimeout(() => {
            if (isCode200()) {
                resolve(shoppingList);
            } else {
                reject('There was a problem with the server. Please try again.')
            }
        }, 500);
    });
}

function testIsCode200() {
getShoppingList()
    .then(data => console.log(data))
    .catch(data => console.error(`ERR: ${err}`));
}

// testIsCode200();

// A promise is a function that will eventually gives us something. So it is kind of like an IOU. If resolved, it will give us data. If it is rejected, it will give us an error.