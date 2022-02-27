"use strict";

/*
1.	Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić. 
*/

function pozdrav(ime, prezime){
    console.log(`Zdravo ${ime} ${prezime}.`)
}
pozdrav("Lara", "Rakocevic");

/*
2.	Napisati funkciju zbir koja računa zbir dva realna broja.
Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
*/

function racunaj(br1, br2, operacija){
    if(operacija == "+"){
        let rezultat = br1 + br2;
        console.log(rezultat);
    } else if(operacija == "-"){
        let rezultat = br1 - br2;
        console.log(rezultat);
    } else if(operacija == "*"){
        let rezultat = br1 * br2;
        console.log(rezultat);
    } else if(operacija == "/"){
        if(br2 == 0){
            console.log(`Deljenje nulom nije dozvoljeno.`)
        } else {
            let rezultat = br1 / br2;
            console.log(rezultat);
        }
    } else{
        console.log(`Pogrešan unos.`);
    }
}
racunaj(5, 4, "+");
racunaj(5, 4, "-");
racunaj(5, 4, "*");
racunaj(5, 4, "/");
racunaj(5, 4, "%");
racunaj(5, 0, "/");

/////////////////////////////////////

// Primer 1 za scope i let
if(true){
    let test = "Zdravo.";
    if(true){
        console.log(test);
    }
}
// console.log(test); // Ovde ne vidi test jer je definisan sa let, koji je vidljiv samo u if scope

// Primer 2 za scope i let
if(true){
    let test = "Zdravo."; // Linija *
    console.log(test); // Ispisuje Zdravo koji je dodeljen liniji *
    if(true){
        let test = "Hello"; // Linija **
        console.log(test); // Ovde vidi test linije iz linije ** jer je u tom scope
    }
    console.log(test); // Ovde vidi test iz linije *
}
// console.log(test); // Ovde ne vidi uopste test

// Primer 3 za scope i let
if(true){
    let test = "Zdravo."; // Linija *
    console.log(test); // Ispisuje Zdravo koji je dodeljen liniji *
    if(true){
        test = "ZZZ";
        console.log(test)
        // let test = "Hello"; // Ovo ne radi - kada se ponovo definise sa let
        console.log(test); // Ovde vidi test linije iz linije ** jer je u tom scope
    }
    console.log(test); // Ovde vidi test iz linije *
}

// let vidim samo u okviru scopa dok var vidim i izvan scopa
if(true){
    var proba = "proba"; // ako ne stavimo ni let ni var ispred promenljive, promenljiva se racuna kao da je var
}
console.log(proba);

if(true){
    var promenljiva = "Promenljiva";
    if(true){
        var promenljiva = "hmmmmm"; // var promenljiva se posmatra na globalnom nivou
        console.log(promenljiva);
    }
    console.log(promenljiva);
}

///////////////////////////////////////////////////////////////////////////////////////
/*
3.	Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
*/

function neparan(n){
    if (n % 2 != 0){
        return true; // neparan - moze i "Tacno"
    } else {
        return false; // paran - moze i "Netacno"
    }
}
let nep = neparan(13);
console.log(nep);

// Primer 2
function neparan1(n){
    let rez = true;
    if(n % 2 == 0){
        rez = false;
    }
    return rez;
}
let nep1 = neparan1(10);
console.log(nep1);

// Primer 3
function neparan2(n){
    return (n % 2 != 0);
}
let nep2 = neparan2(11);
console.log(nep2);

////////////////////////////////////////////////////////////////////////////////////////////
/*
4.	Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
*/
function maks2(x, y){
    if(x > y){
        return (`${x} je veci od ${y}`);
    } else if (y > x){
        return (`${y} je veci od ${x}`);
    } else {
        return (`Brojevi su jednaki.`)
    }
}
console.log(maks2(9, 6));

function maks4(a, b, c, d){
    let maks = a;
    if(maks < b){
        maks = b;
    } 
    if(maks < c){
        maks = c;
    } 
    if(maks < d){
        maks = d;
    }
    return maks;
}

let rez = maks4(3, 12, 8, 1);
console.log(rez);

