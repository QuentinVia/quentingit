
let pourcent = [.6, .5, .4]
let prix = 15
let age = prompt("quel age as-tu?")

    if (age >= 0 && age <= 12) {
        console.log(`le prix de base est de ${prix} tu as une reduction de ${prix * pourcent[0]}`);
    }

    else if (age > 12 && age <= 18) {
        console.log(`le prix de base est de ${prix} tu as une reduction de ${prix * pourcent[1]}`);
    }

    else if (age > 18 && age <= 26) {
        console.log(`le prix de base est de ${prix} Tu as une reduction de ${prix * pourcent[2]}`);
    }

    else{
        console.log(`tu as le tarif normal de ${prix}`);
    }
