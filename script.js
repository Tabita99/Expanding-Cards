//places all in a nodlist, similar to that of an array
// select all panels
// you can get all the index like an array e,g consol.log(panels[0])
const panels = document.querySelectorAll(".panel");

// loop through the panels
// forEach array method, that takes in a function as an argument.
//So you could do a function/arrow function
// pass in inside the bracket whatever you want to use for each interation
// add an event listener to listen for click
// when the click happens run the function
//classLisy gives you a list of the classes
// add is a method that allows you to add a class
// remove the class of active on the other panels
// add active the panel clicked  it will expand.

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

// function to remove all the active classes
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
