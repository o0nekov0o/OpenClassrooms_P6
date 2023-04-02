const img = document.getElementById('img');
for(let i = 0; i < 28; i++){
    let id = "img_" + i
    window[id] = document.getElementById(id)
}
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close")

function montrer_spoiler(value){
    var actual=document.getElementById(value).style.visibility;
    if (actual=='visible') {
        document.getElementById(value).style.visibility='hidden';
    }
    else {
        document.getElementById(value).style.visibility='visible';
    }
}

function handleClick(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_info)
}
function handleClick_0(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_info)
}
function handleClick_1(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_1_info)
}
function handleClick_2(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_2_info)
}
function handleClick_3(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_3_info)
}
function handleClick_4(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_4_info)
}
function handleClick_5(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_5_info)
}
function handleClick_6(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_6_info)
}
function handleClick_7(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_7_info)
}
function handleClick_8(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_8_info)
}
function handleClick_9(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_9_info)
}
function handleClick_10(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_10_info)
}
function handleClick_11(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_11_info)
}
function handleClick_12(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_12_info)
}
function handleClick_13(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_13_info)
}
function handleClick_14(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_14_info)
}
function handleClick_15(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_15_info)
}
function handleClick_16(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_16_info)
}
function handleClick_17(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_17_info)
}
function handleClick_18(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_18_info)
}
function handleClick_19(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_19_info)
}
function handleClick_20(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_20_info)
}
function handleClick_21(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_21_info)
}
function handleClick_22(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_22_info)
}
function handleClick_23(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_23_info)
}
function handleClick_24(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_24_info)
}
function handleClick_25(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_25_info)
}
function handleClick_26(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_26_info)
}
function handleClick_27(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  displayPopup(img_27_info)
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
            img.addEventListener('click', handleClick);
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
function fetchBestMoviesTop(bestmoviestop_pagenumber){
    projectapi_pagenumber = bestmoviestop_pagenumber+1
    fetch("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score&page="+ projectapi_pagenumber +"")
    //.then(res => console.log(res))
    //.then(res => res.json()) //command_1
    //.then(data => console.log(data))
    //.then(data => img.src = data.results[0].image_url) //command_2
    .then(res => {
        console.log(res);
        if(res.ok){
        res.json().then(data => {
            img_0.src = data.results[0].image_url
            img_1.src = data.results[1].image_url
            img_2.src = data.results[2].image_url
            img_3.src = data.results[3].image_url
            img_4.src = data.results[4].image_url
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[0].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[1].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_1_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[2].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_2_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[3].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_3_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[4].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_4_info = data })
                }
            })
            img_0.addEventListener('click', handleClick);
            img_1.addEventListener('click', handleClick_1);
            img_2.addEventListener('click', handleClick_2);
            img_3.addEventListener('click', handleClick_3);
            img_4.addEventListener('click', handleClick_4);
        })
        } else {
            console.log("ERREUR");
            document.getElementById('erreur').innerHTML = "Erreur :("
        }
    })
    fetch("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score&page="+ (projectapi_pagenumber+1) +"")
    .then(res => {
        console.log(res);
        if(res.ok){
        res.json().then(data => {
            img_5.src = data.results[0].image_url
            img_6.src = data.results[1].image_url
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[0].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_5_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[1].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_6_info = data })
                }
            })
            img_5.addEventListener('click', handleClick_5);
            img_6.addEventListener('click', handleClick_6);
        })
        } else {
            console.log("ERREUR");
            document.getElementById('erreur').innerHTML = "Erreur :("
        }
    })
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
function fetchBestMoviesHorror(bestmovieshorror_pagenumber){
    projectapi_pagenumber = bestmovieshorror_pagenumber+1
    fetch("http://127.0.0.1:8000/api/v1/titles/?genre=horror&sort_by=-imdb_score&page="+ projectapi_pagenumber +"")
    //.then(res => console.log(res))
    //.then(res => res.json()) //command_1
    //.then(data => console.log(data))
    //.then(data => img.src = data.results[0].image_url) //command_2
    .then(res => {
        console.log(res);
        if(res.ok){
        res.json().then(data => {
            img_7.src = data.results[0].image_url
            img_8.src = data.results[1].image_url
            img_9.src = data.results[2].image_url
            img_10.src = data.results[3].image_url
            img_11.src = data.results[4].image_url
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[0].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_7_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[1].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_8_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[2].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_9_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[3].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_10_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[4].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_11_info = data })
                }
            })
            img_7.addEventListener('click', handleClick_7);
            img_8.addEventListener('click', handleClick_8);
            img_9.addEventListener('click', handleClick_9);
            img_10.addEventListener('click', handleClick_10);
            img_11.addEventListener('click', handleClick_11);
        })
        } else {
            console.log("ERREUR");
            document.getElementById('erreur').innerHTML = "Erreur :("
        }
    })
    fetch("http://127.0.0.1:8000/api/v1/titles/?genre=horror&sort_by=-imdb_score&page="+ (projectapi_pagenumber+1) +"")
    .then(res => {
        console.log(res);
        if(res.ok){
        res.json().then(data => {
            img_12.src = data.results[0].image_url
            img_13.src = data.results[1].image_url
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[0].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_12_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[1].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_13_info = data })
                }
            })
            img_12.addEventListener('click', handleClick_12);
            img_13.addEventListener('click', handleClick_13);
        })
        } else {
            console.log("ERREUR");
            document.getElementById('erreur').innerHTML = "Erreur :("
        }
    })
}

