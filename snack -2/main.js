/*
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

*/
//creazine array
const parole = ["GIOVANNI", "LUCA", "MIRKO", "OSSO", "PADELLA"];
console.log(parole)
const parole_minuscole = [];
//conversione in minuscolo
for(let i = 0; i<parole.length; i++){
   //console.log(parole[i].toLowerCase());
   parole_minuscole.push(parole[i].toLowerCase());
   parole_minuscole.push(parole[i].charAt(0).toUpperCase().slice(0));
   
}

console.log(parole_minuscole);

for(let i = 0; i<parole_minuscole.length; i++){
    console.log(parole_minuscole[i]);
}


