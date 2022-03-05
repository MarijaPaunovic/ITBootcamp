"use strict";

// OVAKO SMO RADILI RANIJE

// function ispisKonzola (niz){
//     let rez = "";
//     for(let i = 0; i < niz.length; i++){
//         rez += niz[i] + " ";
//     }
//     console.log(rez);
// }

// function ispisHTML (niz){
    // let rez = "";
    // for(let i = 0; i < niz.length; i++){
    //     rez += niz[i] + " ";
    // }
//     document.body.innerHTML += `<div>${rez}</div>`;
// }

// let brojevi = [1, 6, -4, 9];
// ispisKonzola(brojevi);
// ispisHTML(brojevi);

///////////////////////////////////////////////////////

// OVAKO SE RADI SA CALLBACK FUNKCIJAMA

let brojevi = [1, 6, -4, 9];

function ispisKonzola(poruka){
    console.log(poruka);
}

function ispisStranica(poruka){
    document.body.innerHTML += `<div>${poruka}</div>`;
}

function ispisNiza(niz, callback){
    let rez = "";
    for(let i = 0; i < niz.length; i++){
        rez += niz[i] + " ";
    }
    callback(rez);
    // callback(rez); // moze vise puta da se poziva
}

ispisNiza(brojevi, ispisKonzola);
ispisNiza(brojevi, ispisStranica);


// PRIMER SA ANONIMNIM FUNKCIJA

// Isti zadatak samo se pozivaju anonimne funkcije

ispisNiza(brojevi, function(poruka){
    console.log(poruka);
});

ispisNiza(brojevi, function(poruka){
    document.body.innerHTML += `<div>${poruka}</div>`;
});

// Isti zadatak samo se pozivaju arrow funkcije

ispisNiza(brojevi, poruka => {
    console.log(poruka);
});

ispisNiza(brojevi, poruka => {
    document.body.innerHTML += `<div>${poruka}</div>`;
});


/////////  VEZBANJE ////////////
// Odrediti broj max i min el u celobrojnom nizu

// Ovako je po staroj metodi!!!
// function brojMaxEl(niz) {
//     let max = niz[0];

//     for(let i = 1; i < niz.length; i++){
//         if(niz[i] > max){
//             max = niz[i];
//             br++;
//         }
//     }
//     let br = 0;
//     for(let i = 0; i < niz.length; i++){
//         if(niz[i] == max){
//             br++;
//         }
//     }
//     return br;
// }

// function brojMinEl(niz) {
//     let min = niz[0];

//     for(let i = 1; i < niz.length; i++){
//         if(niz[i] < min){
//             min = niz[i];
//         }
//     }
    // let br = 0;
    // for(let i = 0; i < niz.length; i++){
    //     if(niz[i] == min){
    //         br++;
    //     }
    // }
    // return br;
// }


// Ovako treba
function maxEl(niz){
    let max = niz[0];
    for(let i = 1; i < niz.length; i++){
        if(niz[i] > max){
            max = niz[i];
        }
    }
    return max;
}

function minEl(niz){
    let min = niz[0];
    for(let i = 1; i < niz.length; i++){
        if(niz[i] < min){
            min = niz[i];
        }
    }
    return min;
}

function brojSvojstvaNiza(niz, callback){
    let s = callback(niz);
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i] == s){
            br++;
        }
    }
    return br;
}

let temperature = [0, 0, 1, 2, 2, 1, 2, 1, 0, 0];

console.log(brojSvojstvaNiza(temperature, maxEl));
console.log(brojSvojstvaNiza(temperature, minEl));


// Min i Max u jednoj funkciji - Komplikovano resenje
// function maxMinEl(niz){
//     let min = niz[0];
//     let max = niz[0];

//     for(let i = 1; i < niz.length; i++){
//         if(niz[i] < min){
//             min = niz[i];
//         }
//         if(niz[i] > max){
//             max = niz[i];
//         }
//     }
//     return [max, min];
// }

// function brojSvojstvaNiza(niz, svojstvo, index){
//     let temp = svojstvo(niz);
//     let s = temp[index];
//     let br = 0;
//     for(let i = 0; i < niz.length; i++){
//         if(niz[i] == s){
//             br++;
//         }
//     }
//     return br;
// }

// const MAX_INDEX = 1;
// const MIN_INDEX = 0;

// let temperature = [0, 0, 1, 2, 2, 1, 2, 1, 0, 0];

// // console.log(brojSvojstvaNiza(temperature, maxMinEl, 1));
// // console.log(brojSvojstvaNiza(temperature, maxMinEl, 0));

// console.log(brojSvojstvaNiza(temperature, maxMinEl, MAX_INDEX));
// console.log(brojSvojstvaNiza(temperature, maxMinEl, MIN_INDEX));