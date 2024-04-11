document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector(".cards");
    const overlay = document.querySelector(".overlay");

    // focus card
    function focusCard() {
        card.classList.add("focused");
        overlay.style.display = "block";
    }

    //unfocus card
    function unfocusCard() {
        card.classList.remove("focused");
        overlay.style.display = "none";
    }

    //card click check

    card.addEventListener("click",function() {
        if (card.classList.contains("focused")) {
            unfocusCard(card);
            } else {
            focusCard(card);
            }
    });
    
    //overlay click check
    overlay.addEventListener("click", function() {
        unfocusCard();
    });



});