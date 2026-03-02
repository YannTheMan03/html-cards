document.getElementById("container").addEventListener("mouseenter", enteredContainer);
document.getElementById("container").addEventListener('mouseleave', leftContainer);

/* testing things
const x = document.querySelector(".container");
function displayCard(){
    x.style.opacity="0";
} */


const cardVariable = document.querySelectorAll(".card");
function enteredContainer(){
    console.log("Entered container");
    cardVariable.forEach( Element => Element.style.opacity="1");
    //cardVariable.forEach(displayCard);
}
function leftContainer(){
    console.log("Left container");
    cardVariable.forEach(card => card.style.opacity="0");
}
