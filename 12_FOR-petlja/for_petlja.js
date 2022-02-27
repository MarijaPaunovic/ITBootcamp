"use strict";

console.log("proba FOR petlje");

//// Kombinacija WHILE i FOR petlje - radi vezbanja
/* let a = 1;

while (a <= 5){
    console.log(`Na redu je broj: ${a}. - WHILE petlja`);
    a++;
}
1.
for (let i = 1; i <= 5; i++){
    console.log(`Na redu je broj: ${i}. - FOR petlja`);
}
2.
let i = 1;
for (i; i <= 5; i++){
    console.log(`Na redu je broj: ${i}. - FOR petlja`);
}
*/
//////////////////////////////////////////////////////
// for (let i = 1, k = 5; i <= k; i++){
//     console.log(i);
// }
//////////////////////////////////////////////////////


///////////////////  ZADACI  ///////////////////////////////////
// 2. Ispisati brojeve od 20 do 1
// for (i = 20; i >= 1; i--){
//     console.log(i);
// }

// 3. Ispisati parne brojeve od 1 do 20 
// Prvi nacin
// for (i = 1; i <= 20; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }
// Drugi nacin
//  for (i = 2; i <= 20; i = i + 2 ){
//     console.log(i);
//  }

 // Treci nacin - cudan nacin
//  for (i = 2; i <= 20; i++, i++ ){
//     console.log(i);
//  }

// 5. Odrediti sumu brojeva od 1 do n
// let suma = 0;
// for (let i = 1, n = 100; i <= n; i++ ){
//     suma = suma + i; // suma += i;
// }
// console.log(`Suma brojeva od 1 do 100 je ${suma}.`);

// 7. Odrediti proizvod brojeva od n do m
// let n = 2;
// let m = 6;
// let p = 1; // proizvod

// for (let i = n; i <= m; i++){
//     p = p * i;
// }
// console.log(`Proizvod brojeva od ${n} do ${m} je ${p}.`);

// 9. Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
//<img src="img/1.jpg">
//<img src="img/2.jpg">
//<img src="img/3.jpg">
// for (let i = 1; i <= 3; i++){
//     document.body.innerHTML += `<img src="img/${i}.jpg">`;
// }

// 11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
// let br = 0;
// for (let i = 5; i <= 150; i++){
//     if(i % 13 == 0){
//         // console.log(i);
//         br++;
//     }
// }
// console.log(`U intervali od 5 do 150 ima ${br} brojeva deljivih sa 13.`);

// 12. Ispisati aritmetičku sredinu brojeva od n do m.
//sumu br od n do m i treba da sumu podelimo sa brojevima od n i m
// sve saberes pa podelis sa brojem brojeva od n do m
// let n = 5;
// let m = 10;
// let suma = 0;
// let br = 0;

// for (let i = n; i <= m; i++){
//     suma += i; // suma = suma + 1;
//     br++; // br = br + 1;
//     console.log(`Suma je: ${suma}`);
//     console.log(`Broj je sada: ${br}`)
// }
// let as = suma / br; // 45 / 6 = 7.5
// console.log(`Aritmeticka sredina brojeva od ${n} do ${m} je ${as}`);

/*
10 + 7 + 9 + 8 = 34 - suma ocena
 1 + 1 + 1 + 1 = 4 - broj ocena

 i 
*/

// 15. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.
// poslednja cifra se odredjuje po modulu 10
// 426 % 10 = 6;
// 9465 % 10 = 5;
// 41 % 10 = 1;

// let n = 3;
// let m = 45;
// let suma = 0;
// let br = 0;

// for (let i = n; i <= m; i++){
//     if (i % 10 == 4 ){
//         console.log(i);
//         br++;
//         suma += i;
//     }
// }
// console.log(`Broj brojeva izmedju ${n} i ${m} kojima je poslednja cifra 4 je: ${br}.`);
// console.log(`Suma brojeva izmedju ${n} i ${m} kojima je poslednja cifra 4 je: ${suma}.`);

//16. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
// let n = 5;
// let m = 10;
// let a = 3;
// let suma = 0;

// for (let i = n; i <= m; i++){
//     if (i % a != 0){
//         suma += i; // suma = 0; suma = 5; suma = 12; suma = 20; 
//     }
// }
// console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi sa brojem ${a} je: ${suma}.`);

// 17. Odrediti proizvod brojeva od n do m koji su deljivi brojem a
// let n = 2;
// let m = 9;
// let a = 3;
// let suma = 1;

// for (let i = n; i <= m; i++){
//     if(i % a == 0){
//         suma *= i;
//     }
// }
// console.log(`Proizvod brojeva od ${n} do ${m} koji su deljivi sa brojem ${a} je: ${suma}.`);


// 18. Odrediti sa koliko brojeva je deljiv uneti broj k
// FOR petljom
let k = 6;
let br = 0;

for (let i = 1; i <= k; i++){
    if (k % i == 0){
        // console.log(i);
        br++;
    }
}
console.log(`Broj ${k} je deljiv sa ${br} broja.`);

// WHILE petljom
k = 4;
br = 0;
let i = 1;

while (i <= k){
    if (k % i == 0){
        br++;
    }
    i++;
}
console.log(`Broj ${k} je deljiv sa ${br} broja.`);

// 19. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
// Samo se nadovezujemo na prethodni zadatak
if (br == 1){
    console.log(`Broj ${br} nije ni prost ni slozen.`);
} else if (br == 2){
    console.log(`Broj ${br} je prost.`);
} else {
    console.log(`Broj ${br} je slozen.`);
}

let n = 16;

if (n == 1){
    console.log(`Broj ${n} nije ni prost ni slozen.`);
} else if (n == 2){
    console.log(`Broj ${n} je prost.`);
} else {
    console.log(`Broj ${n} je slozen.`);
}

// 20. Napraviti tabelu sa 6 redova. Svaki red tabele treba da ima po dve ćelije (dve kolone). Svakom parnom redu dodati klasu „obojen“. Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 
// let t = 6;
// let color = `background-color: pink;`;

// for (let i = 1; i <= t; i++){
//     if (i % 2 == 0){
//         document.body.innerHTML += `<table style="border: 1px solid black; ${color}"><tr><td>Tekst</td><td>Tekst</td></tr></table>`;
//     } else {
//         document.body.innerHTML += `<table style="border: 1px solid black;"><tr><td>Tekst</td><td>Tekst</td></tr></table>`;
//     }
// }

// 2. nacin - tacan nacin
// let tabela = `<table style="border: 1px solid black;">`;
// for (let red = 1; red <= 6; red++){
//     if (red % 2 == 0){
//         tabela += `<tr style="background-color: pink;"><td>lalala</td><td>lalala</td></tr>`;
//     } else {
//         tabela += `<tr><td>Tekst</td><td>Tekst</td></tr>`;
//     }
// }
// tabela += `</table>`;
// document.body.innerHTML += tabela;

// 21.Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.
let ul = `<ul>`;
for (let i = 1; i <= 10; i++){
    if (i % 3 == 0){
        ul += `<li style="color: violet; margin-left: 40px; list-style-type: circle;">Element ${i}</li>`
    // } else if (i % 3 == 0){
    //     ul += `<li>Element ${i+1}</li>`
    } else  {
        ul += `<li>Element ${i}</li>`
    }
}
ul += `</ul>`;
document.body.innerHTML += ul;