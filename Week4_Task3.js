/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
const optionsHeading = document.querySelector("#options > h2");
const sides = document.querySelector(".sides");

optionsHeading.addEventListener("click", function () {
    sides.classList.toggle("hidden");
});
/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
// 1. Select the fill inputs (adjust the selector to match your HTML)
const fillInputs = document.querySelectorAll("#options input[type='color']");

//loop
fillInputs.forEach((input, i) => {
  
  input.value = players[i].fill;

  input.nextElementSibling.innerHTML = players[i].fill;

  // Add an "input" 
  input.addEventListener("input", (e) => {
    const hex = e.target.value;        

    players[i].fill = hex;             
    pads[i].fill = hex;               
    e.target.nextElementSibling.innerHTML = hex;  
  });
});
/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
const keyNames = ["u", "d", "s"]; // match whatever data-key values your HTML uses

keyNames.forEach((k) => {
  const keyInputs = document.querySelectorAll(`#options input[data-key="${k}"]`);

  keyInputs.forEach((input, i) => {
    input.value = players[i].keys[k];
    input.nextElementSibling.innerHTML = players[i].keys[k];

    input.addEventListener("keydown", (e) => {
      e.preventDefault();
      input.value = e.key;
      players[i].keys[k] = e.key;
      e.target.nextElementSibling.innerHTML = e.key;
    });

    input.addEventListener("focus", () => {
      state = "pause";
    });
  });
});
