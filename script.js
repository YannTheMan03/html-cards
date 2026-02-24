const button = document.querySelector("#nameButton");
const cards = document.getElementsByClassName("card");

button.addEventListener('click', () => {
    for (let card of cards){
        card.classList.toggle("hidden");
    }
});