// Jelenin predlog
function maks2(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
let m2 = maks2(60, 60)
console.log(m2);

// Vukašinov predlog
function maks4_vukaasin(a, b, c, d) {
    if (a > b && a > c && a > d) {
        return a;
    } else if (b > a && b > c && b > d) {
        return b;
    }
    else if (c > a && c > b && c > d) {
        return c;
    } else if (d > a && d > b && d > c) {
        return d;
    }
    else {
        return "Pogresan unos ili su brojevi jednaki."
    }
}
let m4 = maks4_vukaasin(9000, 9000, 9000, 9000)
console.log(m4);


// Marijin predlog
function maks4_marija(a, b, c, d) {
    let max1 = a;
    if (max1 < b) {
        max1 = b;
    }
    if (max1 < c) {
        max1 = c;
    }
    if (max1 < d) {
        max1 = d;
    }
    // if (a == b && a==c && a==d) {max1 = `Sva 4 broja su ista.`;}
    return max1;
}
let cetiriBroja = maks4_marija(15, 79, 30, 444);
console.log(`Najveci broj od navedena 4 broja je ${cetiriBroja}.`);

// Jelenin predlog
function maks4_jelena(a, b, c, d) {
    let max1 = maks2(a, b); // Vrati mi koji je veći broj između a i b npr. 5 i 7 vratiće 7
    let max2 = maks2(c, d); // Vrati mi koji veći broj između c i d npr. 2 i 9 vratiće 9
    let max = maks2(max1, max2);
    return max;
}
let maks4broja = maks4_jelena(5,7,2,9);
console.log(maks4broja);

// Aleksandrov predlog
function maks4_aleksandar(a, b, c, d) {
    let max = maks2(maks2(a, b), maks2(c, d));
    return max; 
    // Ili zadatak rešiti u jednoj liniji kao 
    // return maks2(maks2(a, b), maks2(c, d));
}
let maks4brojaa = maks4_aleksandar(5,17,2,9);
console.log(maks4brojaa);



// 5.	Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
function slika(putanja){
    return document.body.innerHTML += `<img src="${putanja}">`;
}
slika("https://cdn2.emmezeta.rs/media/catalog/product/cache/01cb2cb658d395381faf29e7336ee183/6/0/602852-slika-colorful-butterfly-h100-cm_1.jpg");

// 6.	Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function color(color){
        return document.body.innerHTML += `<p style="color: ${color}">Crveni paragraf.</p>`;
}
color("red");

/* 
7.	Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

*/

function sedmiDan(n){
    if(n % 7 == 0){
        console.log(`Nedelja`);
    } else if(n % 7 == 1){
        console.log(`Ponedeljak`);
    } else if(n % 7 == 2){
        console.log(`Utorak`);
    } else if(n % 7 == 3){
        console.log(`Sreda`);
    } else if(n % 7 == 4){
        console.log(`Cetvrtak`);
    } else if(n % 7 == 5){
        console.log(`Petak`);
    } else if(n % 7 == 6){
        console.log(`Subota`);
    } else {
        console.log(`Unos nije dobar.`)
    }
}
sedmiDan(16);
sedmiDan(0);
sedmiDan(7);
sedmiDan(365);

function mesecUgodini(n){
    n = n % 7;
    switch(n){
        case 1 :
            console.log(`Januar`);
            break;
        case 2 :
            console.log(`Februar`);
            break;
        case 3 :
            console.log(`Mart`);
            break;
        case 4 :
            console.log(`April`);
            break;
        case 5 :
            console.log(`Maj`);
            break;
        case 6 :
            console.log(`Jun`)
            break;
        case 7 :
            console.log(`Jul`);
            break;
        case 8 :
            console.log(`Avgust`);
            break;
        case 9 :
            console.log(`Septembar`);
            break;
        case 10 :
            console.log(`Oktobar`);
            break;
        case 11 :
            console.log(`Novembar`);
            break;
        case 12 :
            console.log(`Decembar`);
            break;
        default :
            console.log(`Unos nije dobar`);
    }
}
mesecUgodini(2);

