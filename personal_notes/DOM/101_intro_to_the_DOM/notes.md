# The DOM

## Vocabulary
**Document Object Model**
The browsers we use are programs that interpret HTML and CSS. Browsers also render the content, structures, and styles into the pages we see. In addition, the browser creates a representation of the document. This document is called the `Document Object Model`, and it allows JavaScript to access the text content and elements of the website document as objects. The DOM can be viewed through `Developer Tools` in the `Elements` tab or the `Console` tab. Both tabs will show you the same output. It is important to note that any modifications to the DOM via client-side JavaScript will never change or affect the Source Code. 

**document**
The `document` is technically an object that has many properties and methods that can be used to modify websites. Therefore, understanding how to work with objects is crucial to working with the DOM. 

## How to Access the DOM in the Browser:
***Method One***
1. Right click on website and select `inspect`.
2. Move to the `Elements` tab. 
3. You are now viewing the `DOM`. 

***Method Two***
1. Right click on website and select `inspect`.
2. Move to the `Console` tab. 
3. Type `document` into the console and press `ENTER`. 
4. You are now viewing the `DOM`.

## What Are the Differences Between the DOM and HTML Source Code?
A. The DOM is modified by client-side JavaScript
***Example***
1. Navigate to the `Console` tab of Developer Tools
2. Type: `document.body`. You are now viewing the body element and all its children.
3. Type: document.body.style.backgroundColor = `red`;
4. Navigate to the `Elements` tab. You will see that a `style` attribute has been created inside the body tag of the DOM. Note that the Source Code has NOT BEEN MODIFIED. 
5. Right Click on the website and select `View Page Source`. You will notice that the body tag does not contain the new style. This proves that the DOM and HTML Source code are not the same thing.

B. The browser automatically fixes errors in the source code by updating the DOM with the correct code. 
***Example*** 
1. Failing to include a tag that must be present inside of another tag will cause the browser to automatically update the DOM with the missing tags. 
2. Failing to close a tag will also cause the browser to automatically update the DOM with closed tags. 

## Conclusion
The DOM is a representation of the Source Code that the browser creates. The DOM is comprised of an object called the `document`. Since the `document` is an object, it has tons of properties and methods that can be used to modify the `document`. Temporary modifications to the DOM can be made in the `Console` tab of the Developer Tools. Meanwhile, permanent modifications to the DOM can be made with client-side JavaScript. Any modifications to the DOM do not affect the Source Code in anyn way. 