"use strict";

console.log(`--- Promisi - Callback Hell ---`);

//////////////////////////////////////////
let getTodos = (resource, callback) => {
    // 1. Kreiranje XML objekta
    const request = new XMLHttpRequest();

    request.addEventListener(`readystatechange`, () => {
        if(request.readyState === 4 && request.status === 200){
            // SVE OK
            // console.log(request.responseText);
            callback(request.responseText, undefined);
            // const data = JSON.parse(request.responseText);
            // console.log(data);
        } else if(request.readyState === 4){
            // Nesto nije OK
            // console.log(`Could not fetch the data`);
            callback(undefined, `Could not fetch the data`);
        };
    });
    // 2. Otvaranje kreiranog zahteva
    request.open(`GET`, resource);

    // 3. Slanje zahteva
    request.send();
}

getTodos(`../JSON/todos.json`, (data, err) => {
    console.log(`Callback okinuta`);
    // Ako je err true - ispisati tu gresku
    if(err){
        console.log(err); // ispisuje ako je doslo do greske u todos.json file
    } else {
        console.log(data); // ispisuje podatke sa kojima moze dalje da raspolaze
        // Nakon sto su se ispisali podaci iz todos.json, pozivamo sledeci fajl fruits.json
        getTodos(`../JSON/fruits.json`, (data, err) => {
            if(err){
                console.log(err);  // ispisuje ako je doslo do greske u fruits.json file
            } else {
                console.log(data); // ispisuje podatke sa kojima moze dalje da raspolaze
                // Nakon sto su se ispisali podaci iz fruits.json, pozivamo sledeci fajl vegetables.json
                getTodos(`../JSON/vegetables.json`, (data, err) => {
                    if(err){
                        console.log(err); // ispisuje ako je doslo do greske u vrgetables.json file
                    } else {
                        console.log(data); // ispisuje podatke sa kojima moze dalje da raspolaze
                    }
                })
            }
        })
    }
});

console.log(`KRAJ`);
