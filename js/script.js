const container = document.querySelector(".featured_products");


const apiKey = "40471407b5d74cf69d031fdc7819f3b2";


const url = "https://api.rawg.io/api/games?key=40471407b5d74cf69d031fdc7819f3b2";



async function getGames() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);
        console.log(json.results);

        container.innerHTML = "";

        const games = json.results;

        games.forEach(function(displayGame) {
            container.innerHTML += `<div class="card" class="details">
                                        <h4 class="name">${displayGame.name}</h4>
                                        <div class="image" style="background-image: url(${displayGame.background_image});"></div>
                                        <div class="game-details">
                                            <p><strong>ESRB:</strong> ${displayGame.esrb_rating.name}</p>
                                            <p><strong>Rating:</strong> ${displayGame.rating}</p>
                                        </div>
                                        <div class="game-cta">
                                            <a href="details.html?id=${displayGame.id}" class="cta">Read More</a>
                                        </div> 
                                    </div>`;
        });

    }
    catch (error) {
        console.log(error);
        container.innerHTML = message("error", error);
    }
        
    
}

getGames();