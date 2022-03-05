"use strict";

console.log(`1`);
console.log(`2`);

// Primer 1
// setTimeout(function () {
//     console.log(`3`);
// }, 2000 / 2);

// Primer 2
// setTimeout(() => {
//     console.log(`3`);
// }, 1000 * 2);

// Primer 3
function ispis() {
    console.log(`3`);
};

setTimeout(ispis, 2000);

////////////////////////////
// setTimeout(function () {
//     console.log(this); // this = objekat koji poziva metodu
// }, 2000 / 2);

// setTimeout(() => {
//     console.log(this); // this = window
// }, 1000 * 2);
/////////////////////////////
// BLOKIRAJUCI kod
// for (let i = 1; i < 10000; i++) {
//     console.log(i);    
// }
//////////////////////////////////////////

let btn1 = document.getElementById(`btn1`);
let div = document.getElementById(`result`);
let btn2 = document.getElementById(`btn2`);
let divIspis = document.getElementById(`ispis`);
let btn3 = document.getElementById(`btn3`);
let btn4 = document.getElementById(`btn4`);

// Razlike izmedju arrow fukcije i anonimne funkcije - u vracanju this-a
// btn1.addEventListener(`click`, () => {
//     console.log(this);
// });
// btn1.addEventListener(`click`, function() {
//     console.log(this);
// });

let timer = null;
let timer2 = null;

btn1.addEventListener(`click`, function() {
    // primer 1 - ispisuje se staro vreme
    // let datum = new Date();
    // let sati = datum.getHours();
    // let minuti = datum.getMinutes();
    // let sekunde = datum. getSeconds();
    if(timer === null){ 
       timer = setTimeout(() => {
            // console.log(`Klik na dugme`);
            // primer 2 - ispisuje se novo vreme
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum. getSeconds();
            div.innerHTML = `${sati} : ${minuti} : ${sekunde}`;
            timer = null;
        }, 2000); 
    }
    
});
// Prekid izvrsenja setTimeout
btn2.addEventListener(`click`, function(){
    clearTimeout(timer);
    timer = null;
});

/////  setInterval  /////
btn3.addEventListener(`click`, () => {
    if(timer2 === null){
        timer2 = setInterval(() => {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum. getSeconds();
            divIspis.innerHTML = `${sati} : ${minuti} : ${sekunde}`;
        }, 1000);  
    }
});

btn4.addEventListener(`click`, () => {
    clearInterval(timer2);
    timer2 = null;
});