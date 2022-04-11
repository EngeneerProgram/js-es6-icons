/*
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.

crea un nuovo array con la lista dei mammiferi
*/


//creazione oggetti che rappresentano aniamli

const animals = [
    {
        nome : "leone",
        famiglia : "felidi",
        classe : "mammiferi"
    },

    {
        nome: "cane",
        famiglia : "canidi",
        classe : "mammiferi"
    }, 

    {
        nome : "gallina",
        famiglia : "fasianidi",
        classe : "uccelli"
    }, 

    {
        nome : "pappagallo",
        famiglia : "fasianidi",
        classe : "uccelli"
    }
];

for(let i = 0; i<animals.length; i++){
    console.log(animals[i]);
}


//crea un nuovo array con la lista dei mammiferi

let mammiferi = animals.filter((animali)=>{
    return (animali.classe == "mammiferi");
})

for(let i = 0; i<mammiferi.length; i++){
    console.log(`Gli animali presenti nella lista che rappresentano i mammiferi sono : ${mammiferi[i].nome}`);
}