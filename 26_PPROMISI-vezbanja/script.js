"use strict";

let divOrder = document.querySelector(`#order`);
let formOrder = document.querySelector(`#order form`);
let inputOrder = document.querySelector(`#capacity`);

let divOrder2 = document.querySelector(`#order2`);
let formOrder2 = document.querySelector(`#order2 form`);
let inputText = document.querySelector(`#text-1`);
let inputCena1 = document.querySelector(`#cena1`);
let inputCena2 = document.querySelector(`#cena2`);


function getItem(resource, resolve, reject) {
    const request = new XMLHttpRequest();

    request.addEventListener(`readystatechange`, function() {
        if(this.readyState === 4 && this.status === 200){
            // Sve ok
            const data = JSON.parse(this.responseText);
            resolve(data);
            
        } else if(this.readyState === 4){
            // Desila se neka greska
            reject(`Could not fetch the data!`);
        }
    });

    request.open(`GET`, resource);
    request.send();
};

function submitForm1(e) {
    e.preventDefault();

    let capacity = inputOrder.value;
    let ids = [];

    getItem(`./JSON/stock.json`, data => {
        data.forEach(item => {
            if(item.stock <= 0){
                ids.push(item.id);
            }
        });

        getItem(`./JSON/weights.json`, data => {
            let totalWeight = 0;
            data.forEach(item => {
                if(ids.includes(item.id)){
                    totalWeight += item.weight;
                }
            });
            console.log(`Ukupna težina proizvoda koja treba da se naruče je: ${totalWeight} kg.`);
            if(totalWeight > capacity){
                let par = document.createElement(`p`);
                par.innerHTML = `Ukupna težina proizvoda je veća od kapaciteta kamiona!`;
                par.style.color = `red`;
                par.style.fontSize = `24px`;
                par.style.fontWeight = `bold`;
                divOrder.appendChild(par);
            } else {
                getItem(`./JSON/prices.json`, data => {
                    let totalPrice = 0;
                    data.forEach(item => {
                        if(ids.includes(item.id)){
                            totalPrice += item.price;
                        }
                    });
                    let par = document.createElement(`p`);
                    par.innerHTML = `Ukupna cena porudžbine je: ${totalPrice} rsd.`;
                    par.style.color = `green`;
                    par.style.fontSize = `24px`;
                    par.style.fontWeight = `bold`;
                    divOrder.appendChild(par);
                }, msg => { console.log(msg);});
            }
        }, msg => {console.log(msg);});
    }, msg => {console.log(msg);});
};

/*
1. ideja > getItems() da se pozove jedan za drugim
    getItem(`./JSON/stock.json`);
    getItem(`./JSON/weights.json`);
    getItem(`./JSON/prices.json`);
NETACNA IDEJA, jer je svaki getItem asinhron poziv, sto znaci da ne mora weights.json da se dohvati pre stock.json
(slicno i sa prices.json)

2. ideja: Redosled asinhronih poziva se odvija preko callback funkcija
TACNA IDEJA ali neprakticna (callback hell)

3. ideja: Redosled asinhronih poziva odvija preko Promis-a
*/

// Isto to samo preko PROMISE

function getItemReturnPromise(resource) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener(`readystatechange`, () => {
            if(request.readyState === 4 && request.status === 200){
                // Sve ok
                const data = JSON.parse(request.responseText);
                resolve(data);
                
            } else if(request.readyState === 4){
                // Desila se neka greska
                reject(`Could not fetch the data!`);
            }
        });

        request.open(`GET`, resource);
        request.send();
    });
};

function submitForm2(e) {
    e.preventDefault();

    let capacity = inputOrder.value;
    let ids = [];

    getItemReturnPromise(`./JSON/stock.json`)
    .then( data => {
        data.forEach(item => {
            if(item.stock <= 0){
                ids.push(item.id);
            }
        });
        return getItemReturnPromise(`./JSON/weights.json`);
    })
    .then( data => {
        let totalWeight = 0;
            data.forEach(item => {
                if(ids.includes(item.id)){
                    totalWeight += item.weight;
                };
            });
            console.log(`Ukupna težina proizvoda koja treba da se naruče je: ${totalWeight} kg.`);
            if(totalWeight > capacity){
                let par = document.createElement(`p`);
                par.innerHTML = `Ukupna težina proizvoda je veća od kapaciteta kamiona!`;
                par.style.color = `red`;
                par.style.fontSize = `24px`;
                par.style.fontWeight = `bold`;
                divOrder.appendChild(par);
            } else {
                return getItemReturnPromise(`./JSON/prices.json`);
            }
    })
    .then( data => {
        if(data !== undefined){
        let totalPrice = 0;
        // data.forEach(item => {
        //     if(ids.includes(item.id)){
        //         totalPrice += item.price;
        //     }
        // });
        // Tabela
        let table = document.createElement(`table`);
        let tr = document.createElement(`tr`);
        table.appendChild(tr);
        let th1 = document.createElement(`th`);
        th1.innerHTML = `Naziv artikla: `;
        let th2 = document.createElement(`th`);
        th2.innerHTML = `Cena artikla: `;
        tr.appendChild(th1);
        tr.appendChild(th2);

        data.forEach(item => {
            if(ids.includes(item.id)){
                let tr = document.createElement(`tr`);
                let td = document.createElement(`td`);
                td.innerHTML = item.item;
                let td2 = document.createElement(`td`);
                td2.innerHTML = item.price;
                table.appendChild(tr);
                tr.appendChild(td);
                tr.appendChild(td2);
                totalPrice += item.price;
            }
        });

        let tr2 = document.createElement(`tr`);
        let td2 = document.createElement(`td`);
        let td3 = document.createElement(`td`);
        td3.innerHTML = `Ukupna cena:`;
        td2.innerHTML = totalPrice;
        tr2.appendChild(td3);
        tr2.appendChild(td2);
        table.appendChild(tr2);
        divOrder.appendChild(table)

        // Ukupna cena svih artikla
        // let par = document.createElement(`p`);
        // par.innerHTML = `Ukupna cena porudžbine je: ${totalPrice} rsd.`;
        // par.style.color = `green`;
        // par.style.fontSize = `24px`;
        // par.style.fontWeight = `bold`;

        // // Dodavanje na strani
        // divOrder.appendChild(par)
        }
    })
    .catch( err => {
        console.log(`Error: ${err}`);
    });

};

