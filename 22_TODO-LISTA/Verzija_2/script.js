"use strict";

let inputUnesiObavezu = document.getElementById(`unesiObavezu`);
// let inputSubmit = document.getElementById(`dodaj`);
let ulListe = document.querySelector(`ul`);
let liItems = document.querySelectorAll(`li`);
let radioPocetak = document.getElementById(`pocetak`);
let radioKraj = document.getElementById(`kraj`);

// // Dodavanje novih li
// inputSubmit.addEventListener(`click`, e => {
//     e.preventDefault;
    
//     let inputUOvalue = inputUnesiObavezu.value; // Uzimam vrednost iz input polja

//     // Sprecavanje da se doda prazan li
//     if(inputUOvalue == `` || inputUOvalue == null){
//         alert(`Morate uneti tekst obaveze!`);
//     } else {
//         let liNoviItem = document.createElement(`li`); // kreiram novi li item
//         liNoviItem.textContent += inputUOvalue; // Upisujem u li tekst 
        
//         if(radioPocetak.checked){
//             ulListe.prepend(liNoviItem);
//         } else if(radioKraj.checked){
//             // liNoviItem.textContent += inputUOvalue;
//             ulListe.appendChild(liNoviItem); // Dodajemo <li> cvor u <ul>
//         }
//         inputUnesiObavezu.value = ``; // Isprazni input polje nakon dodavanja li u ul listu
//     };

//     // Jelenin primer
//     // let radioAdd = document.querySelector(`input[name=obaveza]:checked`);
//     // console.log(radioAdd.id, radioAdd.value)
//     // if(radioAdd.value == `begin`){
//     //     // ulListe.prepend(liNoviItem); // Dodajemo na pocetak
//     // } else {
//     //     // ulListe.appendChild(liNoviItem); // Dodajemo na kraj
//     // }
// });

// Preko entera
inputUnesiObavezu.addEventListener(`keyup`, e => {
    console.log(e.keyCode);
    // if(e.keyCode == 13)
    if(e.key == "Enter"){
            e.preventDefault;
        
        let inputUOvalue = inputUnesiObavezu.value; // Uzimam vrednost iz input polja
        inputUOvalue = inputUOvalue.trim();

        // Sprecavanje da se doda prazan li
        if(inputUOvalue == `` || inputUOvalue == null){
            alert(`Morate uneti tekst obaveze!`);
        } else {
            let liNoviItem = document.createElement(`li`); // kreiram novi li item
            if(radioPocetak.checked){
                liNoviItem.textContent += inputUOvalue; // Upisujem u li tekst 
                ulListe.prepend(liNoviItem);
                inputUnesiObavezu.value = ``;
            } else if(radioKraj.checked){
                liNoviItem.textContent += inputUOvalue;
                ulListe.appendChild(liNoviItem); // Dodajemo <li> cvor u <ul>
                inputUnesiObavezu.value = ``; // Isprazni input polje nakon dodavanja li u ul listu
            }
        };
        
    };
});

// Sklanjanje li taga
ulListe.addEventListener(`click`, e => {
    // Event bubbling
    // console.log(`Kliknuto na UL`);
    // console.log(e);
    // console.log(e.target); // Vraca ceo tag i njegovu decu
    // console.log(e.target.tagName); // Vraca samo ime taga na koji je kliknut
    if(e.target.tagName == `LI`){
        e.target.remove();
    }
});

// trim
let tekst = `  Neki   tekst   `;
console.log(tekst.trim()) // .trim() funkcija sklanja praznine sa pocetka i kraja stringa
// ne sklanja razmake unutar samog stringa

tekst = "    ";
console.log(tekst);
console.log(tekst.trim);
