"use strict";

console.log(`Arrow funkcije`);

function suma(a, b){ // definicija funkcije
    return a + b;
}
console.log(suma(4, 5)); // poziv funkcije
console.log(suma(1, 0)); // poziv funkcije


// Anonimne funkcije – funkcije koje nemaju ime, već se smeštaju u promenljivu, a poziv funkcije se ostvaruje pozivom promenljive:

let suma2 = function(a, b){
    return a + b;
}
console.log(suma2(4, 5));


// Arrow funkcije (Fat Arrow Funkcije) – skraćen zapis anonimnih funkcija

let suma3 = (a, b) => {
    return a + b;
}
console.log(suma3(5, 3));


// Arrow funkcija za ispis poruke

let hello = () => {
    console.log(`Hello World!`);
}
hello();

let pozdrav = (ime, prezime) => {
    console.log(`Zdravo ${ime} ${prezime}.`);
}
pozdrav("Lara", "Rakocevic");
pozdrav("Stefan", "Stanimirovic");


// Arrow funkcija kojoj se prosledjuje ime i god korisnika, a ona ispisuje ime i da li je korisnik punoletan ili ne

let ispis = (ime, godine) => {
    if(godine < 18){
        let poruka = `Korisnik ${ime} je maloletna osoba.`;
        document.body.innerHTML += `<p style="color: blue">${poruka}</p>`
    } else {
        let poruka = `Korisnik ${ime} je punoletna osoba.`;
        document.body.innerHTML += `<p style="color: green">${poruka}</p>`
    }
}
ispis(`Pera`, 28);
ispis(`Mika`, 16);


/////////////// ZADACI ///////////////////

// 3.	Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

//ili // let neparan = n => {
//     if (n % 2 != 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// let neparan = n => (n % 2 != 0);

let neparan = n => n % 2 != 0 ? true : false;

console.log(neparan(22));

// 4.	Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

// let maks2 = (br1, br2) => {
//     if(br1 > br2){
//         return (`${br1} je veci od ${br2}.`);
//     } else if (br1 < br2){
//         return  (`${br2} je veci od ${br1}.`);
//     } else {
//         return `Brojevi su jednaki.`;
//     }
// }
// let max2 = maks2(50, 50);
// console.log(max2);

// let maks4 = (br1, br2, br3, br4) => {
//     let max = br1;
//     if( max < br2){
//         max = br2;
//     }
//     if(max < br3){
//         max = br3;
//     }
//     if(max < br4){
//         max = br4;
//     }
//     return `Najveci je broj ${max}.`;
// }
// console.log(maks4(5, 201, 50, 50));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let max2 = (a, b) => (a > b) ? a : b; // ternari 

console.log(max2(9, 9));

// ili // let max4 = (br1, br2, br3, br4) => {
//     // let m1 = max2(br1, br2);
//     // let m2 = max2(br3, br4);
//     // let m = max2(m1, m2);
//     // return m;
//     return max2(max2(br1, br2), max2(br3, br4));
// }

//ili // let max4 = (br1, br2, br3, br4) => max2(max2(br1, br2), max2(br3, br4)); 

let max4 = (br1, br2, br3, br4) => max2(max2(max2(br1, br2), br3), br4); 

console.log(max4(6, 19, -5, 9));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.	Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

let slika = putanja => {
    return document.body.innerHTML += `<img src="${putanja}">`;
}
slika("https://cdn2.emmezeta.rs/media/catalog/product/cache/01cb2cb658d395381faf29e7336ee183/6/0/602852-slika-colorful-butterfly-h100-cm_1.jpg");

// Stefanovo resenje
let slika2 = putanja => `<img src="${putanja}">`;

document.body.innerHTML += slika2("https://cdn2.emmezeta.rs/media/catalog/product/cache/01cb2cb658d395381faf29e7336ee183/6/0/602852-slika-colorful-butterfly-h100-cm_1.jpg");


// 6.	Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

let color = color => {
    return document.body.innerHTML += `<p style="color: ${color}">Neki paragraf.</p>`;
}
color("blue");

// 7.	Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

let sedmiDan = n => (n % 7 == 0) ? `Ned` : (n % 7 == 1) ? `Pon` : (n % 7 == 2) ? `Uto` : (n % 7 == 3) ? `Sred` : (n % 7 == 4) ? `Cetv` : (n % 7 == 5) ? `Pet` : `Sub`;

