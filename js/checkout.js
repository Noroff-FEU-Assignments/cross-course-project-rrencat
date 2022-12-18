const detailContainer = document.querySelector(".checkout-info");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);




const url = "https://api.rawg.io/api/games/" + id + "?key=40471407b5d74cf69d031fdc7819f3b2";

console.log(url);

async function fetchGame() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);

    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
}

fetchGame();

function createHtml(details) {
    detailContainer.innerHTML = `<div class="game-details">
                                    <div class="details-image" 
                                        style="background-image: url('${details.background_image}')"></div>
                                        <h1>${details.name}</h1>
                                </div>`;
}


const form = document.querySelector(".payment-form");
const yourName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const cardNumber = document.querySelector("#cardnumber");
const cardNumberError = document.querySelector("#cardnumber-error");
const exDate = document.querySelector("#date");
const exDateError = document.querySelector("#date-error");
const code = document.querySelector("#code");
const codeError = document.querySelector("#code-error");
const buttonCheckout = document.querySelector(".checkout-cta");



function validateForm(event) {
    event.preventDefault();

    if (checkLength(yourName.value, 1) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (checkLength(cardNumber.value, 15) === true) {
        cardNumberError.style.display = "none";
    } else {
        cardNumberError.style.display = "block";
    }

    if (checkLength(exDate.value, 3) === true) {
        exDateError.style.display = "none";
    } else {
        exDateError.style.display = "block";
    }

    if (checkLength(code.value, 2) === true) {
        codeError.style.display = "none";
    } else {
        codeError.style.display = "block";
    }

    console.log("Validated!");

}


form.addEventListener("submit", validateForm);


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}




