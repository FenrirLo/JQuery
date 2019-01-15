//jquery is a function, .click is a method that attaches an event handler to the selected elements. Event handlers listen to the element and respond when clicked. Using a function as an argument and not defining a variable makes it an annonymous callback function (when a function is passed to another function as an argument). Callback function is not executed immediatly but instead after the click function is executed.

$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});
