let numberOfDrumButtons = document.querySelectorAll(".drum");

 numberOfDrumButtons.forEach(drumButtons => {
    /* Listening for a click event on the drum buttons and then calling the makeSound function with the
  innerHTML of the button that was clicked. */
  drumButtons.addEventListener("click", () => {

      let buttonInnerHTML = drumButtons.innerHTML;

      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
  })
 })

/* Listening for a keydown event and then calling the makeSound function with the key that was
 pressed. */
 document.addEventListener("keydown", event => {
    makeSound(event.key);
    buttonAnimation(event.key);
 })


/**
  * When a key is pressed, the function will check which key was pressed and play the corresponding
  * sound.
  * @param key - the key that was pressed
*/
 function makeSound(key) {

      switch (key) {
          case "w":
              let tom1 = new Audio("sounds/tom-1.mp3");
              tom1.play();
              break;
            
          case "a":
              let tom2 = new Audio("sounds/tom-2.mp3");
              tom2.play();
              break;
            
          case "s":
              let tom3 = new Audio("sounds/tom-3.mp3");
              tom3.play();
              break;
                
          case "d":
              let tom4 = new Audio("sounds/tom-4.mp3");
              tom4.play();
              break;
                
          case "j":
              let snare = new Audio("sounds/snare.mp3");
              snare.play();
              break;    
                
          case "k":
              let crash = new Audio("sounds/crash.mp3");
              crash.play();
              break;
                
          case "l":
              let kickBass = new Audio("sounds/kick-bass.mp3");
              kickBass.play();
              break;

          default:
              console.log(key);
      }
 }

 function buttonAnimation(currentKey) {
    
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

 }