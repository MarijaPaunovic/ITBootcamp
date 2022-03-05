"use strict";

// Zadaci

// 1. Uspostaviti konekciju ka endpointu za users resurs: https://jsonplaceholder.typicode.com/users
// 2. Ispisati u konzoli one korisnike čiji website ima domen „.com“.
// 3. Ispisati korisnike čije ime sadrži reč „Clementin“.
// 4. Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 
// 5. Ispisati sve različite gradove u kojima rade ovi korisnici.
// 6. Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.


// const request = new XMLHttpRequest();

// request.addEventListener(`readystatechange`, () => {
//     if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         // Zadatak 2
//         data.forEach(el => {
//             //ili includes(`.com`)
//             if(el.website.slice(-4) == `.com`){
//                 console.log(`Korisnici čiji website ima domen ".com" su: ${el.name}, ${el.website}.`)
//             };
//         });

//         // Zadatak 3
//         data.forEach(el => {
//             if(el.name.includes(`Clementin`)){
//                 console.log(`Korisnici čije ime sadrži reč "Clementin" su: ${el.name}.`);
//             };
//         });

//         // Zadatak 4
//         data.forEach(el => {
//             let comp = el.company.name;
//             if(comp.includes(`Group`) || comp.includes(`LLC`)){
//                 console.log(`Korisnici koji rade u kompaniji čije ime sadrži reč "Group", ili reč "LLC" su: ${el.name}, ${comp}.`);
//             }
//         });

//         // Zadatak 5
//         let nizGradova = [];
//         data.forEach(el => {
//             if(!nizGradova.includes(el.address.city)){
//                 nizGradova.push(el.address.city);
//             }
//         });
//         console.log(nizGradova);

//         // Zadatak 6
//         let brKorSaNeg = 0;
//         data.forEach(el => {
//             let geoDuz = parseFloat(el.address.geo.lat);
//             let geoSir = parseFloat(el.address.geo.lng);
//             if(geoDuz < 0 && geoSir < 0){
//                 brKorSaNeg++;
//             }
//         });
//         console.log(`Broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi je: ${brKorSaNeg}`);

//     } else if(request.readyState === 4){
//         console.log(`Could not fetch the data`);
//     };
// });
// request.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
// request.send();

// Stefan je trazio > napraviti 5 razlicitih obj., addEvent..., open i send metodu. sa zadacima
// Zadaci
const zahtev = new XMLHttpRequest();

zahtev.addEventListener(`readystatechange`, function() {
    if(this.readyState === 4 && this.status === 200){
        // console.log(this);
        console.log(this.responseText);
    } else if(this.readyState === 4) {
        console.log(`Ne mogu da dobijem informaciju.`);
    }
});
// 1. Uspostaviti konekciju ka endpointu za users resurs: https://jsonplaceholder.typicode.com/users
zahtev.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
zahtev.send();

// 2. Ispisati u konzoli one korisnike čiji website ima domen „.com“.
const zahtev2 = new XMLHttpRequest();
zahtev2.addEventListener(`readystatechange`, function () {
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.responseText);
        data.forEach(kor => {
            if(kor.website.includes(`.com`)){
                console.log(`Korisnik: ${kor.name}, website: ${kor.website}`);
            }
        });
    } else if(this.readyState === 4){
        console.log(`Ne mogu da dobijem informaciju.`);
    }
});
zahtev2.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
zahtev2.send();

// 3. Ispisati korisnike čije ime sadrži reč „Clementin“.
const zahtev3 = new XMLHttpRequest();

zahtev3.addEventListener(`readystatechange`, function() {
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.responseText);
        data.forEach(kor => {
            if(kor.name.includes(`Clementin`)){
                console.log(`Korisnici čije ime sadrži reč "Clementin" : ${kor.name}`);
            }
        });
    } else if(this.readyState === 4){
        console.log(`Ne mogu da dobijem informaciju.`);
    }
});
zahtev3.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
zahtev3.send();

// 4. Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 
const zahtev4 = new XMLHttpRequest();
zahtev4.addEventListener(`readystatechange`, function() {
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.responseText);
        data.forEach(kor => {
            if(kor.company.name.includes(`Group`) || kor.company.name.includes(`LLC`)){
                console.log(`Korisnici koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“ su: ${kor.name}, company: ${kor.company.name}`);
            }
        });
    } else if(this.readyState === 4){
        console.log(`Ne mogu da dobijem informaciju.`);
    }
});
zahtev4.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
zahtev4.send();

// 5. Ispisati sve različite gradove u kojima rade ovi korisnici.
const zahtev5 = new XMLHttpRequest();
zahtev5.addEventListener(`readystatechange`, function() {
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.responseText);
        let gradovi = [];
        data.forEach(kor => {
            if(!gradovi.includes(kor.address.city)){
                gradovi.push(kor.address.city);
            }
        });
        console.log(gradovi);   
    } else if(this.readyState === 4){
        console.log(`Ne mogu da dobijem informaciju.`);
    }
    
});
zahtev5.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
zahtev5.send();
// 6. Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
const zahtev6 = new XMLHttpRequest();

zahtev6.addEventListener(`readystatechange`, function() {
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.responseText);
        let br = 0;
        data.forEach(kor => {
            let geoSir = kor.address.geo.lat;
            let geoDuz = kor.address.geo.lng;
            if(geoSir < 0 && geoDuz < 0){
                br++;
            }
        });
        console.log(`Broj korisnika koji žive na adresi čije su obe vrednosti negativni brojevi je: ${br}.`);
    } else if(this.readyState === 4){
        console.log(`Ne mogu da dobijem informaciju.`);
    }
});
zahtev6.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
zahtev6.send();