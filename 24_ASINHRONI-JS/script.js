"use strict";

console.log(`--- Asinhroni JS ---`);

//////////////////////////////
const request = new XMLHttpRequest();
// Metodoloski
// request.addEventListener(`readystatechange`, () => {
//     if(request.readyState === 1){
//         console.log(`Uspostavljena konekcija`); // open() has been called.
//     } else if(request.readyState === 2){
//         console.log(`Poslat je zahtev serveru`); // send() has been called, and headers and status are available.
//     } else if(request.readyState === 3){
//         console.log(`Prihvata se odgovor u statusu preuzimanja`); // Downloading; responseText holds partial data.
//     } else if(request.readyState === 4){
//         console.log(`Odgovor je preuzet:`, request.responseText); // The operation is complete.
//     }
//     // console.log(request.readyState, request.responseText);
// });

// U praksi
// Arrow funkcija
request.addEventListener(`readystatechange`, () => {
    if(request.readyState === 4 && request.status === 200){
        // console.log(request.responseText);
    } else if(request.readyState === 4){
        console.log(`Could not fetch the data`);
        console.log(request.responseText);
    }
});  
// Anonimna funkcija
request.addEventListener(`readystatechange`, function() {
    if(this.readyState === 4 && this.status === 200){
        // console.log(this.responseText);
    } else if(this.readyState === 4){
        console.log(`Could not fetch the data`);
        console.log(this.responseText);
    }
});
request.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
request.send();

// Metoda uz pomoć koje se podaci sa servera, primljeni kao string, konvertuju u JS entitet.
// JSON.parse
request.addEventListener(`readystatechange`, () => {
    if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText); // JSON - JavaScript Object Notation
        // console.log(data)
    } else if(request.readyState === 4){
        console.log(`Could not fetch the data`);
    }
}); 


////// ZADACI 5kom. > folder Zadaci ////////


///// CALLBACK FUNKCIJE /////

const getUsers = (resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener(`readystatechange`, () => {
        if(request.readyState === 4 && request.status === 200){
            // radi nesto kada je sve u redu
            console.log(request.responseText)
            const data = JSON.parse(request.responseText);
           resolve(data);
        } else if(request.readyState === 4){
            // radi nesto kada je doslo do greske
            // resolve(`Could not fetch the data`); // prva mogucnost
            reject(`Doslo je do greske!`) // druga mogucnost
        }
    }); 

    request.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
    request.send();
};

let zad2 = nizKorisnika => {
    nizKorisnika.forEach(kor => {
        if(kor.website.includes(`.com`)){
            console.log(kor.name);
        }
    });
};

let zad3 = nizKorisnika => {
    nizKorisnika.forEach(kor => {
        if(kor.name.includes(`Clementin`)){
            console.log(kor.name);
        }
    })
};

let zad4 = nizKorisnika => {
    nizKorisnika.forEach(kor => {
        let comp = kor.company.name;
            if(comp.includes(`Group`) || comp.includes(`LLC`)){
                console.log(`Korisnici koji rade u kompaniji čije ime sadrži reč "Group", ili reč "LLC" su: ${kor.name}, ${comp}.`);
            };
    });
};

let zad5 = nizKorisnika => {
    let nizGradova = [];
    nizKorisnika.forEach(kor => {
        if(!nizGradova.includes(kor.address.city)){
            nizGradova.push(kor.address.city);
        }
    });
    console.log(nizGradova);
};

let zad6 = nizKorisnika => {
    let brKorSaNeg = 0;
    nizKorisnika.forEach(el => {
        let geoDuz = parseFloat(el.address.geo.lat);
        let geoSir = parseFloat(el.address.geo.lng);
        if(geoDuz < 0 && geoSir < 0){
            brKorSaNeg++;
        }
    });
    console.log(`Broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi je: ${brKorSaNeg}`);
};

let ispisPorukeStranica = poruka => {
    document.body.innerHTML += `<p class="error">${poruka}</p>`;
}

let ispisPorukeKonzola = poruka => {
    console.log(poruka);
}

getUsers(zad2, ispisPorukeStranica);
getUsers(zad3, ispisPorukeStranica);
// getUsers(zad4, ispisPorukeStranica);
getUsers(zad5, ispisPorukeStranica);
getUsers(zad6, ispisPorukeKonzola);

// Primer 3
getUsers(
    // Zadatak 4
    // resolve
    (nizKorisnika) => {
        nizKorisnika.forEach(kor => {
            let comp = kor.company.name;
                if(comp.includes(`Group`) || comp.includes(`LLC`)){
                    console.log(`Korisnici koji rade u kompaniji čije ime sadrži reč "Group", ili reč "LLC" su: ${kor.name}, ${comp}.`);
                };
        });
    }, 
    // reject
    (poruka) => {
        // document.body.innerHTML += `<p class="error">${poruka}</p>`;
        console.log(poruka);
    }
)