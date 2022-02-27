"use strict";
console.log("Logicki operatori");

//Napraviti program koji za uneti pol i broj godina korisnika ispisuje da li je korisnik muškarac ili žena i da li je punoletan

// Prvo ide: 
//1. NEGACIJA (!)
//2. AND (&&)
//3. OR (||)
//if (true && true || false) -> (false && true || false) -> (false || false) -> false
//if ( (true && true) || false)

let pol = "m";
let god = -17;

if (pol == "m" && god >= 18) {
    console.log(`Osoba je muskog pola i punoletna je.`);
} else if (pol == "m" && god < 18 && god >= 0) {
    console.log(`Osoba je muskog pola i maloletna je.`);
} else if (pol == "z" && god >= 18) {
    console.log(`Osoba je zenskog pola i punoletna je.`);
} else if (pol == "z" && god < 18 && god >= 0) {
    console.log(`Osoba je zenskog pola i maloletna je.`);
} else {
    console.log(`Pogresan unos.`);
}
//////////////////////////////////////////////////////////
pol = "ž";

if (pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") {
    document.body.innerHTML = `<img src="img/female.png">`;
} else if (pol == "m" || pol == "M") {
    document.body.innerHTML = `<img src="img/male.png">`;
} else {
    document.body.innerHTML = `<p>Pogresan unos.</p>`;
}
///////////////////////////////////////////////////////////
pol = "z";
god = 15;

if ((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god >= 18) {
    console.log(`Osoba je zenskog pola i punoletna je.`);
}
// ..... && 0<=god > 18 -> POGRESNO!!!!! 
else if ((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god < 18 && god >= 0) {
    console.log(`Osoba je zenskog pola i maloletna je.`);
}
else if ((pol == "m" || pol == "M") && god >= 18) {
    console.log(`Osoba je muskog pola i punoletna je.`);
}
else if ((pol == "m" || pol == "M") && god < 18 && god >= 0) {
    console.log(`Osoba je muskog pola i maloletna je.`);
}
else {
    console.log(`Pogresan unos.`);
}
//////////////////////////////////////////////////////////////
