# API 201
## Callback functions were once a common way to handle asynchronous code 

### Snippets 
See the two code snippets in index.js


#### Extra Notes
Avoid using the `setTimeout` function becauase this is a red flag for potential employers. There is a use case for this function, but that is quite rare. The purpose of that function in this code is to simulate a request from a server. <br>

Normally adding something to the DOM will take longer than requesting it from a server. The typical trip of a request is: 

Client sends request, server receives request, server interacts with database, database interacts with server, server sends data, client receives data. 
