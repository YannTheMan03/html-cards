document.getElementById("container").addEventListener("mouseenter", enteredContainer);
document.getElementById("container").addEventListener('mouseleave', leftContainer);
const cardVariable = document.querySelectorAll(".card");
function enteredContainer(){
    console.log("Entered container");
    cardVariable.forEach( card => card.style.opacity="1");
}
function leftContainer(){
    console.log("Left container");
    cardVariable.forEach(card => card.style.opacity="0");
}
