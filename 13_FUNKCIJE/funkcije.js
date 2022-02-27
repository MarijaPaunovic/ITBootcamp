"use strict";

function zdravo(){
    console.log(`Zdravo svete.`)
}

zdravo();
zdravo();
console.log(`Hello!`);
zdravo();

////////////////////////

function stampaj(tekst){
    console.log(tekst);
}

stampaj("Marija");
stampaj("Jelena");
let ime = "Sofija";
stampaj(ime);

//////////////////////////

function korisnik(ime, prezime){
    console.log(`Ulogovani korisnik je ${ime} ${prezime}.`)
}
korisnik("Stefan", "Stanimirovic");
korisnik("Jelena", "Matejic");

///////////////////////////

function korisnikGodine(ime, prezime, god){
    console.log(`Ulogovani korisnik je ${ime} ${prezime} i ima ${god} godina.`)
}

korisnikGodine("Jelena", "Matejic", 27);
korisnikGodine("Pera", "Peric", 17);

//////////////////////////////

let x = 5;
let y = 7;
let z = x + y;
console.log(z); 

x = 6;
y = 4;
z = x + y;
console.log(z);

x = 2;
y = -9;
z = x + y;
console.log(z);

function zbirDvaBroja(x, y){
    let zbir = x + y;
    console.log(zbir); // ispisuje vrednost
}

zbirDvaBroja(15, 12);
zbirDvaBroja(3, 9);

//////////////////////////////

function vratiZbirDvaBroja(a, b){
    let zbir = a + b;
    // console.log(`Vrati zbir`);
    return zbir; // ovde se funkcija prekida i izlazi iz funkcije
    console.log(`Vrati zbir iza return`); // OVO NE RADI !!!!!!!!
}
// console.log(vratiZbirDvaBroja(3, 5));
let rez = vratiZbirDvaBroja(50, 70);
console.log(rez);
rez = vratiZbirDvaBroja(15, 13);
console.log(rez);

let rez1 = vratiZbirDvaBroja(4, 6); // 10
let rez2 = vratiZbirDvaBroja(5, 7); // 12
let rez3 = vratiZbirDvaBroja(rez1, rez2); // 22
console.log(rez3);

let rez4 = vratiZbirDvaBroja(4 + 5, 1 + 3);
console.log(rez4);

let rez5 = vratiZbirDvaBroja(vratiZbirDvaBroja(7, 9), 3);
console.log(rez5);

let rez6 = vratiZbirDvaBroja(vratiZbirDvaBroja(1, 2), vratiZbirDvaBroja(5, 3));
console.log(rez6);

///////////////////////////////////

function voda(temperatura){
    console.log(`Uneli ste temperaturu od ${temperatura} stepeni C.`);
    if(temperatura <= 0){
        console.log(`Voda je u cvrstom agregatnom stanju.`);
    } else if(temperatura >= 100){
        console.log(`Voda je u gasovitom agregatnom stanju.`);
    } else {
        console.log(`Voda je u tecnom agregatnom stanju.`);
    }
}

voda(-3);
voda(100);