for (let i = 0; i < 7; i++){
    console.log(sedmiDan(i))
}

// let sedmiDan = n => {
//     if(n % 7 == 0){
//         console.log(`Nedelja`);
//     } else if(n % 7 == 1){
//         console.log(`Ponedeljak`);
//     } else if(n % 7 == 2){
//         console.log(`Utorak`);
//     } else if(n % 7 == 3){
//         console.log(`Sreda`);
//     } else if(n % 7 == 4){
//         console.log(`Cetvrtak`);
//     } else if(n % 7 == 5){
//         console.log(`Petak`);
//     } else if(n % 7 == 6){
//         console.log(`Subota`);
//     } else {
//         console.log(`Unos nije dobar.`)
//     }
// }
// sedmiDan(20);

// let mesecUgodini = n => {
//     n = n % 7;
//     switch(n){
//         case 1 :
//             console.log(`Januar`);
//             break;
//         case 2 :
//             console.log(`Februar`);
//             break;
//         case 3 :
//             console.log(`Mart`);
//             break;
//         case 4 :
//             console.log(`April`);
//             break;
//         case 5 :
//             console.log(`Maj`);
//             break;
//         case 6 :
//             console.log(`Jun`)
//             break;
//         case 7 :
//             console.log(`Jul`);
//             break;
//         case 8 :
//             console.log(`Avgust`);
//             break;
//         case 9 :
//             console.log(`Septembar`);
//             break;
//         case 10 :
//             console.log(`Oktobar`);
//             break;
//         case 11 :
//             console.log(`Novembar`);
//             break;
//         case 12 :
//             console.log(`Decembar`);
//             break;
//         default :
//             console.log(`Unos nije dobar`);
//     }
// }
// mesecUgodini(20);


// 8.	Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.

// FOR Petlja NE MOZE SKRACENO
let deljivSaTri = (n, m) => {
    let prebrojavanje = 0;
    for(let i = n; i <= m; i++){
        if(i % 3 == 0){
            console.log(i);
            prebrojavanje++;
        }
    }
    return prebrojavanje;
}
console.log(deljivSaTri(2, 15));


// 9.	Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.

let sumiraj = (n, m) => {
    let sum = 0;
    for(let i = n; i <= m; i++){
        sum += i;
    }
    return sum;
}
console.log(sumiraj(2, 10));


// 10.	Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

let mnozi = (n, m) => {
    let pr = 1;
    for(let i = n; i <= m; i++){
        pr *= i;
    }
    return pr;
}
console.log(mnozi(2,4));


// 11.	Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

let arSr = (n, m) => {
    let br = 0;
    let bb = 0;
    for(let i = n; i <= m; i++){
        br += i;
        bb++;
    }
    return br / bb;
}
console.log(arSr(2, 10));


// 12.	Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

let arSr2 = (n, m) => {
    let br = 0;
    let bb = 0;
    for(let i = n; i <= m; i++){
        if(i % 3 == 0){
            br += i;
            bb++;
        }
    }
    return br / bb;
}
console.log(arSr2(2, 10));


// 13.	Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

let prVelFont = a => `<p style="font-size: ${a}px;">Tekst koji ima prosleđenu veličinu fonta.</p>`;

document.body.innerHTML += prVelFont(50);

// 14.	Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 

let petPuta = (recenica, boja) => {
    for(let i = 5; i < 10; i++){
        document.body.innerHTML += `<p style="font-size: ${i * 10}px; color: ${boja};">${recenica}</p>`
    }
}
petPuta("Neki paragraf", "red");

/* 15.
Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
 Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
 Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

*/

let programerskaPraksa = (n, a, d) => {
    let suma = a;

    for(let i = 2; i <= n; i++){
       if(i >= 2){
           suma += a + d;
       }
    }
    return suma;
}
console.log(programerskaPraksa(3, 50000, 5000));


/* 16.	Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
npr: t=15, p=20, n=25, čekanje je 0s
npr: t=15, p=10, n=12, čekanje je 7s
*/

let poligon = (t, p, n) => (p > t || t >= p + n) ? `Treba da krene da trci.` : `Treba da ceka: ${n + p - t} sekundi`;

console.log(poligon(15, 10, 12));