"use strict";



/*
parentNode - Roditeljski čvor.
childNodes[nodenumber] - Direktni potomak sa zadatim indeksom.
firstChild - Prvi direktni potomak.
lastChild - Poslednji direktni potomak.
nextSibling - Sledeći rođak.
previousSibling - Prethodni rođak.
*/

/*
Svojstva mogu da se lančaju:
- elem.parentNode    - vraća roditelja
- elem.parentNode.parentNode     - vraća dedu
*/

///////////////   VEZBANJE   //////////////////////

// 1 Zadatak
// Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success
let paragrafi = document.querySelectorAll(`p`);

for (let i = 0; i < paragrafi.length; i++) {
    if(i % 2 == 0){
        paragrafi[i].classList.add("error");
    } else {
        paragrafi[i].classList.add("success");
    }
};

// 2 Zadatak
// Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.

paragrafi.forEach((par, i) => {
    if(i % 3 == 0){
        par.style.fontSize = `15px`;
    } else if(i % 3 == 1){
        par.style.fontSize = `20px`;
    } else if(i % 3 == 2){
        par.style.fontSize = `25px`;
    }
});

// 3 Zadatak
// Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
 // if(p.textContent.includes(’success’))

 paragrafi.forEach( par => {
    if(par.textContent.includes(`error`)){
        par.classList.add(`error`);
    } else if (par.textContent.includes(`success`)){
        par.classList.add(`success`);
    }
 });

 // 4 Zadatak
 // Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.

//  paragrafi.forEach(par => {
//      if(par.style.includes(`error`)){
//         par.classList.remove(`class`);
//      } else {
//         par.classList.add(`error`);
//      }
//  });

paragrafi.forEach( par => {
    par.classList.toggle(`error`);
});
