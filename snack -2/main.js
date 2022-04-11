/*
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

*/
//creazine array
const parole = ["GIOVANNI", "LUCA", "MIRKO", "OSSO", "PADELLA"];
console.log(parole)
const parole_minuscole_iniziale_maiuscola = [];
//conversione in minuscolo
for(let i = 0; i<parole.length; i++){
    console.log(parole[i])
   //console.log(parole[i].toLowerCase());
    let trasforma_parola = parole[i].toLowerCase();

    let iniziale_maiuscola = trasforma_parola[0].toUpperCase(0)+ trasforma_parola.slice(1);

    // console.log(iniziale_maiuscola);
    // console.log(trasforma_parola);
    
    parole_minuscole_iniziale_maiuscola.push(iniziale_maiuscola);
  
   
}



for(let i = 0; i<parole_minuscole_iniziale_maiuscola.length; i++){
    console.log(parole_minuscole_iniziale_maiuscola[i]);
}


