/*
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

*/

const people = [
    {
        nome : "Giovanni",
        cognome : "Raffo",
        età : 12
    },

    {
        nome : "Giuseppe",
        cognome : "Intanno",
        età : 19
    },

    {
        nome : "Rosario",
        cognome : "Garufi",
        età : 27
    },

    {
        nome : "Marta",
        cognome : "Barrera",
        età : 26
    },

    {
        nome : "Enzo",
        cognome : "Cutrera",
        età : 60
    },

    {
        nome : "Vincenza",
        cognome : "Nobile",
        età : 64
    },

    {
        nome : "Lorenzo",
        cognome : "Affini",
        età : 10
    },

    {
        nome : "Vincenzo",
        cognome : "Dicaro",
        età : 16
    },

    {
        nome : "Ettore",
        cognome : "Licata",
        età : 45
    },

    {
        nome : "Remo",
        cognome : "Alfio",
        età : 18
    },

    {
        nome : "Claudio",
        cognome : "Scorfani",
        età : 38
    },

    {
        nome : "Guglielmo",
        cognome : "Marconi",
        età : 70
    },


]

console.log(people);

let patentati = [];

for(let i = 0; i<people.length; i++){
    //console.log(people[i].nome, people[i].cognome, people[i].età);
    if(people [i].età > 18){
        patentati.push(people[i].nome, people[i].cognome,"puoi guidare");
        console.log(`${people[i].nome}, ${people[i].cognome}, ${people[i].età}, puoi guidare`)
    }else{
        //console.log(`${people[i].nome}, ${people[i].cognome}, ${people[i].età}, non può guidare in quanto non maggiorenne`);
        patentati.push(people[i].nome , people[i].cognome, "non può guidare");
        
    }
}


console.log("**** patentati ****");
for(let i = 0; i<patentati.length; i++){
    console.log(patentati[i]);
    
    
    
}


