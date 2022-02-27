"use strict"
console.log(`Ugnjezden if`);

// 19. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.
let b1 = 5;
let b2 = 2;
let b3 = 4;

if (b1 > b2) {
    if (b1 > b3) {
        console.log(`Broj ${b1} je najveci.`);
        if (b2 > b3) {
            console.log(`Broj ${b2} je srednji.`);
            console.log(`Broj ${b3} je najmanji.`);
        }
        else {
            console.log(`Broj ${b3} je srednji.`);
            console.log(`Broj ${b2} je najmanji.`);
        }
    }
    else {
        console.log(`Broj ${b1} je srednji.`);
        if (b2 > b3) {
            console.log(`Broj ${b2} je najveci.`);
            console.log(`Broj ${b3} je najmanji.`);
        }
        else {
            console.log(`Broj ${b2} je najmanji.`);
            console.log(`Broj ${b3} je najveci.`);
        }
    }
}

// 20. Učitati dva cela broja i ispitati da li je veći od njih paran
let broj1 = 36;
let broj2 = 23;

if (broj1 > broj2) {
    if (broj1 % 2 == 0) {
        console.log(`Broj ${broj1} je paran`);
    } else {
        console.log(`Broj ${broj1} je neparan`);
    }
} else if (broj1 < broj2) {
    if (broj2 % 2 == 0) {
        console.log(`Broj ${broj2} je paran`);
    } else {
        console.log(`Broj ${broj2} je neparan`);
    }
}