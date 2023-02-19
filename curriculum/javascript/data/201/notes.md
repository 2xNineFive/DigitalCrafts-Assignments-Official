# Javascript Data 201
## Collections data types can be collected in other structures like `objects` and `arrays`.

### `Objects`
An `object` describes something. It lives inside of an `opening and closing curly braces` and is organized as : `key:value pairs`, seperated by commas. The key and and value pairs are themselves seperated by a `:`.

```
const car = {
    color: 'green', 
    <!-- btw this is a string! -->
    mileage: 21,
    <!-- & this is a number! -->
    isNew: false
    <!-- and this is a boolean! -->
};
```

### `Arrays`
An `array` is a list of items. It is defined by `opening and closing square brackets`. The items in the array are `seperated by commas`. Each item in an array is `indexed with a number`. Arrays can contain all other data types as well as objects. 
```
const shoppingList = ['apples', 'celery', 'bread'];
<!-- this is an `array` of `strings`  -->

const ages = [12, 11, 13, 10];
<!-- this is an `array` of `numbers` -->

const cars = [
    {
        color: 'green', 
        mileage: 21090,
        isNew: false
    },
    {
        color: 'red', 
        mileage: 9873,
        isNew: false
    },
    {
        color: 'yellow', 
        mileage: 23211,
        isNew: false
    },
    {
        color: 'blue', 
        mileage: 2081,
        isNew: false
    },
];
```

### Important Things to Note!!!
Objects and Arrays are not data types. Rather, they collect data types. <br>

Arrays can collect other collections like objects. <br>

Javascript considers arrays to be objects. So the shoppingList array above looks like this to JS: 
```
const shoppingList = {
    0: 'apples',
    1: 'celery',
    2: 'bread'
};
```
Notice the key:value pairs! The indices are the keys and the strings are the values! 