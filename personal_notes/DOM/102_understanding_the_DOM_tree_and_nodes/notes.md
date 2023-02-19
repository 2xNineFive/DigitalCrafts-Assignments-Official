# Understanding the DOM Tree and Nodes
In order to work with the DOM, developers must understand HTML and JavaScript terminology. They must also know how to properly use HTML and JavaScript. 

## Vocabulary
### DOM Tree
The DOM consists ot a tree structure of nested nodes, which is often referred to as the DOM Tree. The nodes in the DOM are referred to as parents, children, and siblings, depending on their relation to other nodes. 

### Nodes
All items in the DOM are Nodes. There are various types of nodes, but the three main ones that we work with most often are: 
**Element Nodes**
An element node is an HTML element in the DOM. 

**Text Nodes**
A text node is any lone text outside of an element. 

**Comment Nodes**
A comment node is an HTML comment. 

**Document Node**
The `document` itself is a document node and it is the root of all other nodes. 


## How to Access an Element 
Use the `id` attribute! <br/>

**Access via Console Tab in Developer Tools and JavaScript** <br/>
Pre-Work: Create HTML doc and in the body create an `a` tag with the `id` set to nav. 

1. Navigate to the `Console` tab in Developer Tools
2. Type: `document.getElementById('nav');`
3. Create a variable `navLink` and assign it to the object and method in step 2
```javaScript
let navLink = document.getElementById('nav`);
```
4. navLink contains the `a` tag and now it is easy to modify the attributes and values. 
5. In the `Console` type: 
```javaScript
navLink.href = 'https://www.wikipedia.org';
```
6. In the `Console` type: 
```javaScript
textContett = 'Navigate to Wikipedia';
``` 
7. In the `Console` type: 
```javaScript
navLink;
```
8. You'll see that the elements tag in the DOM has been appended with the new contents. These changes are also reflected on the front-end of the website. 


## The DOM Tree and Nodes 
The DOM tree consists of various types of nodes that are nested within other nodes. 

root `document` node and all of its children. 



# Conclusion
Developers must know the fundamentals of HTML and JS before they attempt to manipulate the DOM. The first step to modifying the DOM is to create an `id` attribute in the HTML tag that is being targeted. This `id` will be used in JavaScript to apply properties and methods. <br />

The ideal thing to do is to create a variable and assign it to the `id` you are targeting. You can then use `.` notatation to create and store various methods in relation to that variable and call them all at once. This technique reduces the amount of code to write. Refer to the code block below to view the tecnique in action. 
```javaScript 
let navLink = document.getElementById('someId');
navLink.href = 'www.google.com';
navLink.textContent = 'Navigate to Google';
navLink;
```
Note that when `navLink` is called the updated DOM element is returned. <br />

