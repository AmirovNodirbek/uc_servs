function showNewCard() {
    let card = document.getElementById("newCard");
    if (card.style.display === "none" || card.style.display === "") {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
}


function handleSelectChange(select) {
    console.log("Selected value:", select.value);
}