function submitForm3(e) {
    e.preventDefault();

    let textValue = inputText.value;
    let cena1Value = inputCena1.value;
    cena1Value = parseFloat(cena1Value);
    let cena2Value = inputCena2.value;
    cena2Value = parseFloat(cena2Value);

    let prNaStanju = [];
    let pr = [];

    getItemReturnPromise(`./JSON/stock.json`)
    .then( data => {
        data.forEach(item => {
            if(item.stock > 0){
                prNaStanju.push(item.id);
                pr.push(item);
            }
        });

        return getItemReturnPromise(`./JSON/prices.json`);
    })
    .then( data => {
        // Lista
        let ul = document.createElement(`ul`);
        data.forEach(item => {
            if(prNaStanju.includes(item.id) && item.item.includes(textValue) && item.price >= cena1Value && item.price <= cena2Value){
                let li = document.createElement(`li`);
                li.innerHTML = `Naziv proizvoda: ${item.item}, Cena: ${item.price}`;
                ul.appendChild(li)
            }
        });
        divOrder2.appendChild(ul);

        // Tabela
        let tabela = document.createElement(`table`);
        tabela.style.border = `1px solid black`;
        data.forEach(item => {
            if(prNaStanju.includes(item.id) && item.item.includes(textValue) && item.price >= cena1Value && item.price <= cena2Value){
                // Row
                let tr1 = document.createElement(`tr`);
                let tr2 = document.createElement(`tr`);
                let tr3 = document.createElement(`tr`);
                // Head
                let th1 = document.createElement(`th`);
                let th2 = document.createElement(`th`);
                let th3 = document.createElement(`th`);
                // Data
                let td1 = document.createElement(`td`);
                let td2 = document.createElement(`td`);
                let td3 = document.createElement(`tdr`);
                // Kolona 1
                th1.innerHTML = `Naziv artikla`;
                td1.innerHTML = item.item;
                tr1.appendChild(th1);
                tr1.appendChild(td1);
                // Kolona 2
                pr.forEach(el => {
                    if(item.id === el.id){
                       th2.innerHTML = `Stanje u mag.`;
                        td2.innerHTML = el.stock;
                        tr2.appendChild(th2);
                        tr2.appendChild(td2); 
                    };
                });
                // Kolona 3
                th3.innerHTML = `Cena artikla`;
                td3.innerHTML = item.price;
                tr3.appendChild(th3);
                tr3.appendChild(td3);

                // Stavljanje u tabelu
                tabela.appendChild(tr1);
                tabela.appendChild(tr2);
                tabela.appendChild(tr3);
            }
        });
        // Stavljanje na stranu
        divOrder2.appendChild(tabela);
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });
};

// Stefanovo resenje
let divFilter = document.querySelector("#filter");
let formFilter = document.querySelector("#filter form");
let inputNaziv = document.querySelector("#naziv");
let inputCenaMin = document.querySelector("#cenaMin");
let inputCenaMax = document.querySelector("#cenaMax");

// Zadatak 2

async function clickGetItems() {
    let naziv = inputNaziv.value;
    let cenaMin = inputCenaMin.value;
    let cenaMax = inputCenaMax.value;

    let data1 = await getItemReturnPromise(`./JSON/stock.json`);
    let artikliNaStanju = [];
    data1.forEach(item => {
        if(item.stock > 0){
            artikliNaStanju.push(item.id);
        }
    });

    let data2 = await getItemReturnPromise(`./JSON/prices.json`);
    let tabela = document.createElement(`table`);
    data2.forEach(item => {
        if(artikliNaStanju.includes(item.id) && item.item.includes(naziv) && item.price >= cenaMin && item.price <= cenaMax){
            let tr = document.createElement(`tr`);
            let td1 = document.createElement(`td`);
            let td2 = document.createElement(`td`);
            td1.innerHTML = item.item;
            td2.innerHTML = item.price;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tabela.appendChild(tr);
        }
    });

    return tabela;
};

function akcija(e) {
    e.preventDefault();

    clickGetItems()
    .then(data => {
        divFilter.appendChild(data);
    })
    .catch(err => {
        console.log(err);
    });    
};

// formFilter.addEventListener(`submit`, akcija)


// formOrder.addEventListener(`submit`, submitForm1);
// formOrder.addEventListener(`submit`, submitForm2);
formOrder2.addEventListener(`submit`, submitForm3);