const bestmoviescomedy_nextbutton = document.getElementById('bestmoviescomedy_nextbutton');
const bestmoviescomedy_previousbutton = document.getElementById('bestmoviescomedy_previousbutton');
var bestmoviescomedy_pagenumber = 0
fetchBestMoviescomedy(bestmoviescomedy_pagenumber);
bestmoviescomedy_nextbutton.addEventListener('click', function() {
    bestmoviescomedy_pagenumber += 1;
    fetchBestMoviescomedy(bestmoviescomedy_pagenumber);
});
bestmoviescomedy_previousbutton.addEventListener('click', function() {
    if (bestmoviescomedy_pagenumber > 0) {
        bestmoviescomedy_pagenumber -= 1;
        fetchBestMoviescomedy(bestmoviescomedy_pagenumber);
    }
});
function fetchBestMoviescomedy(bestmoviescomedy_pagenumber){
    projectapi_pagenumber = bestmoviescomedy_pagenumber+1
    fetch("http://127.0.0.1:8000/api/v1/titles/?genre=comedy&sort_by=-imdb_score&page="+ projectapi_pagenumber +"")
    //.then(res => console.log(res))
    //.then(res => res.json()) //command_1
    //.then(data => console.log(data))
    //.then(data => img.src = data.results[0].image_url) //command_2
    .then(res => {
        console.log(res);
        if(res.ok){
        res.json().then(data => {
            img_14.src = data.results[0].image_url
            img_15.src = data.results[1].image_url
            img_16.src = data.results[2].image_url
            img_17.src = data.results[3].image_url
            img_18.src = data.results[4].image_url
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[0].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_14_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[1].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_15_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[2].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_16_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[3].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_17_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[4].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_18_info = data })
                }
            })
            img_14.addEventListener('click', handleClick_14);
            img_15.addEventListener('click', handleClick_15);
            img_16.addEventListener('click', handleClick_16);
            img_17.addEventListener('click', handleClick_17);
            img_18.addEventListener('click', handleClick_18);
        })
        } else {
            console.log("ERREUR");
            document.getElementById('erreur').innerHTML = "Erreur :("
        }
    })
    fetch("http://127.0.0.1:8000/api/v1/titles/?genre=comedy&sort_by=-imdb_score&page="+ (projectapi_pagenumber+1) +"")
    .then(res => {
        console.log(res);
        if(res.ok){
        res.json().then(data => {
            img_19.src = data.results[0].image_url
            img_20.src = data.results[1].image_url
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[0].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_19_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[1].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_20_info = data })
                }
            })
            img_19.addEventListener('click', handleClick_19);
            img_20.addEventListener('click', handleClick_20);
        })
        } else {
            console.log("ERREUR");
            document.getElementById('erreur').innerHTML = "Erreur :("
        }
    })
}

const bestmoviesaction_nextbutton = document.getElementById('bestmoviesaction_nextbutton');
const bestmoviesaction_previousbutton = document.getElementById('bestmoviesaction_previousbutton');
var bestmoviesaction_pagenumber = 0
fetchBestMoviesaction(bestmoviesaction_pagenumber);
bestmoviesaction_nextbutton.addEventListener('click', function() {
    bestmoviesaction_pagenumber += 1;
    fetchBestMoviesaction(bestmoviesaction_pagenumber);
});
bestmoviesaction_previousbutton.addEventListener('click', function() {
    if (bestmoviesaction_pagenumber > 0) {
        bestmoviesaction_pagenumber -= 1;
        fetchBestMoviesaction(bestmoviesaction_pagenumber);
    }
});
function fetchBestMoviesaction(bestmoviesaction_pagenumber){
    projectapi_pagenumber = bestmoviesaction_pagenumber+1
    fetch("http://127.0.0.1:8000/api/v1/titles/?genre=action&sort_by=-imdb_score&page="+ projectapi_pagenumber +"")
    //.then(res => console.log(res))
    //.then(res => res.json()) //command_1
    //.then(data => console.log(data))
    //.then(data => img.src = data.results[0].image_url) //command_2
    .then(res => {
        console.log(res);
        if(res.ok){
        res.json().then(data => {
            img_21.src = data.results[0].image_url
            img_22.src = data.results[1].image_url
            img_23.src = data.results[2].image_url
            img_24.src = data.results[3].image_url
            img_25.src = data.results[4].image_url
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[0].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_21_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[1].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_22_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[2].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_23_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[3].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_24_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[4].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_25_info = data })
                }
            })
            img_21.addEventListener('click', handleClick_21);
            img_22.addEventListener('click', handleClick_22);
            img_23.addEventListener('click', handleClick_23);
            img_24.addEventListener('click', handleClick_24);
            img_25.addEventListener('click', handleClick_25);
        })
        } else {
            console.log("ERREUR");
            document.getElementById('erreur').innerHTML = "Erreur :("
        }
    })
    fetch("http://127.0.0.1:8000/api/v1/titles/?genre=action&sort_by=-imdb_score&page="+ (projectapi_pagenumber+1) +"")
    .then(res => {
        console.log(res);
        if(res.ok){
        res.json().then(data => {
            img_26.src = data.results[0].image_url
            img_27.src = data.results[1].image_url
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[0].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_26_info = data })
                }
            })
            fetch("http://127.0.0.1:8000/api/v1/titles/" + data.results[1].id + "")
            .then(res => {
                console.log(res);
                if(res.ok){
                res.json().then(data => {
                    img_27_info = data })
                }
            })
            img_26.addEventListener('click', handleClick_26);
            img_27.addEventListener('click', handleClick_27);
        })
        } else {
            console.log("ERREUR");
            document.getElementById('erreur').innerHTML = "Erreur :("
        }
    })
}