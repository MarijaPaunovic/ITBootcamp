"use strict";

console.log(`--- Promisi - Callback ---`);

/////////////////////////////////////////
// PRIMERI CALLBACK FUNKCIJA
/////////////////////////////////////////
// Primer 1
let myFunc = callback => {
    callback();
};
// Realizacija callback funkcije, vrsi se prilikom poziva roditeljske funkcije
myFunc( () => {
    console.log(`Callback okinuta.`);
} );

///////////////////////////
// Primer 2
let sum = callback => {
    callback(5, 7);
    let br1 = 6;
    let br2 = 4;
    callback(br1, br2);
};
// 2.1
// Realizacija se prosledjuje kao parametar
sum( (x, y) => {
    console.log(x + y);
} );

// 2.2
// Kreiramo posebnu funkciju za realizaciju i onda je prosledimo kao parametar
function printSum(a, b) {
    console.log(a + b);
}

sum(printSum); // poziv funkcije koja realizuje ide bez zagrade

///////////////////////////
// Primer 3
let my = f => {
    f(`Marija`);
}
my( x => {
    console.log(`Hello ${x}`);
} );

///////////////////////////
// Primer 4
let racunaj = (str, cb) => {
    console.log(str);
    cb(7, 3);
};

racunaj(`Oduzimanje`, (x, y) => {
    console.log(x - y);
});

racunaj(`Mnozenje`, (x, y) => {
    console.log(x * y);
});

///////////////////////////
// Primer 5
let racunaj2 = (str, cb) => {
    let a = 11;
    let b = 15;
    console.log(str, cb(a, b));
};

racunaj2(`Deljenje`, (a, b) => {
    // return a/b;
    // ili
    let res = a / b;
    return res;
});

///////////////////////////
// Primer 6
let racunaj3 = (str, a, b, cb) => {
    console.log(str, cb(a, b));
};

racunaj3(`Deljenje`, 11, 15, (a, b) => {
    // return a/b;
    // ili
    let res = a / b;
    return res;
});

