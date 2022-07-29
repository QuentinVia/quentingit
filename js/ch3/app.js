// JavaScript - Asynchrone
// -----------------------

// Test système synchrone

// On peut voir que les instruction sont exécutées dans l'ordre
// console.log("1 - J'aime Bootstrap");
// console.log("2 - J'aime ajouter des classes dans le body");
// console.log("3 - Tu as oublié un ; ");

// // Test asynchrone

// console.log("1 - Je n'aime pas Bootstrap");

// setTimeout(() => {

//     console.log("2 - Je n'aime pas les classes dans le body");
// }, 3000);

// console.log("3 - Tu n'as pas oublié de ;");

// -----------------------
// Exemple - Pizza
// -----------------------

// REMEMBER

// #1 – Recevoir une commande 2s
// #2 – Sélectionner la pâte 2s
// #3 - Sélectionner la base 1s
// #4 - Sélectionner les ingrédients 1s
// #5 – J'ajoute le fromage 1s
// #6 – Mettre la pizza au four 4s 
// #7 – Délivrer la commander 2s


let stocks = {

    pates : ["classique", "fine", "epaisse"],
    base: ["tomate", "creme"],
    ingredients: ["4 fromages", "chorizo", "raclette"],
    fromage: ["mozarella", "emmental", "chevre"]

};

// // let order = (pate_name, call_production) => {

    

// //     setTimeout( () =>{

// //         console.log(`La pate ${stocks.pates[pate_name]} a bien été séléctionnée`);
        
// //         call_production();

// //     },2000)
// // };

// // let production = () =>{

// //     console.log("La préparation de la pizza est en cours");
// //         setTimeout(() => {
// //             console.log("La base à bien été sélectiononné");
// //             setTimeout(() => {
// //                 console.log("Les ingrédients ont bien été ajouté à la pizza");
// //                 setTimeout(() => {
// //                     console.log("Le fromage à bien été parsemé sur la pizza");
// //                     setTimeout(() => {
// //                         console.log("La pizza est actuellement dans le four");
// //                         setTimeout(() => {
// //                             console.log("Voici votre pizza!");
// //                         }, 2000);
// //                     }, 4000);
// //                 }, 1000);
// //             }, 1000);
// //         }, 1000);
// // };

// // order(0,production);


// // -----------------------
// // Promises // Promesse
// // -----------------------


// let isOpen = true;

// let order = (time, work) =>{

//     return new Promise( (resolve, reject) =>{

//         isOpen ? setTimeout(() => { resolve( work() ) }, time) : reject(console.log("Désolé notre pizzeria est fermée"));
//     })
// }

// order(2000, () => console.log(`La pate a bien été séléctionnée`))

// .then( () => {
//     return order(0000, () => console.log(`La préparation est en cours`))
// })

// .then( () => {
//     return order(1000, () => console.log(`La base de votre pizza a été sélectionner`))
// })

// .then( () => {
//     return order(1000, () => console.log(`Les ingrédients ont été pris`))
// })

// .then( () => {
//     return order(1000, () => console.log(`Le fromage a bien été pasemé sur votre pizza`))
// })

// .then( () => {
//     return order(4000, () => console.log(`La pizza est dans le four`))
// })

// .then( () => {
//     return order(2000, () => console.log(`Voici votre pizza!`))
// })

// .catch( () =>{
//     return console.log("Le client vient de quitter notre pizzeria");
// })

// // .catch( (err) =>{
// //     return console.log("Le client vient de quitter notre pizzeria" + err);
// // }) // permet de récupérer les erreurs

// .finally( () =>{
//     return console.log("La journée est términée!");
// })


// -----------------------
// Async-Await
// -----------------------


// Avant

// let order = () =>{

//     return new Promise( (resolve, reject) =>{


//     })
// }

// Maintenant avec async/await

// async function order() {
    
// }


// Ancienne méthode

// function kitchen() {
    

// return new Promise( (resolve, reject)  => {
    
//     true ? resolve("La promesse est complétée") : reject("voici une erreur");
// })

// }
// kitchen()

// .then() // prohaine étape
// .then() // prochaine étape
// .catch() // l'erreur est affiché ici
// .finally() // fin de la promise (optionnel / obselete)

// Avec Async / Await

// async function kitchen() {
//     try{
//         // je vais générer un problème
//         await abc;
//     }
//     catch(err){
//         console.log("abc n'existe pas mon ami", err);
//         // console.error(err);
//     }
//     finally{
//         console.log("Fin du programme");
//     }
// }

// kitchen();

// On va créer une petite Promise pour demander quel fromage choisir

function choixFromage(){
    
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            resolve(console.log("Quel fromage voulez vous ahoutez à votre pizza?"))
        }, 2000)
    })
}

// Maintenant nous allons créer une fonction async

// async function kitchen() {
    
//     console.log("1");
//     console.log("2");
//     console.log("3");

//     await choixFromage();

//     console.log("4");
//     console.log("5");
//     console.log("6");

// }

// kitchen();
// console.log("7");
// console.log("8");
// console.log("9");


//

let isOpen = true;

function time(ms) {
    
    return new Promise ( (resolve, reject) =>{

        isOpen ? setTimeout(resolve, ms) : reject(console.log("Le magasin est fermé"))

    })

}

async function kitchen() {
    
    try{
        // Le temps pour réaliser une tâche
        await time(2000)
        console.log(`La pate ${stocks.pates[1]} a été sélectionnée`);
    
        await time(2000)
        console.log(`La base ${stocks.base[0]} a été sélectionnée`);
    
        await time(1000)
        console.log(`Les ingrédients ${stocks.ingredients[2]} a été sélectionnée`);
    
        await time(1000)
        console.log(`Le fromage ${stocks.fromage[2]} a été sélectionnée`);
    }
    catch(err){
        console.log("Commande annulée, le client a quitté notre pizzeria");
    }
    finally{
        console.log("Journée terminée, pizzeria fermée à demain");
    }
}

//trigger = déclencher - déclencheur
kitchen();




