"use strict";

console.log(" WHILE petlja");
/*
let i = 1;

console.log(i); // 1
i++;
console.log(i); // 2
i++;
console.log(i); // 3
i++;
console.log(i); // 4
i++;
console.log(i); // 5
i++;
*/

let i = 1;

while (i <= 5){
    console.log(i);
    i++;
}
console.log(`Vrednost promenljive i nakon while petlje je ${i}`);

///// VEZBANJE

// 1. Ispisati brojeve od 1 do 20:
// a. Svaki u istom redu
// b.Svaki u novom redu

// 1 a. Svi brojevi u istom redu
let rez = '';
i = 1;
while (i <= 20){
    rez += i + ' ';
    i += 1;
}
console.log(rez);

// 1 b. Svi brojevi u posebnom redu
i = 1;

while (i <= 20){
    console.log(i);
    i++;
}

// 2. Ispisati brojeve od 20 do 1.

i = 20;

while (i >= 1) {
    console.log(i);
    i--;
}

// 3. Ispisati parne brojeve od 1 do 20.
// 1 nacin
i = 1;

while (i <= 20){

    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

// 2 nacin
i = 2;

while (i <= 20){
    console.log(i);
    // i += 2;  ili
    i = i + 2;
}

// 4. Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje
// document.body.innerHTML += `<p style="color: red">1. paragraf.</p>`;
// document.body.innerHTML += `<p style="color: purple">2. paragraf.</p>`;
// document.body.innerHTML += `<p style="color: green">3. paragraf.</p>`;
// document.body.innerHTML += `<p style="color: red">4. paragraf.</p>`;
// document.body.innerHTML += `<p style="color: purple">5. paragraf.</p>`;
// document.body.innerHTML += `<p style="color: green">6. paragraf.</p>`;

let n = 16;
i = 1;

while (i <= n){
    // Doda se paragraf
    if (i % 3 == 1){
        document.body.innerHTML += `<p style="color: red">${i} paragraf.</p>`;
    } else if(i % 3 == 2){
        document.body.innerHTML += `<p style="color: purple">${i} paragraf.</p>`;
    } else {
        document.body.innerHTML += `<p style="color: green">${i} paragraf.</p>`;
    }
    i++;
}


// 5. Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira

// 6. Odrediti sumu brojeva od 1 do 100
i = 1;
let sum = 0;

while (i <=100){
    //Iskoristi i tako da se odredi suma
    sum = sum + i;
    i++;
}
console.log(`Suma brojeva 1 od 100 jednaka je ${sum}.`);

/*
-----------------------
#iteracija  | i | sum
-----------------------
    0       | 1 | 0
    1       | 2 | 1
    2       | 3 | 3
    3       | 4 | 6
    4       | 5 | 10
    .
    .
    .
    100     | 101 | 5050
*/

// 7. Odrediti sumu brojeva od 1 do n

n = 18;
i = 1;
sum = 0;

while(i <= n){
    sum += i; // isto sto i: sum = sum + i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} jednaka je ${sum}.`);

// 8. Odrediti sumu brojeva od n do m

// 9. Odrediti proizvod brojeva od n do m
n = 3;
let m = 6;
let proizvod = 1;
i = n; //koristi se jer kad bi n bila promenjljiva ne bi mogli da n koristimo u console.log

while ( i <= m ){
    // Iskoristi i da se izracuna proizvod
    proizvod = proizvod * i;
    i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} jednaka je ${proizvod}.`);

// 10. Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m
n = 5;
m = 6;

i = n;
sum = 0;

while (i <= m){
    if(i % 2 == 0){
        sum = sum + ( i * i);
    } 
    i++;
}
console.log(`Suma kvadrata parnih brojeva je ${sum}.`);


n = 3;
m = 6;

i = n;
sum = 0;

while (i <= m){
    if(i % 2 == 1){
        sum = sum + ( i * i * i)
    }
    i++;
}
console.log(`Suma kubova neparnih brojeva je ${sum}.`);

// 11. Odrediti sa koliko brojeva je deljiv uneti broj k
let k = 12;
i = 1;
let p = 0; // sa koliko brojeva je deljiv bez ostatka

while (i <= k){
    if(k % i == 0){
        p++;
    }
    i++;
}
console.log(`Broj ${k} je deljiv sa ${p} brojeva.`);



// 12. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
// Varijanta 1
// n = 31;
// i = 2;
// let p = 0;

// while (i < n){
//     if(n % i != 0){
//         // ulaze prosti brojevi

//     } else {
//         p = 1; // ulaze ostali brojevi
//     }
//     i++;
// }
// if (p == 0){
// console.log(`${n} je prost broj`);
// } else {
//     console.log(`${n} nije prost broj`);
// }

// Varijanta 2
n = 2;
i = 1;
p = 0; // sa koliko brojeva je deljiv bez ostatka

while (i <= n){
    if(n % i == 0){
        p = p + 1;
    }
    i++;
}
if (p == 2){
console.log(`${n} je prost broj`);
} else {
    console.log(`${n} nije prost broj`);
}
