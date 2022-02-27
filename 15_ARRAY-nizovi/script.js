"use strict";

console.log(`Arrays - Nizovi`);

let cars = [`Volvo`, `BMW`, `Toyota`];

console.log(cars);

let numbers = [6, -7, 0, 5.5, -3.14];

console.log(numbers);

let random = [6, "Stefan", -8.8, true, [1, 2, 3]];

console.log(random);

console.log(cars[0]); // Volvo
console.log(cars[1]); // BMW
console.log(cars[2]); // Toyota
console.log(cars[3]); // undefined


console.log(random[4][1]);

cars[0] = "Peugeot";
console.log(cars)

// cars[0] = undefined; // - nacin da se ukloni element iz niza

for(let i = 0; i < cars.length; i++){ // ili :  i <= cars.length - 1 (zbog znaka jednako)
    console.log(cars[i]);
}



/////////////// ZADACI ///////////////////////

// 1. Ispisati sve elemente niza od 5 stringova.  // vec uradjeno

// 2. Odrediti zbir elemenata celobrojnog niza.

let num = [2, 5, 34, 68, 12];
let zbir = 0;

for(let i = 0; i < num.length; i++){
    zbir += num[i];
}
console.log(zbir);

////////////
let niz = [1, 8, 11, 5, 2, 34];
let niz2 =  [5, 18, 11, 5, 2];
let niz3 =  [10, 18, 1, 15, 42];

let suma = 0;

for(let i = 0; i < niz.length; i++){
    suma += niz[i];
}
console.log(suma);

let suma2 = 0;

for(let i = 0; i < niz2.length; i++){
    suma2 += niz2[i];
}
console.log(suma2);

// Umesto ovog gore pise se funkcija
/// NIKADA SE NE STAVLJA SUMA VAN FUNKCIJE-jer se ne resetuje  posle prvog niza nego nastavi da dodaje sto je pogresno!!!
let sumaElemenata = niz => {
    let suma = 0;
    for(let i = 0; i < niz.length; i++){
        suma += niz[i];
    }
    return suma; //  Ovo je ispravno
    // return console.log(suma) - Pogresno!!
    // console.log(`Suma elemenata je ${suma}. `) - Ovo moze
    // return `Suma elemenata je ${suma}. `; // I ovo moze
}

console.log(`Suma elemenata prvog niza je: ${sumaElemenata(niz)}.`)
console.log(`Suma elemenata drugog niza je: ${sumaElemenata(niz2)}.`)
console.log(`Suma elemenata drugog niza je: ${sumaElemenata(niz3)}.`)

// console.log(sumaElemenata(niz));


// 3. Odrediti proizvod elemenata celobrojnog niza.
// let pr = 1;

// for(let i = 0; i < num.length; i++){
//     pr *= num[i];
// }
// console.log(pr);

let proizvodElemenata = niz => {
    let proizvod = 1;
    for(let i = 0; i < niz.length; i++){
        proizvod *= niz[i];
    }
    return proizvod;
}
console.log(proizvodElemenata(niz));
console.log(proizvodElemenata(niz2));
console.log(proizvodElemenata(niz3));


// 4. Odrediti srednju vrednost elemenata celobrojnog niza.
// let sum = 0;
// let br = 0;

// for(let i = 0; i < num.length; i++){
//     sum += num[i];
//     br++;
// }
// let sv = sum / br;
// console.log(sv);

let arSr = niz => {
    let suma = 0;
    let broj = 0;

    for(let i = 0; i < niz.length; i++){
        suma += niz[i];
        broj++;
    }
    return broj != 0 ? suma / broj : 0; // isto sto i: (broj != 0) ? suma / broj : 0
}
console.log(arSr(niz));
console.log(arSr(niz2));
console.log(arSr(niz3));

////// Primer 2 - bolji primer
let arSr2 = niz => {
    let suma = sumaElemenata(niz);
    let broj = niz.length;

    return broj != 0 ? suma / broj : 0; // isto sto i: (broj != 0) ? suma / broj : 0
}

console.log(arSr2(niz));
console.log(arSr2(niz2));
console.log(arSr2(niz3));

////// Primer 3 - kraci primer
let arSr3 = niz => (niz.length != 0) ? sumaElemenata(niz) / niz.length : 0;

console.log(arSr3(niz));
console.log(arSr3(niz2));
console.log(arSr3(niz3));


// 4a. Odrediti srednju vrednost parnih elemenata niza

let arSrParnih = niz => {
    let suma = 0;
    let broj = 0;

    for(let i = 0; i < niz.length; i++){
        if(niz[i] % 2 == 0){
            suma += niz[i];
            broj++;
        }
    }
    return (broj == 0) ? 0 : suma / broj; // isto sto i prethodno samo obrnuto
}
console.log(arSrParnih(niz));
console.log(arSrParnih(niz2));
console.log(arSrParnih(niz3));

// console.log(arSrParnih(`Pera`));
// console.log(arSrParnih(1, 2, [1, 2, 3]));

//////////// 0 JE PARAN BROJ

// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxVr = niz => {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++) {
      if (niz[i] > max){
          max = niz[i];
      }
    }
    return max;
  };
console.log(maxVr(niz));
console.log(maxVr(niz2));
console.log(maxVr(niz3));


// 6. Odrediti minimalnu vrednost u celobrojnom nizu

let minVr = niz => {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
      if (min > niz[i]){
          min = niz[i];
      }
    }
    return min;
  };
console.log(minVr(niz));
console.log(minVr(niz2));
console.log(minVr(niz3));


// 7. Odrediti indeks maksimalnog elementa celobrojnog niza.

let indMaxEl = niz => {
    let max = niz[0];
    let index = 0;
    for (let i = 1; i < niz.length; i++) {
      if (niz[i] > max){
          max = niz[i];
          index = i;
      }
    }
    return index;
}
console.log(indMaxEl(niz));
console.log(indMaxEl(niz2));
console.log(indMaxEl(niz3));


// 8. Odrediti indeks minimalnog elementa celobrojnog niza.

let indMinEl = niz => {
    let min = niz[0];
    let index = 0;
    for (let i = 1; i < niz.length; i++) {
        if (min > niz[i]){
            min = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(indMinEl(niz));
console.log(indMinEl(niz2));
console.log(indMinEl(niz3));


// 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

