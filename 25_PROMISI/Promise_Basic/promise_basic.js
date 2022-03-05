"use strict";

let getSomething = () => {
    // ili samo return new Promise....
    let obj = new Promise((resolve, reject) => {
        resolve(`- Nesto resolve -`); // Sve ok proslo onda je resolve
        reject(`- Nesto reject -`); // Nesto nije ok proslo 
    });
    // console.log(obj);
    return obj; // vraca promise objekat
};
// Ako je promise vratio resolve, realizuje se .than() grana
// Ako je promise vratio reject realizuje se .catch() grana
getSomething().then( data => {
    console.log(`Aktivirana je .then grana ${data}.`);
}).catch( err => {
    console.log(`Aktivirana je .catch grana ${err}.`);
})