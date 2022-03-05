import Auto from "./auto.js";

let a1 = new Auto(`Citroen C4`, `crna`, false); 
// isto sto i: let a1 = Auto.constructor(); - samo sto se ovako nikada NEPISE
// a1.marka (vrednost ovog polja je "Citroen C4")
// a1.boja (vrednost ovog polja je "crna")
// a1.imaKrov (vrednost ovog polja je false)

console.log(a1); // Auto objekat
console.log(typeof a1); // objekat  - klase Auto

let a2 = new Auto(`Skoda Octavia`, `plava`, true, 4);
console.log(a2);
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);

// Primer 2 - OBRATITI PAZNJU ZA NAZIVE POLJA(properties) jer lako moze da se pogresi i da se doda novo polje greskom
// let a3 = new Auto();
// a3._marka = `Fiat Punto`;
// a3._boja = `bela`;
// a3._imaKrov = false;
// a3._brojVrata = 5;

// console.log(a3);
// a3.brojVrata = 5; // dodavanje NOVOG polja
// console.log(a3);

let a4 = new Auto("    Audi A4", undefined, true);
console.log(a4);

////////////////////////////////////// dodavanje metoda
a1.sviraj();
a2.sviraj();
// a3.sviraj();

a1.vozi(50);
a4.vozi(200);


// U klasi pisemo polja i metode
// Sva polja klase se definisu u constructor
// Mozemo dodavati proizvoljne metode
// Svi objekti klase imace polja i metode navedene u klasi

a1._brojVrata = 4; // Poljima se pristupa bez zagrada
a1.sviraj(); // Metode imaju zagrade, a izmedju zagrada se navode parametri
a1.marka = "    Audi A4"; // seter marka
//a1.postaviMarku("    Audi A4");
console.log(a1);
console.log(a1.marka); // geter marka

let a5 = new Auto("   Audi A4", "plava", false, 3);
console.log(a5);

a2.stampaj();