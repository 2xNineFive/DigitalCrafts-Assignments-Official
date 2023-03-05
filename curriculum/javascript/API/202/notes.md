# API 202

## Using an instance of `promise` improves how we handle asynchronous code

A promise either resolves or rejects. Each is a valid response that we handle inside of `.then` and `.catch` respectively.
 
 ***What is `.then` and `.catch`?***

### Terms 
**`.catch`**
A `method` chained to the response that the `promise` `returns` with `reject` and within which we pass a `callback function` to handle the error.


**`reject`**
is a callback function a `promise` provides when we call the `promise` --But when the execution of asynchronous code was unsuccessful.
***What is asynchrounous code?***


**`resolve`**
is a callback function a `promise` provides when we call the `promise` --And when the execution of asynchronous code was successful.
***What is asynchrounous code?***


**`.then`**
A `method` chained to the response that the `promise` `returns` with `resolve` and within which we pass a `callback function` to handle the data.

### Snippets 
See index.js