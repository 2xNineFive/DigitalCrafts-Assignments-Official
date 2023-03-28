# Objects

**Aside**
Objects are similar to arrays. But objects use strings rather than numbers to access the different elements. 

The strings are called ***keys*** or ***properties***. And the elements they point to are called ***values***. Together, those pieces of info are called ***key-value pairs***. 

Objects are used to represent single things with multiple characteristics, or ***attributes***. For example, let's say that I want to create an object called Frankie and it contains information about my favorite hobbies. 

## Creating Objects
**Aside**
An ***object literal*** is a way of creating an object by writing out the entire object at once. The curly brackets and everything in between them is an object literal.

A key is always a string, with or without quotes. And the value for that key can be any kind of value, or even a variable containing a value. 

```javascript
var testSubject1 = {
    legs: 2,
    arms: 2,
    eyes: 2, 
    name: "Frankie",
    hair-color: "brown",
    eye-color: "brown"
}
```

## Accessing Values in Objects
There are two options for accessing the values of objects. You can use either ***bracket notation*** or ***dot notation***. A third option is ***Object.keys***. It returns an array containing all the keys of any object. 

### Bracket Notation 
```JavaScript
testSubject1[name];

// Frankie
```

### Dot Notation
```JavaScript
testSubject1.eye-color;

// brown
```


### Object.keys 
```JavaScript
const racer1 = {
    driver: "Frankie",
    car: "Audi",
    NOS: false
}

Object.keys(racer1);
// [driver, car, NOS]
```

## Adding Values to Objects
**Aside** 
Objects store keys and values without assinging them any particular order. Therefore, you should not write a program that relies on object keys being in a precise order. 


### Example 
Refer to Example 3 in main.js


## Combining Arrays and Objects
Refer to Example 4 in main.js

## Useful Things to do with objects
### Refer to 'Keeping Track of Owed Money' in main.js
