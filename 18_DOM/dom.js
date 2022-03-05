"use strict";

console.log(`DOM`);

console.log(document);
console.log(typeof document);

console.log(document.body);
console.log(typeof document.body);

let p1 = document.getElementById("p1");
console.log(p1);
console.log(typeof p1);

////////////////////////
let container = document.getElementsByClassName(`container`);
console.log(container);
console.log(typeof container);

for(let i = 0; i < container.length; i++){
    console.log(container[i])
}

// forEach NE RADI!!!
// container.forEach(el => {
//     console.log(el)
// });

// Array.from - se koristi ako hocemo forEach petlju
let contNiz = Array.from(container);
contNiz.forEach(el => {
    console.log(el)
});

/////////////////////////
let paragrafi = document.getElementsByTagName("p");
for(let i = 0; i < paragrafi.length; i++){
    console.log(paragrafi[i]);
}

/////////////////////////
let linkovi = document.getElementsByName("link");
for(let i = 0; i < linkovi.length; i++){
    console.log(linkovi[i]);
}

////////////////////////
p1 = document.querySelector(`#p1`); // vraca samo prvi selector
console.log(p1);

container = document.querySelectorAll(`.container`); // vraca sve selektore
console.log(container);

for (let i = 0; i < container.length; i++) {
    const element = container[i];
    console.log(element);
};

container.forEach(el => {
    console.log(el);
});

paragrafi = document.querySelectorAll(`p`);
console.log(paragrafi);

linkovi = document.querySelectorAll(`[name = "link"]`);
console.log(linkovi);

/////////////////////  VEZBANJE  /////////////////////////////////
// 1 Zadatak - Dohvatiti prvi paragraf na stranici.
// vec smo uradili

// 2 Zadatak - Dohvatiti prvi div tag sa klasom „error“.
// let errDiv = document.querySelector(`.error`);
let errDiv = document.getElementsByClassName(`error`);
for (let i = 0; i < errDiv.length; i++) {
    console.log(errDiv[i]);    
}
// ili
console.log(errDiv[0]); // prvi
console.log(errDiv[errDiv.length -1]); // poslednji el

// 3 Zadatak - Dohvatiti poslednji red u tabeli.
let poslReduTabeli = document.querySelector(`table tr:last-child`);
console.log(poslReduTabeli);

// 4 Zadatak - Dohvatiti sve linkove na stranici.
let linkoviNaStranici = document.querySelectorAll(`a`);

for (let i = 0; i < linkoviNaStranici.length; i++) {
    console.log(linkoviNaStranici[i]);    
}
// console.log(linkoviNaStranici);

// ili primer 2
let link2 = document.links;
console.log(link2);

// ili primer 3
let link3 = document.querySelectorAll(`[href]`);
console.log(link3);

// 5 Zadatak - Dohvatiti sve slike na stranici.
let slikeNaStr = document.querySelectorAll(`img`);
let slike = Array.from(slikeNaStr);

slike.forEach(element => {
    console.log(element);
});
// console.log(slikeNaStr);

// primer 2
let sl2 = document.images;
console.log(sl2);

// primer 3
let sl3 = document.querySelectorAll(`img[src]`);
console.log(sl3);


// 6 Zadatak - Sve elemente ispisati u konzoli.
let sviElementi = document.body;
console.log(sviElementi);