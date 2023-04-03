for(let i = 0; i < 28; i++){
    let id = "img_" + i
    window[id] = document.getElementById(id)
}
const img = document.getElementById('img');


function handleClick(event) {
  spoiler.addEventListener("click", () => {
    spoiler_content.style.display = "none"
  })
  displaySpoiler(img_info)
}
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close")

for(let i = 0; i < 28; i++){
    let handle = "handleClick_" + i
    let img = "img_" + i + "_info"
    window[handle] = function handle(event) {
        modal.style.display = "block";
        closeBtn.addEventListener("click", () => {
        modal.style.display = "none"
        })
        displayPopup(window[img])
    }
}
img.addEventListener('click', handleClick_0)

function displaySpoiler(movie_data) {
  document.getElementById('spoiler_content').innerHTML = "<b style=\"background: black; color: white\">Résumé</b> : "
  + movie_data.long_description + ""
}
const error_url = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
function displayPopup(movie_data) {
  document.getElementById('popup').innerHTML = "<div style=\"float: left\"> <img src='"
  + movie_data.image_url + "' onerror=\"this.src='" + error_url + "'\"></div><b style=\"background: black; color: white\">Titre</b> : "
  + movie_data.title + " <b style=\"background: black; color: white\">Genre</b> : "
  + movie_data.genres + " <b style=\"background: black; color: white\">Date</b> : "
  + movie_data.date_published + " <b style=\"background: black; color: white\">Rated</b> : "
  + movie_data.rated + " <b style=\"background: black; color: white\">Score</b> : "
  + movie_data.imdb_score + " <b style=\"background: black; color: white\">Réalisateurs</b> : "
  + movie_data.directors + " <b style=\"background: black; color: white\">Acteurs</b> : "
  + movie_data.actors + " <b style=\"background: black; color: white\">Durée</b> : "
  + movie_data.duration + " <b style=\"background: black; color: white\">Pays</b> : "
  + movie_data.countries + " <b style=\"background: black; color: white\">Revenus</b> : "
  + movie_data.worldwide_gross_income + " <b style=\"background: black; color: white\">Résumé</b> : "
  + movie_data.long_description + ""
}
let elementsArray = document.querySelectorAll("img");
elementsArray.forEach(function(elem) {
    elem.addEventListener("error", function() {
        this.src=error_url;
        this.width='182';
        this.height='268';
    });
});

fetchBestMovie();
function fetchBestMovie() {
    fetch("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score&page=1")
    //.then(res => console.log(res))
    //.then(res => res.json()) //command_1
    //.then(data => console.log(data))
    //.then(data => img.src = data.results[0].image_url) //command_2
    .then(res => {
        console.log(res);
        if(res.ok){
        res.json().then(data => {
            img.src = data.results[0].image_url
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[0].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_info = data })
                }
            })
            spoiler.addEventListener('click', handleClick);
        })
        } else {
            console.log("ERREUR");
            document.getElementById('erreur').innerHTML = "Erreur :("
        }
    })
}

const bestmoviestop_nextbutton = document.getElementById('bestmoviestop_nextbutton');
const bestmoviestop_previousbutton = document.getElementById('bestmoviestop_previousbutton');
var bestmoviestop_pagenumber = 0
fetchBestMoviesTop(bestmoviestop_pagenumber);
bestmoviestop_nextbutton.addEventListener('click', function() {
    bestmoviestop_pagenumber += 1;
    fetchBestMoviesTop(bestmoviestop_pagenumber);
});
bestmoviestop_previousbutton.addEventListener('click', function() {
    if (bestmoviestop_pagenumber > 0) {
        bestmoviestop_pagenumber -= 1;
        fetchBestMoviesTop(bestmoviestop_pagenumber);
    }
});
async function fetchBestMoviesTop(bestmoviestop_pagenumber){
    topmovies = []
    number = bestmoviestop_pagenumber*7
    projectapi_pagenumber = Math.floor(number/5)
    offset = number%5
    for(let i = 0; i < 3; i++){
        await fetch("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score&page="+ (projectapi_pagenumber+i+1) +"")
        .then(res => {
            console.log(res);
            if(res.ok){
            res.json().then(data => {
                topmovies = topmovies.concat(data.results)
                for(let i = 0; i < 7; i++){
                    let id = "img_" + i
                    let handle = "handleClick_" + i
                    window[id].addEventListener('click', window[handle])
                }
            })
            } else {
                console.log("ERREUR");
                document.getElementById('erreur').innerHTML = "Erreur :("
            }
        })
    }
    console.log(topmovies)
    for(let i = 0; i < 7; i++){
        let id = "img_" + i
        window[id].src = topmovies[offset+i].image_url
    }
    for(let i = 0; i < 7; i++){
        let id = "img_" + i + "_info"
        fetch("http://127.0.0.1:8000/api/v1/titles/" + topmovies[offset+i].id + "").then(res => res.json()).then(data => {
            window[id] = data
        })
    }
}

