"use strict";

console.log(`--- CHAINING PROMISE ---`);

//////////////////////////////////////////
let getTodos = resource => {
    // 1. Kreiranje XML objekta
    const request = new XMLHttpRequest();

    // 2. Otvaranje kreiranog zahteva
    request.open(`GET`, resource);

    // 3. Slanje zahteva
    request.send();
    
    // cesce > return new Promise(............);
    let pr = new Promise((resolve, reject) => {
        request.addEventListener(`readystatechange`, () => {
            if(request.readyState === 4 && request.status === 200){
                // SVE OK
                // console.log(request.responseText);
                // callback(request.responseText, undefined);
                // const data = JSON.parse(request.responseText);
                // console.log(data);
    
                resolve(request.responseText);
    
            } else if(request.readyState === 4){
                // Nesto nije OK
                // console.log(`Could not fetch the data`);
                // callback(undefined, `Could not fetch the data`);
    
                reject(`Could not fetch the data`);
    
            };
        });
    });
    return pr; // Vracam objekat promise
};
// Zelim >
// 1. da se ucita todos.json 
// 2. da se ucita fruits.json
// 3. trece da se ucita vegetables.json
getTodos(`../JSON/todos.json`)
.then(data => { // todos
    console.log(`Promise todos resolved`, data);
    return getTodos(`../JSON/fruits.json`); // vracam promise
})
.then(data => { // fruits
    console.log(`Promise fruits resolved`, data);
    return getTodos(`../JSON/vegetables.json`);
})
.then(data => { // vegetables
    console.log(`Promise vegetables resolved`, data);
})
.catch(err => { // reject neki json
    console.log(`Promise rejected`, err);
});

console.log(`KRAJ`);
