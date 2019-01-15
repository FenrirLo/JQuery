//jquery is a function, .click is a method that attaches an event handler to the selected elements. Event handlers listen to the element and respond when clicked. Using a function as an argument and not defining a variable makes it an annonymous callback function (when a function is passed to another function as an argument). Callback function is not executed immediatly but instead after the click function is executed.

jQuery("h1").click(function() {
  alert("This is a header.");
  alert("I told you, THIS IS A HEADER!");
});

jQuery("p").click(function() {
  alert("This is a paragraph.");
});

jQuery("img").click(function() {
  alert("This is an image.");
});
