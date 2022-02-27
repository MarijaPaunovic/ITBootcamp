"use strict"

let ocena = -4;

if (ocena == 5) {
    console.log(`Odlican 5`);
} else if (ocena == 4) {
    console.log(`Vrlo dobar 4`);
} else if (ocena == 3) {
    console.log(`Dobar 3`);
} else if (ocena == 2) {
    console.log(`Dovoljan 2`);
} else if (ocena == 1) {
    console.log(`Nedovoljan 1`);
} else {
    console.log(`Unos nije dobar.`);
}

console.log(`Kod nakon if - else if`);

// Razlika je da ovde svaki uslov propituje za razliku od gornjeg gde pri prvom true uslovu, on prestaje dalje da pita
// if (ocena == 5) {
//     console.log(`Odlican 5`);
// } 
// if (ocena == 4) {
//     console.log(`Vrlo dobar 4`);
// } 
// if (ocena == 3) {
//     console.log(`Dobar 3`);
// } 
// if (ocena == 2) {
//     console.log(`Dovoljan 2`);
// } 
// if (ocena == 1) {
//     console.log(`Nedovoljan 1`);
// } else {
//     console.log(`Unos nije dobar.`);
// }

// console.log(`Kod nakon if - else if`);

/////////////////////////   ZADACI   ///////////////////////////////////////////////////

// 7. Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit.  Za više od 50 poena učenik dobija ocenu 6,  za više od 60 poena učenik dobija ocenu 7, za više od 70 poena učenik dobija ocenu 8,  za više od 80 poena učenik dobija ocenu 9 i  za više od 90 poena učenik dobija ocenu 10.
let ocena2 = 84;

// if (ocena2 < 50) {
//     console.log(`Ucenik je pao`);
// }
// if (ocena2 >= 50 && ocena2 <= 59) {
//     console.log(`Ocena je 6`);
// }
// if (ocena2 >= 60 && ocena2 <= 69) {
//     console.log(`Ocena je 7`);
// }
// if (ocena2 >= 70 && ocena2 <= 79) {
//     console.log(`Ocena je 8`);
// }
// if (ocena2 >= 80 && ocena2 <= 89) {
//     console.log(`Ocena je 9`);
// }
// if (ocena2 >= 90 && ocena2 <= 99) {
//     console.log(`Ocena je 10`);
// }
if (ocena2 < 50) {
    console.log(`Ucenik je pao`);
} else if (ocena2 < 60) {
    console.log(`Ocena je 6`);
} else if (ocena2 < 70) {
    console.log(`Ocena je 7`);
} else if (ocena2 < 80) {
    console.log(`Ocena je 8`);
} else if (ocena2 < 90) {
    console.log(`Ocena je 9`);
} else if (ocena2 <= 100) {
    console.log(`Ocena je 10`);
} else {
    console.log(`Uneta je pogresna ocena.`);
}

// 8.Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 
let datum = new Date();
let danUnedelji = datum.getDay();

if (danUnedelji == 0) {
    console.log(`Danas je vikend.`);
} else if (danUnedelji == 6) {
    console.log(`Danas je vikend.`)
}
else {
    console.log(`Danas je radni dan.`);
}

// 9. Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati popodne i u ostalim slučajevima ispisati dobro veče.
let datum2 = new Date();
let sati = datum2.getHours();

if (sati <= 12) {
    console.log("Dobro jutro");
} else if (sati < 18) {
    console.log("Dobar dan");
} else {
    console.log(`Dobro vece`);
}

// 10. Uporediti dva uneta datuma i ispisati koji od njih je raniji. 
let dat1 = "2020-01-01";
let dat2 = "2020-05-01";
if (dat1 < dat2) {
    console.log(`${dat1} je bio pre ${dat2}`);
}
else if (dat2 < dat1) {
    console.log(`${dat2} je bio pre ${dat1}`);
}
else {
    console.log(`${dat1} i ${dat2} su isti`);
}

// 2. način
// let dan1 = 01;
// let mes1 = 09;
// let god1 = 2021;

// let dan2 = 02;
// let mes2 = 09;
// let god2 = 2021;

