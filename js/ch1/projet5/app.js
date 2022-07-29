// Variables

const character = document.querySelector("#character");
const circle = document.querySelector(".circle");
// fetch permet de récupérer les API (REST sur les sites d'API)
let urlAPI = 'https://rickandmortyapi.com/api/character'
let url = document.location.href;
url !== "http://127.0.0.1:5500/TP/TP_HTML_QUENTIN/js/ch1/projet5/index.html" ? urlAPI = 'https://rickandmortyapi.com/api/character?page=2' : "";

const API = fetch (urlAPI)

.then( response => response.json () )
.then( data => {
    // results est dans l'API
    // map créer un tableau de response l'API
    data.results.map(perso => {

        let article = document.createElement('article');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let status = document.createElement('div');
        let location = document.createElement('div');
        let span = document.createElement('span');

        status.setAttribute('id', 'status');
        location.setAttribute('id', 'location');
        img.setAttribute('src', `${perso.image}`);
        article.classList.add('single-character');
        

        character.append(article);
        article.append(img);
        article.append(h3);
        article.append(status);
        article.append(location);
        

        h3.textContent = `${perso.name}`;
        status.textContent = `Statut: ${perso.status} - ${perso.species}`;
        location.textContent = `Localisation : ${perso.location.name}`;
        
        span.classList.add('circle');
        status.append(span);
        
        perso.status === "Alive" ? span.style.background = "green" : "" ;
        perso.status === "Dead" ? span.style.background = "red" : "" ;
        perso.status === "Alive" ? span.style.background = "green" : "" ;
    
    })
} )

.catch(err => console.log(err));








