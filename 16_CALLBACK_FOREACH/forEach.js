"use strict";

let a = [1, 9, 5, -7, 3, 4, 8];

// Validno ali se ovako NE RADI
// function ispis(elem){
//     console.log(`Element niz je: ${elem}`);
// }
// a.forEach(ispis);

/////////////////////////////////////////////////
// Za iteraciju kroz sve članove nekog niza:
a.forEach(elem => {
    console.log(`Element niz je: ${elem}`);
});

// Za iteraciju kroz sve članove i njihove indekse:
a.forEach((elem, i) => {
    console.log(`Index: ${i}, Element: ${elem}`);
});


////////////  VEZBANJE //////////////////////

// Odrediti zbir celobrojnog niza.

// Zbir elemenata
let zbir = niz => {
    let zbir = 0;
    niz.forEach(el => {
        zbir += el;
    });
    return zbir;
};

// Zbir parnih elemenata
let zbirParnih = niz => {
    let zbir = 0;
    niz.forEach(el => {
        if(el % 2 == 0){
            zbir += el;
        }
    });
    return zbir;
};

// Zbir elemenata sa parnim indexom
let zbirElsaParnimIndexom = niz => {
    let zbir = 0;
    niz.forEach((el, index) => {
        if(index % 2 == 0){
            zbir += el;
        }
    });
    return zbir;
};
console.log(zbir(a));
console.log(zbirParnih(a));
console.log(zbirElsaParnimIndexom(a));


// Odrediti proizvod elemenata celobrojnog niza.

let prEl = niz => {
    let pr = 1;
    niz.forEach(el => {
        pr *= el;
    });
    return pr;
};
console.log(prEl(a));


// Odrediti srednju vrednost elemenata celobrojnog niza.

let sreVrEl = niz => {
    let sum = 0;
    // let br = 0;
    niz.forEach(el => {
        sum += el;
        // br++;
    })
    return (niz.length != 0) ? sum / niz.length : 0;
}
console.log(sreVrEl(a));


// Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxVr = niz => {
    let max = niz[0];
    niz.forEach(el => {
        if(el > max){
            max = el;
        }
    });
    return max;
}
console.log(maxVr(a));


// Odrediti minimalnu vrednost u celobrojnom nizu.

let minVr = niz => {
    let min = niz[0];
    niz.forEach(el => {
        if(el < min){
            min = el;
        }
    });
    return min;
}
console.log(minVr(a));


// Odrediti indeks maksimalnog elementa celobrojnog niza.

let maxInd = (niz, callback) => {
    let maxEl = callback(niz);
    let index = 0;
    niz.forEach((el, i) => {
        if(el == maxEl){
            index = i;
        }
    })
    return index;
}
console.log(maxInd(a, maxVr));

// Stefan
let indMax = niz => {
    let max = niz[0];
    let imax = 0;
    niz.forEach((el, i) =>{
        if(el > max){
            max = el;
            imax = i;
        }
    });
    return imax;
}
console.log(indMax(a));


// Odrediti indeks minimalnog elementa celobrojnog niza.

let minInd = (niz, callback) => {
    let minEl = callback(niz);
    let index = 0;
    niz.forEach((el, i) => {
        if(el == minEl){
            index = i;
        }
    })
    return index;
}
console.log(minInd(a, minVr));

// Stefan

// let indexMaxCallback = niz => {
//     let max = maxVr(niz);
//     let imax;
//     niz.forEach((el, i) => {
//         if(el == max){
//             imax = i;
//         }
//     })
//     return imax;
// }

// let indexMinCallback = niz => {
//     let min = minVr(niz);
//     let imin;
//     niz.forEach((el, i) => {
//         if(el == min){
//             imin = i;
//         }
//     })
//     return imin;
// }

let indexSvojstvo = (niz, svojstvo) => {
    let s = svojstvo(niz);
    let index;
    niz.forEach((el, i) => {
        if(el == s){
            index = i;
        }
    });
    return index;
}
console.log(indexSvojstvo(a, maxVr));
console.log(indexSvojstvo(a, minVr));


// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let brEl = (niz, callback) => {
    let srVr = callback(niz);
    let broj = 0;
    niz.forEach(el => {
        if(el > srVr){
            broj++;
        }
    });
    return broj;
}
console.log(brEl(a, sreVrEl));