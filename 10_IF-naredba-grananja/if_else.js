console.log("IF-ELSE grananje");

// if (USLOV) {
//     Naredba koja se izvršava ili niz naredbi 	koje treba izvršiti ako je USLOV ispunjen} 
// else {
//   Naredba koja se izvršava ili niz naredbi 	koje treba izvršiti ako USLOV NIJE ispunjen}

if (true) {
    console.log("Uslov je ispunjen");
} else {
    console.log("Uslov nije ispunjen.");
}
if (false) {
    console.log("Uslov je ispunjen");
} else {
    console.log("Uslov nije ispunjen.");
}
////////////////////////////////////////////////
a = 8;
b = 7;
if (a < b) {
    console.log("Broj " + a + " je strogo manji od " + b);
} else {
    console.log(`Broj ${a} je strogo veci ili jednak od broja ${b} `);
}
//////////////////////////////////////////////// 
let god = 19;
if (god >= 18) {
    console.log("Osoba je punoletna.");
} else {
    console.log("Osoba je maloletna.");
}
//// ZADACI ///////
// 1. Za dva uneta broja ispisati koji je veći a koji je manji.

let x = 2;
let y = 3;

if (x <= y) {
    console.log(` Broj ${x} je manji ili jednak od broja ${y}`);
} else {
    console.log(` Broj ${x} je veci ili jednak od broja ${y}`);
}

// 2. Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.
let temp = -12;
if (temp >= 0) {
    console.log("Temperatura je u plusu");
    document.body.innerHTML = `<p style ="color: red;">Temperatura od ${temp} stepeni je u plusu.</p>`;
} else {
    console.log("Temperatura je u minusu");
    document.body.innerHTML = `<p style ="color: blue;">Temperatura od ${temp} stepeni je u minusu.</p>`
}

// 3. U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar. 
let pol = "m";

if (pol == "m") {
    // Prikazi avatar muskarca
    document.body.innerHTML += `<img src="img/male.png">`
} else {
    // Prikazi avatar zene
    document.body.innerHTML += `<img src="img/female.png">`
}

// 4. U odnosu na preuzeto trenutno vreme sa računara, ispisati da li je trenutno jutro ili popodne.
let datum = new Date();
let sati = datum.getHours();

if (sati <= 12) {
    console.log("Trenutno je prepodne.");
} else {
    console.log("Trenutno je poslepodne.");
}

// 5. Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.
let trGod = datum.getFullYear();
let unetaGod = 2010;
let razlikaUgod = trGod - unetaGod;

if (razlikaUgod => 18) {
    console.log("Osoba je punoletna");
} else {
    console.log("Osoba je maloletna");
}

/////   VAZNOOOOOOOOOOOO ////////////
// 6. Odrediti najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).
let b1 = 15;
let b2 = 9;
let b3 = 27;

let maks = b1; // pretpostavka

// Ako je moja pretpostavka losa, uradim njen update
if (maks < b2) {
    maks = b2;
}
if (maks < b3) {
    maks = b3
}
document.body.innerHTML += `<p>Najveci uneti broj je: ${maks}</p>`