const bestmovieshorror_nextbutton = document.getElementById('bestmovieshorror_nextbutton');
const bestmovieshorror_previousbutton = document.getElementById('bestmovieshorror_previousbutton');
var bestmovieshorror_pagenumber = 0
fetchBestMoviesHorror(bestmovieshorror_pagenumber);
bestmovieshorror_nextbutton.addEventListener('click', function() {
    bestmovieshorror_pagenumber += 1;
    fetchBestMoviesHorror(bestmovieshorror_pagenumber);
});
bestmovieshorror_previousbutton.addEventListener('click', function() {
    if (bestmovieshorror_pagenumber > 0) {
        bestmovieshorror_pagenumber -= 1;
        fetchBestMoviesHorror(bestmovieshorror_pagenumber);
    }
});
async function fetchBestMoviesHorror(bestmovieshorror_pagenumber){
    horrormovies = []
    number = bestmovieshorror_pagenumber*7
    projectapi_pagenumber = Math.floor(number/5)
    offset = number%5
    for(let i = 0; i < 3; i++){
        await fetch("http://127.0.0.1:8000/api/v1/titles/?genre=horror&sort_by=-imdb_score&page="+ (projectapi_pagenumber+i+1) +"")
        .then(res => {
            console.log(res);
            if(res.ok){
            res.json().then(data => {
                horrormovies = horrormovies.concat(data.results)
                for(let i = 7; i < 14; i++){
                    let id = "img_" + i
                    let handle = "handleClick_" + i
                    window[id].addEventListener('click', window[handle])
                }
            })
            } else {
                console.log("ERREUR");
                document.getElementById('erreur').innerHTML = "Erreur :("
            }
        })
    }
    console.log(horrormovies)
    for(let i = 7; i < 14; i++){
        let id = "img_" + i
        window[id].src = horrormovies[offset+i-7].image_url
    }
    for(let i = 7; i < 14; i++){
        let id = "img_" + i + "_info"
        fetch("http://127.0.0.1:8000/api/v1/titles/" + horrormovies[offset+i-7].id + "").then(res => res.json()).then(data => {
            window[id] = data
        })
    }
}

const bestmoviescomedy_nextbutton = document.getElementById('bestmoviescomedy_nextbutton');
const bestmoviescomedy_previousbutton = document.getElementById('bestmoviescomedy_previousbutton');
var bestmoviescomedy_pagenumber = 0
fetchBestMoviesComedy(bestmoviescomedy_pagenumber);
bestmoviescomedy_nextbutton.addEventListener('click', function() {
    bestmoviescomedy_pagenumber += 1;
    fetchBestMoviesComedy(bestmoviescomedy_pagenumber);
});
bestmoviescomedy_previousbutton.addEventListener('click', function() {
    if (bestmoviescomedy_pagenumber > 0) {
        bestmoviescomedy_pagenumber -= 1;
        fetchBestMoviesComedy(bestmoviescomedy_pagenumber);
    }
});
async function fetchBestMoviesComedy(bestmoviescomedy_pagenumber){
    comedymovies = []
    number = bestmoviescomedy_pagenumber*7
    projectapi_pagenumber = Math.floor(number/5)
    offset = number%5
    for(let i = 0; i < 3; i++){
        await fetch("http://127.0.0.1:8000/api/v1/titles/?genre=comedy&sort_by=-imdb_score&page="+ (projectapi_pagenumber+i+1) +"")
        .then(res => {
            console.log(res);
            if(res.ok){
            res.json().then(data => {
                comedymovies = comedymovies.concat(data.results)
                for(let i = 14; i < 21; i++){
                    let id = "img_" + i
                    let handle = "handleClick_" + i
                    window[id].addEventListener('click', window[handle])
                }
            })
            } else {
                console.log("ERREUR");
                document.getElementById('erreur').innerHTML = "Erreur :("
            }
        })
    }
    console.log(comedymovies)
    for(let i = 14; i < 21; i++){
        let id = "img_" + i
        window[id].src = comedymovies[offset+i-14].image_url
    }
    for(let i = 14; i < 21; i++){
        let id = "img_" + i + "_info"
        fetch("http://127.0.0.1:8000/api/v1/titles/" + comedymovies[offset+i-14].id + "").then(res => res.json()).then(data => {
            window[id] = data
        })
    }
}

const bestmoviesaction_nextbutton = document.getElementById('bestmoviesaction_nextbutton');
const bestmoviesaction_previousbutton = document.getElementById('bestmoviesaction_previousbutton');
var bestmoviesaction_pagenumber = 0
fetchBestMoviesAction(bestmoviesaction_pagenumber);
bestmoviesaction_nextbutton.addEventListener('click', function() {
    bestmoviesaction_pagenumber += 1;
    fetchBestMoviesAction(bestmoviesaction_pagenumber);
});
bestmoviesaction_previousbutton.addEventListener('click', function() {
    if (bestmoviesaction_pagenumber > 0) {
        bestmoviesaction_pagenumber -= 1;
        fetchBestMoviesAction(bestmoviesaction_pagenumber);
    }
});
async function fetchBestMoviesAction(bestmoviesaction_pagenumber){
    actionmovies = []
    number = bestmoviesaction_pagenumber*7
    projectapi_pagenumber = Math.floor(number/5)
    offset = number%5
    for(let i = 0; i < 3; i++){
        await fetch("http://127.0.0.1:8000/api/v1/titles/?genre=action&sort_by=-imdb_score&page="+ (projectapi_pagenumber+i+1) +"")
        .then(res => {
            console.log(res);
            if(res.ok){
            res.json().then(data => {
                actionmovies = actionmovies.concat(data.results)
                for(let i = 21; i < 28; i++){
                    let id = "img_" + i
                    let handle = "handleClick_" + i
                    window[id].addEventListener('click', window[handle])
                }
            })
            } else {
                console.log("ERREUR");
                document.getElementById('erreur').innerHTML = "Erreur :("
            }
        })
    }
    console.log(actionmovies)
    for(let i = 21; i < 28; i++){
        let id = "img_" + i
        window[id].src = actionmovies[offset+i-21].image_url
    }
    for(let i = 21; i < 28; i++){
        let id = "img_" + i + "_info"
        fetch("http://127.0.0.1:8000/api/v1/titles/" + actionmovies[offset+i-21].id + "").then(res => res.json()).then(data => {
            window[id] = data
        })
    }
}
