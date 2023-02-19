# DOM 102
## Modifying the DOM comes down to learning a few methods and properties.

## Learning the DOM is IMPORTANT! 

### Creating Elements
```javascript
// this creates an empty div
const div = document.createElement('div'); 

// this adds the text to the div
div.innerText = 'Hello World!';
div.innerHTML = `<h1>Hellow World!</h1>`;

// The two lines of code above are equivalent to the HTML commented out below.
// <div>Hello World!</div>

// This is another method for adding HTML tags and text to the DOM!
div.innerHTML = `<h1>Hellow World!</h1>`;
// The JS above is equivalent to the HTML commmented out below.
// <div><h1>Hello World!</h1></div>

// All the JS above is in the DOM but in HTML. The method below adds the JS to HTML. 
root.append(div);
```


### Selecting Elements
```javascript
// returns a list of nodes

// This method targets an element by tag name
document.getElementsByTagName('p');

// This method targets an element class
document.getElementsByClassName('section-content');

// This method targets an element by tag and class
document.querySelectorAll('article .section-content');



// returns a single node
document.getElementById('root');
document.querySelector('article #root');

```


### Modifying Elements 
```javascript
// You cannot modify an element until you have cached it. Once it has been cached you have access to all the key:value pairs. 
const root = document.getElementById('root');
root.setAttribute('data-id', 'someId');
root.style.color = 'crimson';
root.innerText = 'Some new text';
root.removeAttribute('data-id');

```