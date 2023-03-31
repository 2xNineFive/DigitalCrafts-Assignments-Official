// Selecting DOM Elements 
    // Using `id` to Identify Elements
    // In HTML, any element you want to change via DOM manipulation has to have a unique value for the `id` attribute.

    // Selecting an Element Using `GetElementById`
    const headingElement = document.getElementById('main-heading');
    // console.log(headingElement);

    // Replacing the Heading Text Using the DOM. 
    // const newHeadingText = prompt("Please provide a new header.")
    // headingElement.innerText = newHeadingText;




// Using JQuery to work with the DOM
    // You've got to load the JQuery library.
    
    // // Replacing the heading text using JQuery
    // const newHeadingText = 'Frankie is Mad Dope'
    // $('#main-heading').text(newHeadingText); 


    $("html").mousemove(function (event) {
        $("#heading").offset({
          left: event.pageX,
          top: event.pageY
}); });
