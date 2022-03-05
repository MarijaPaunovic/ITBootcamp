"use strict";

console.log(`DOM - Menjanje sadrzaja elemenata`);

//////////////////////////////////////////////////
let p1 = document.querySelector(`#p1`);
p1.innnerHTML += `Promenjen <span> tekst</span> paragrafa.`

let sviLinkovi = document.querySelectorAll(`a`);
sviLinkovi.forEach(link => {
    // HTML atributi
    link.href = `https://www.google.com`;
    link.target = `_blank`;

    // CSS stilovi
    link.style.color = "green";
    link.style.textDecoration = "none";

    // Moze i ovako - primer 2
    link.style = "color: blue; text-decoration: none;";

    // Preko metode - primer 3
    link.setAttribute(`name`, `link2`); // isto kao i link.name = "link2"; kada se koristi += mora link.name += "link2", preko metode ne radi
    link.setAttribute(`style`, `color: red; text-decoration: none;`);
})

//////////////////   VEZBANJE   //////////////////////

// 1 Zadatak
//Selektovati sve paragrafe i u svakom od njih pridodati tekst „VAŽNO!!!“

let paragrafi = document.querySelectorAll(`p`);
paragrafi.forEach( p => {
    p.innerHTML += `VAŽNO!!!`;
});

// 2 Zadatak
// Svim divovima na stranici sa klasom “error”, dodati po jedan naslov najveće veličine sa tekstom “Greška!”.
let divError = document.querySelectorAll(`div.error`);
divError.forEach( div => {
    div.innerHTML += `<h1>Greška!</h1>`;
});

// 3 Zadatak
// Neka je 𝑛 broj paragrafa u datom dokumentu. U svakom 𝑖-tom paragrafu dodati broj 𝑖^2, za svako 𝑖=1, 2, …, 𝑛.
paragrafi.forEach((p, i) => {
    p.innerHTML += (i + 1) ** 2;
});

// 4 Zadatak
// Svim slikama dodati alternativni tekst.
let slike = document.querySelectorAll(`img`);
slike.forEach( sl => {
    // sl.alt = `Alternativni tekst`;
    sl.setAttribute(`alt`, `neki alt`)
})

// 5 Zadatak
// Svim paragrafima postaviti atribut style tako da budu obojeni ljubičastom bojom.
paragrafi.forEach(p => {
    // p.style.color = `purple`;
    p.setAttribute(`style`, `color: purple;`);
});

// 6 Zadatak
// Svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju.
paragrafi.forEach( (par, i) => {
    if(i % 2 == 0){
        par.style.backgroundColor = `green`;
    } else {
        par.style.backgroundColor = `yellow`;
    }
});

// primer 2
// let parniParaf = document.querySelectorAll(`p:nth-child(even)`);
// parniParaf.forEach( el => {
//     el.style.backgroundColor = `blue`;
// })

// 7 Zadatak
// Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none. Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.
sviLinkovi.forEach( (link, i) => {
    link.style.padding = `5px`;
    link.style.fontSize = `18px`;
    link.style.textDecoration = `none`;
    if(i % 2 != 0){
        link.style.backgroundColor = `green`;
        link.style.color = `purple`;
    } else {
        link.style.backgroundColor = `blue`;
        link.style.color = `white`;
    }
});

// 8 Zadatak
//Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju. 

// let pngslike = document.querySelectorAll('img[src*=".png"]');

slike.forEach(slika => {
    if(slika.src.endsWith(`.jpg`)){
        slika.style.border = `2px solid red`;
    }
});

// ili 
// slike.forEach(slika => {
//     if(link.src.indexOf(`.png`) > -1 || link.src.indexOf(`.PNG`) > -1){
//         slika.style.border = `2px solid red`;
//     }
// });


// 9 Zadatak
// Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank. 
sviLinkovi.forEach( link => {
    // let blank = link.target = `_blank`;
    if(link.target == `_blank`){
        link.target = `_top`;
    } else {
        link.target = `_blank`;
        // blank;
    }
});

// 10 Zadatak
// Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati:
// - Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.
// - U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.
// - U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele.

let nizImena = [`Marija`, `Lara`, `Marko`, `Ivana`, `Jovana`];

// - Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.
nizImena.forEach(imena =>{
    // document.body.innerHTML += `<a href="#">${imena}</a>`;
    if(imena.startsWith(`S`)){ // if(imena[0]=="S")
        document.body.innerHTML += `<a href="#" target="_blank">${imena}</a>`;
    } else {
        document.body.innerHTML += `<a href="#">${imena}</a>`;
    }
})

//- U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.
let rez = `<ul>`;
nizImena.forEach((imena, i) => {
    if(i % 2 == 0){
        rez += `<li style="color: purple">${imena}</li>`
    } else {
        rez += `<li style="color: pink">${imena}</li>`
    }
})
rez += `</ul>`;
document.body.innerHTML += rez;

// - U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele.
let tabela = `<table><tr>`;
nizImena.forEach(imena => {
    tabela += `<td style="border: 1px solid blue; margin: 5px; padding: 10px">${imena}</td>`;
});
tabela += `</tr></table>`;
document.body.innerHTML += tabela;