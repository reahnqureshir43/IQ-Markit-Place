// Search Product

const searchBtn = document.querySelector(".tap");
const searchInput = document.querySelector("#search");
const cards = document.querySelectorAll(".card");

function searchProduct() {

    let value = searchInput.value.toLowerCase();

    cards.forEach(function(card){

        let title = card.querySelector(".card-title").innerText.toLowerCase();

        if(title.includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

}

// Search button click
searchBtn.addEventListener("click", searchProduct);

// Search while typing
searchInput.addEventListener("keyup", searchProduct);
