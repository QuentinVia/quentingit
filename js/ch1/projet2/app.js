// Projet-2
// --------
// 1. Evènement "click" sur 1 des 3 btns
// 2. Apparaître la valeur du btn cliqué
// 3. Ordinateur choisit aléatoirement un choix
// 4. Compare les 2 valeurs (joueur - PC)
// 5. Affiche le résultat

// -----------------------------------------------

// Pour ce projet nous allons avoir besoin de:
// querySelector() & querySelectorAll
// foreach()
// e.target.id ou value
// Math
// innerText / textContent


// Variables

const choixJoueurId = document.querySelector("#joueur-choix");
const choixPcId = document.querySelector("#pc-choix");
const resultat = document.querySelector("#resultat");
const choixBtn = document.querySelectorAll(".btn");
let choixPc;
let choixJoueur;
let resul;
const winner = document.querySelector("#win");
const loser = document.querySelector("#lose");
let win;
let lose;

   let nam = prompt("Entrez votre nom!");

       surname.textContent = nam;
       surname = alert(`Bienvenue ${nam}`);

   
choixBtn.forEach( choix => choix.addEventListener("click", (e) =>{

        choixJoueur = e.target.value;
        choixJoueurId.textContent = choixJoueur;
        choixOrdinateur();
        getResultat();
}));

function choixOrdinateur() {
    
    const random = Math.ceil(Math.random() * choixBtn.length)
    // console.log(random);

    if (random === 1) {
        choixPc = "Pierre"
    }

    if (random === 2) {
        choixPc = "Feuille"
    }

    if (random === 3) {
        choixPc = "Ciseaux"
    }


    choixPcId.textContent = choixPc;

}

function getResultat() {

    choixJoueur === choixPc ? resul = 'égalité' :'';
    
    choixJoueur === "Pierre" && choixPc === "Ciseaux" ? resul = 'Gagné!' : '';
    choixJoueur === "Feuille" && choixPc === "Pierre" ? resul = 'Gagné!' : '';
    choixJoueur === "Ciseaux" && choixPc === "Feuille" ? resul = 'Gagné!' : '';

    choixJoueur === "Pierre" && choixPc === "Feuille" ? resul = 'Perdu' : '';
    choixJoueur === "Feuille" && choixPc === "Ciseaux" ? resul = 'Perdu' : '';
    choixJoueur === "Ciseaux" && choixPc === "Pierre" ? resul = 'Perdu' : '';

    resultat.textContent = resul;
 }    

// function calcul(){

//     for (let i = 0; i < 3; i++) {
        
//     choixJoueur === "Pierre" && choixPc === "Ciseaux" ? winner = winner + i : '';
//     choixJoueur === "Feuille" && choixPc === "Pierre" ? winner = winner + 1 : '';
//     choixJoueur === "Ciseaux" && choixPc === "Feuille" ? winner = winner + 1 : '';

//     choixJoueur === "Pierre" && choixPc === "Feuille" ? loser = loser + i : '';
//     choixJoueur === "Feuille" && choixPc === "Ciseaux" ? loser = loser + 1 : '';
//     choixJoueur === "Ciseaux" && choixPc === "Pierre" ? loser = loser + 1 : '';

//     win.textContent = winner;
//     lose.textContent = loser;
// }

// }

calcul();

