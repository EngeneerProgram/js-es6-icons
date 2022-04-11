/*
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.

*/



//creazione array 
const auto = [
    {
        marca : "fiat",
        modello : "panda",
        alimentazione : "benzina"
    },

    {
        marca : "Opel",
        modello : "astra",
        alimentazione : "Diesel"
    },
    {
        marca : "Mercedes",
        modello : "Classe A",
        alimentazione : "Diesel"
    },
    {
        marca : "Chevrolet",
        modello : "Matiz",
        alimentazione : "GPL"
    },
    {
        marca : "Audi",
        modello : "Q5",
        alimentazione : "benzina"
    },
    {
        marca : "Fiat",
        modello : "Multipla",
        alimentazione : "Metano"
    },
    {
        marca : "Ford",
        modello : "Kuga",
        alimentazione : "Diesel"
    },
    {
        marca : "Ford",
        modello : "Mustang",
        alimentazione : "benzina"
    },
    {
        marca : "Nissan",
        modello : "Micra",
        alimentazione : "Diesel"
    },
    {
        marca : "Renoult",
        modello : "CLio",
        alimentazione : "Diesel"
    }
]


// for(let i = 0; i<auto.length; i++){
//     console.log(`marca: ${auto[i].marca} modello : ${auto[i].modello}, alimentazione : ${auto[i].alimentazione}`)
// }


/*

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

// implementazione tramite il metodo filter

//auto benzina
console.log("**** AUTO BENZINA***");
let auto_benzina = auto.filter((auto)=>{
    return (auto.alimentazione == "benzina");
})

for(let i = 0; i<auto_benzina.length; i++){
    console.log(`Le auto a benzina sono le seguenti: ${auto_benzina[i].marca},  ${auto_benzina[i].modello}, ${auto_benzina[i].alimentazione}`);
}

console.log("*** AUTO DIESEL ***")

let auto_diesel = auto.filter((auto)=>{
    return(auto.alimentazione == "Diesel");
})
for(let i = 0; i<auto_diesel.length; i++){
    console.log(`Le auto a diesel sono le seguenti: ${auto_diesel[i].marca},  ${auto_diesel[i].modello}, ${auto_diesel[i].alimentazione}`);
}


console.log("*** AUTO RIMANENTI ***");
let auto_rimanenti = auto.filter((auto)=>{
    return(auto.alimentazione == "GPL" || auto.alimentazione == "Metano");
})

for(let i = 0; i<auto_rimanenti.length; i++){
    console.log(`Le auto a diesel sono le seguenti: ${auto_rimanenti[i].marca},  ${auto_rimanenti[i].modello}, ${auto_rimanenti[i].alimentazione}`);
}
