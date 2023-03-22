# Arrays 

An array is a group/list of other JS data values. 

## Creating an Array

## Accessing an Array's Elements

## Setting or Changing Elements in an Array

## Mixing Data Types in an Array

## Working with Arrays
### Finding the Length of an Array
### Adding Elements to an Array
### Removing Element from an Array
### Adding Arrays
### Finding the Index of an Element in an Array
### Turning an Array into a String

## Useful Things to do with Arrays 
### Finding Your Way Home

### Decision Maker
We can use arrays to build a program to make decisions for us (like a magic 8-ball). First we need to get random numbers, which JS returns as decimal fractions. And then we need to convert those decimal fractions into to whole numbers. 

#### Using `Math.random()`
A. This method returns a random number between 0 and 1 each time it is called. It will never return 1 or a number bigger than 1. 

```javascript
Math.random();
// 0.47564
Math.random();
// 0.3455653
Math.random();
// 0.776749
```

B. If you want a number bigger than 1, you can multiply the result of calling Math.random(). 

Example
If you want a number between 0 and 6...
```javascript
Math.random() * 6;
// 1.47564
Math.random() * 6;
// 5.3455653
Math.random() * 6;
// 2.776749
```

#### Rounding Down with  `Math.floor()`
When working with arrays, a whole number must be used to target an index. Since the results of `Math.random()` are technically decimal fractions, they cannot be used to target an index. 

The `Math.floor()` method can be used to take a decimal fraction and round it down to the whole number below it. That whole number can then be used to target indices. 

```JavaScript
Math.floor(4.234627);
// 4
Math.floor(7.28796);
// 7
Math.floor(3.340587);
// 3
```

#### Combining `Math.random()` and `Math.floor()`
Both of these methods can be combined to select a random index. To acheive this... 

Multiply `Math.random()` by the length of the array, and then call `Math.floor()` on that value. 

For example, 
```JavaScript
Math.floor(Math.random() * 4);
// could be 0, 1, 2, or 3

```

#### The Complete Decision Maker
```javascript
var phrases = [
    'That sounds good.',
    'Yes, you should absolutely do that.',
    'Im not sure thats a great idea.',
    'Computer says no.'
];

// Should I go sky-diving?
const response = Math.floor(Math.random() * 4);
response;
```
