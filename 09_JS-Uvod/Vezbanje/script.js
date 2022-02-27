"use strict"; // Strict - mora pravilno da se definisu varijabile

// 1.	Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.

let s = 15; // sati
let m = 21; // minuti

let odPonoci = s * 60 + m;

console.log("Od ponoci je proslo " + odPonoci + " minuta.");

// let doPonoci = 24 * 60 - odPonoci;
// let doPonoci = 24  * 60 - s * 60 - m;
let doPonoci = (24 - s) * 60 - m;

console.log("Do ponoci je ostalo: " + doPonoci + " minuta");

// 2.	Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.

let minOdPonoci = 921; // stavio je 909

//Prvi nacin
// minOdPonoci je broj * 60 i + ostatak : minOdPonoci = ________ * 60 + minSada
// minOdPonoci - minSada = ___ * 60
// (minOdPonoci - minSada) / 60 = _____
let minSada = minOdPonoci % 60;
let satSada = (minOdPonoci - minSada) / 60;

console.log("Sada je " + satSada + ":" + minSada);

//Drugi nacin
// console.log(minOdPonoci / 60); // deljenje vraca realan broj
// console.log(Math.floor(minOdPonoci / 60)); // vraca ceo broj manj ili jednak od rezultata
// console.log(Math.ceil(minOdPonoci / 60)); // vraca ceo broj veci ili jednak od rez
// console.log(Math.round(minOdPonoci / 60)); // vraca ceo broj rezultat zaokruzivanja
let satSada2 = Math.floor(minOdPonoci / 60);
let minSada2 = minOdPonoci % 60;

console.log("Sada je " + satSada2 + ":" + minSada2)

// 3.	Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.

let cenaRobe = 1750;
let novcanica = 2000;

let kusur = novcanica - cenaRobe;
console.log("Kusur koji treba sda se vrati je " + kusur + " dinara.");

// 4.	Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.



// 5.	Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.


// 6.	Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljiva u kojoj je vrednost trenutnog kursa. Odrediti koliko ćemo imati dinara nakon razmene. Uraditi isto i za konverziju iz dinara u evre.

// let posedovanjeEvra = 268;
// let trenutniKurs = 117.58;

// let dinaraNakonRazmere = posedovanjeEvra * trenutniKurs;
// let evraNakonRazmere = dinaraNakonRazmere / trenutniKurs;

// console.log("Trenutno posedujem " + dinaraNakonRazmere + " dinara.");
// console.log("Trenutno posedujem " + evraNakonRazmere + " evra.");

// STEFANOV RESENJE
let novacEvra = 200;
let kursEvri = 117.5782;

let evriUdinaree = novacEvra * kursEvri;
console.log("Imamo " + evriUdinaree + " dinara nakon razmere.");

let novacDinari = 10000;
let dinariUevree = novacDinari / kursEvri;
console.log("Imamo " + dinariUevree + " evra nakon razmere.");

// 7.	Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljive u kojima je vrednost kurseva evro-dinar, kao i dolar-dinar, redom. Odrediti koliko ćemo imati dolara nakon razmene. Uraditi isto i za konverziju iz dolare u evre.

// let evroPosedovanje = 386;

// let evroDinar = 117.58;
// let dolarDinar = 104.5;

// let evroUdinare = evroPosedovanje * evroDinar;
// // console.log(evroUdinare);
// let dinariUdolare = evroUdinare / dolarDinar;
// let dolariNakonRazmene = Math.round(dinariUdolare);

// console.log("Trenutno posedujem " + dolariNakonRazmene + " dolara.");

// // Dolari u Evro
// let dolariUdinare = dolariNakonRazmene * dolarDinar;
// let dinariUevro = dolariUdinare / evroDinar;
// let evroNakonRazmere = Math.round(dinariUevro);

// console.log("Trenutno posedujem " + evroNakonRazmere + " evra.");


// STEFANOVO RESENJE
// let kursDolari = 104.7281;

// let k1 = novacEvra * kursEvri;
// let k2 = k1 / kursDolari;
// console.log("Imamo " + k2 + " dolara nakon razmere.");

// let novacDolari = 200;
// let k3 = novacDolari * kursDolari / kursEvri;
// console.log("Imamo " + k3 + " evra nakon razmere.");


// 8.	Temperatura iz Celzijusa u Farenhajte i obrnuto.


// 9.	Temperatura iz Celzijusa u Kelvine i obrnuto.



// Trenutno vreme i datu,
let datum = new Date(); // datum - objekat koji sadrzi inf. o trenutnom datumu i vremenu

let godina = datum.getFullYear();
let mesec = datum.getMonth() + 1;
let datumUmesecu = datum.getDate();
let danUnedelji = datum.getDay();

console.log("Danas je " + datumUmesecu + "." + mesec + "." + godina);
console.log(danUnedelji);
