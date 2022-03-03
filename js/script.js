const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
    try {
        const response = await fetch(corsFix);

        const results = await response.json();

        console.log(results);

    
    for(let i = 0; i < results.length; i++) {

        const teamName = results[i].teamName
        const city = results[i].location

        

        if(i === 15) {
            break
        }

        if (teamName.startsWith("c") || teamName.startsWith("C")) {
            continue;
        }

        // or we can make it lowercase

        //if(teamName.toLowerCase().startsWith("c")) {
        //    continue;
        //}

        

     

        resultsContainer.innerHTML += `<div class="card">
                                                <h4>${teamName}</h4>
                                                <p>${city}</p>
                                                
                                           </div>
                                            `

    }


    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
}

makeApiCall();
