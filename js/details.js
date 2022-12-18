const detailContainer = document.querySelector(".product_info");

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
                                    <h1>${details.name}</h1>
                                    <div class="details-image" 
                                        style="background-image: url('${details.background_image}')"></div>
                                    <div class="details-description">${details.description}</div>
                                    <time class="details-date">Released: ${details.released}</time>
                                    <div class="game-cta">
                                            <a href="checkout.html?id=${details.id}" class="cta">Add to cart</a>
                                    </div> 
                                </div>`;
}