// if (god1 < god2) {
//     console.log("Datum 1 je raniji");
// }
// else if (god2 < god1) {
//     console.log("Datum 2 je raniji");
// }
// // Pošto su godine iste, proveravano za mesece
// else if (mes1 < mes2) {
//     console.log("Datum 1 je raniji");
// }
// else if (mes2 < mes1) {
//     console.log("Datum 2 je raniji");
// }
// // Pošto su i godine i meseci isti, proveravamo za dane
// else if (dan1 < dan2) {
//     console.log("Datum 1 je raniji");
// }
// else if (dan2 < dan1) {
//     console.log("Datum 2 je raniji");
// }
// // Pošto su i godine i meseci i dani isti, datumi su jednaki
// else {
//     console.log("Datum 1 i datum 2 su isti");
// }

// 11. Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.
let datum3 = new Date();
let sati2 = datum3.getHours();
let sati3;

if (sati2 < 9) {
    console.log(`Firma ne radi`);
} else if (sati >= 17) {
    console.log(`Firma ne radi`);
} else {
    console.log(`Firma radi`);
}

// 12. Za unet sat početka i sat kraja radnog vremena dva lekara,  ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.(Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom nakon ponoći, ovo se podrazumeva i ne ispitivati doatno)
let p1 = 7;
let k1 = 10;
let p2 = 8;
let k2 = 21;

if (k1 < p2) {
    console.log(`Smene lekara se NE preklapaju.`);
} else if (k2 < p1) {
    console.log(`Smene lekara se NE preklapaju.`);
}
else {
    console.log(`Smene lekara se preklapaju.`);
}

// 13. Za uneti broj ispitati da li je paran ili nije. 
// 4 / 2 = 2 cela + 0 ostatak
// 5 / 2 = 2 cela + 1 ostatak
// 6 / 2 = 3 cela + 0 ostatak
// 7 / 2 = 3 cela + 1 ostatak
let br = 8;

if (br % 2 == 0) {
    console.log(`Broj ${br} je paran.`);
} else {
    console.log(`Broj ${br} je neparan.`);
}

// 14. Za uneti broj ispisati da li je deljiv sa 3 ili ne.
// nesto / 0 = beskonacno
// 0 / nesto = 0

let br2 = 9;

if (br2 % 3 != 0) {
    console.log(`Broj ${br2} nije deljiv sa 3.`);
} else {
    console.log(`Broj ${br2} je deljiv sa 3.`);
}

// 15. Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.
let ub1 = 87;
let ub2 = 68;
let rez;

if (ub1 > ub2) {
    rez = ub1 - ub2;
    console.log(`Rezultat je ${rez}`);
} else {
    rez = ub2 - ub1;
    console.log(`Rezultat je ${rez}`);
}

// 16. Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.
let ub3 = 23;

if (ub3 <= 0) {
    ub3 = ub3 - 1; // isto kao i ub3-- ili ub3 -= 1
    console.log(ub3);
} else {
    ub3 = ub3 + 1; // isto kao i ub3++ ili ub3 += 1
    console.log(ub3);
}

// 17. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture.
// SPECIFICNO ZA 3 BROJA
let a1 = 145;
let a2 = 65;
let a3 = 35;

// Najveci broj
let max = a1;
if (max < a2) {
    max = a2
}
if (max < a3) {
    max = a3
}
console.log(`Najveci broj je ${max}`);

// Najmanj broj
let min = a1;
if (min > a2) {
    min = a2
}
if (min > a3) {
    min = a3
}
console.log(`Najmanji broj je ${min}`);

// Srednji broj
let srednji = a1 + a2 + a3 - min - max;
console.log(`Srednji broj je ${srednji}`);

// 18. Za učitani broj ispitati da li je ceo.

// Prvi nacin
let s = 15.3;
console.log(s % 1);

if (s % 1 == 0) {
    console.log(`Broj ${s} je ceo broj`);
} else {
    console.log(`Broj ${s} nije ceo broj`);
}

// Drugi nacin
s = 12;
console.log(Math.floor(s)); // Moze i sa zaokruzivanjem round i cell
if (Math.floor(s) == s) {
    console.log(`Broj ${s} je ceo broj`);
} else {
    console.log(`Broj ${s} nije ceo broj`);
}