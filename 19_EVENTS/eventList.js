"use strict";

console.log(`--- Event Listener ---`);

/////////////////////////////////////

// 1. Dohvati HTML el. koji zelis da postavis osluskivac
let pKlikni = document.getElementById("klikni");

// 2. Na element postavljamo osluskivac
pKlikni.addEventListener("click", () => {
    console.log(`Jednom kliknuto na paraghraf`);
});

/////////////////////////////////////
// 1
let pKlikniDva = document.getElementById("dvaKlika");

// 2
pKlikniDva.addEventListener("dblclick", () => {
    console.log(`Dva puta kliknuto na paragraf`);
});

/////////////////////////////////////
// 1 Dohvatamo el
let btnPlus = document.getElementById("plus");
let spanRes = document.getElementById("res");
let btnMinus = document.getElementById("minus");

// 2
let res = 0;
btnPlus.addEventListener("click", () => {
    res++;
    // console.log(res);
    spanRes.innerHTML = res;
    if(res < 0){
        spanRes.style.color = "blue";
    }else{
        spanRes.style.color = "red";
    }
});

btnMinus.addEventListener("click", () => {
    res--;
    spanRes.innerHTML = res;
    if(res < 0){
        spanRes.style.color = "blue";
    }else{
        spanRes.style.color = "red";
    }
})
/////////////////////////////////////

let btnHello = document.getElementById("hello");
let inputIme = document.getElementById("ime");
let pHelloIspis = document.getElementById("helloIspis");

btnHello.addEventListener("click", () => {
    let inputImeValue = inputIme.value;
    pHelloIspis.innerHTML = `Hello ${inputImeValue}`;
});

/////////////////////////////////////

// DOM
let inputGodinaRodjenja = document.getElementById("godRodj");
let inputPol = document.querySelectorAll("input[name='pol']");
let btnPosalji = document.getElementById("posalji");
let pIspis = document.getElementById("ispis");

btnPosalji.addEventListener("click", (e) => {
    e.preventDefault();
    let date = new Date();
    let tekucaGodina = date.getFullYear();
    
    let inputGodinaRodjenjaValue = inputGodinaRodjenja.value;
    inputGodinaRodjenjaValue = parseInt(inputGodinaRodjenjaValue);
    
    let god = tekucaGodina - inputGodinaRodjenjaValue;
    pIspis.innerHTML = `Korisnik ima ${god} godina`;

    let checkedPol = document.querySelector(`input[name="pol"]:checked`); // vraća HTML tag onog input polja na koje je kliknuto
    let checkedPolValue = checkedPol.value; // vraća vrednost iz selektovanog HTML taga

    if(checkedPolValue == "z") {
        pIspis.innerHTML += " i ženskog je pola";
    }
    else if(checkedPolValue == "m") {
        pIspis.innerHTML += " i muškog je pola";
    }
    else {
        pIspis.innerHTML += " i nije se opredelio za pol";
    }
});