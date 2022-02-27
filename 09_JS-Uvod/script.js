console.log("Pozdrav iz JS datoteke");

let a = 3, b = 6; // isto kao da smo deklarisali b, let b = 6
console.log(a * b);
console.log("Pera" + "Stankovic");
console.log("Pera" * "Stankovic");

b = b / a; // isto sto i b /= a
console.log(a, b); // a = 3, b = 2
a = b * a + a; // 2 * 3 + 3 = 6 + 3 = 9
console.log(a, b); // a = 9, b = 2
b = (a - 2 * b) / b; // (9 - 2*2) / 2 = (9 - 4) / 2 = 5 / 2 = 2.5
console.log(a, b); // 9 2,5

// a = a + 10; // 9 + 10 = 19
a += 10; // isto kao i ovo gore
console.log(a); // a = 19
b /= a;
console.log(b);

// a = a + 1; 
// a += 1
// a++
++a
console.log(a);

let c = 5;
console.log(c++); // Prvo se iskoristi stara vrednost promenljive u izrazu, pa se onda vrednost promenljive poveca
console.log(c); // nova vrednost - 6

let d = 3;
console.log(++d); // Prvo se vrednost promenljive poveca za 1, a onda se nova vrednost koristi u izrazu
console.log(d); // ista vrednost - 4

c = 4;
d = 3;
x = (c++) * (--d); // 4 * 2 = 8
console.log(c, d, x); // c = 5, d = 2, x = 8

// OSTATAK PRI DELJENJU - % (modularna aritmetika)
console.log(7 % 2); // 7 = 3 * 2 + 1 = 1
console.log(9 % 2); // Ostatak pri deljenju
console.log(180 % 60); // 180 = 3 * 60 + 0 moguci rezultati: 0, 1, 2, 3 .....59

// Prof. (42 % 13) + 1 = 1    -> (1, 2 ...12, 13) 

console.log(365 % 7); // 1 , zato svaka nova godina se pomera za 1 (prestupna za 2)

// STEPENOVANJE
console.log(4 ** 3); // 16 * 4 = 64

c = 3;
d = 1 + (c ** 3); // 1 + (3 ** 3) = 1 + 27 = 28
console.log(d);

// ( c (sta se deli) * 3 (koliko se deli) ) = 27