// Bojan
function mesec(n) {
    if (n % 12 == 0) {
      console.log(`Januar`);
    } else if (n % 12 == 1) {
      console.log(`Februar`);
    } else if (n % 12 == 2) {
      console.log(`Mart`);
    } else if (n % 12 == 3) {
      console.log(`April`);
    } else if (n % 12 == 4) {
      console.log(`Maj`);
    } else if (n % 12 == 5) {
      console.log(`Jun`);
    } else if (n % 12 == 6) {
      console.log(`Jul`);
    } else if (n % 12 == 7) {
      console.log(`Avgust`);
    } else if (n % 12 == 8) {
      console.log(`Septembar`);
    } else if (n % 12 == 9) {
      console.log(`Oktobar`);
    } else if (n % 12 == 10) {
      console.log(`Novembar`);
    } else if (n % 12 == 11) {
      console.log(`Decembar`);
    }
  }
  mesec(200);
  

/* 8.	Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
Prebrojati koliko ima ovakvih brojeva od n do m.
*/

function deljivSaTri(n, m){
    let prebrojavanje = 0;
    for(let i = n; i <= m; i++){
        if(i % 3 == 0){
            console.log(i);
            prebrojavanje++;
        }
    }
    console.log(`Broj brojeva deljivih sa 3 u intervalu od ${n} do ${m} je ${prebrojavanje}.`);
}
deljivSaTri(2, 15);


// 9. Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function sumiraj(n, m){
    let sum = 0;
    for(let i = n; i <= m; i++){
        sum += i;
    }
    return sum;
}
let sum = sumiraj(3, 12);
console.log(sum);


// 10.	Napisati funkciju množi koja određuje proizvod brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n, m){
    let pr = 1;
    for(let i = n; i <= m; i++){
        pr *= i;
    }
    return pr;
}
let proiz = mnozi(4, 7);
console.log(proiz);


// 11.	Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

// function aritmetickaSredina(n, m){
//     let sum = 0;
//     let br = 0;
//     let arSr = sum / br;
//     for(let i = n; i <= m; i++){
//         sum += i;
//         br++;
//     }
//     return arSr;
// }
// console.log(aritmetickaSredina(2, 8));


// 13.	Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
// DOMACI


// 14.	Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 

function petPuta(recenica, boja){
    for(let i = 5; i <= 10; i++){
        document.body.innerHTML += `<p style="font-size: ${i * 10}px; color: ${boja};">${recenica}</p>`
    }
}
petPuta("Neki paragraf", "red");


/* 15.  
Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
 Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
 Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
*/

// Kolika je plata poslednjeg meseca
function programerskaPraksa(n, a, d){
    for(let i = 2; i <= n; i++){
        a += d;
    }
    return a;
}
let praksa = programerskaPraksa(1, 1000, 150);
console.log(praksa);


// Resenje
function programerskaPraksa(n, a, d){
    let suma = a; // da izbegnemo   if (i==1)   jer prvog meseca nema povisice

    for(let i = 2; i <= n; i++){
       if(i >= 2){
           suma += a + d; // povisica (d)
       }
    }
    return suma;
}
let praksa1 = programerskaPraksa(3, 50000, 5000);
console.log(praksa1);

// Jednostavnije resenje - Jelena
let n = 3;
let a = 5000;
let d = 200;
// 1. mesec - 5000
// 2. mesec - 5000+200
// 3. mesec - 5000+200

// Koliko novca ukupno primamo
let ukupno = a * n + d * (n - 1); // plate + povisice
console.log(ukupno);

let ukupno1 = n * (a + d) - d; // plate sa povisicama - 1. mesec kada nemam povisicu
console.log(ukupno1);

let ukupno2 = a + (n - 1) * (a + d); // plata za prvi mesec + plata za preostalih n-1 meseci
console.log(ukupno2);


/* 16.
16.	Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
npr: t=15, p=20, n=25, čekanje je 0s
npr: t=15, p=10, n=12, čekanje je 7s
*/

function poligon(t, p, n){
    let cekanje = n + p - t;
    if (p > t || t >= p + n){
        return `Treba da krene da trci.`;
    } else {
        return `Treba da krene ${cekanje} sec da ne bi cekao na mostu.`
    }
}
console.log(poligon(15, 10, 12));

// Kristina
function vreme(t, p, n) {
    let čekaj = n + p - t;
    if (p > t || t >= p + n) {
        console.log(`Burke samo piči`);
    }
    else {
        console.log(`Burke treba da krene kroz ${čekaj} sec da ne bi čekao most`);
    }
}
vreme(15, 10, 12);