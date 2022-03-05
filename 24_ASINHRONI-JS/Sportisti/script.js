"use strict";


const getSportisti = (resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener(`readystatechange`, () => {
        if(request.readyState === 4 && request.status === 200){
            // radi nesto kada je sve u redu
            // console.log(request.responseText)
            const data = JSON.parse(request.responseText);
           resolve(data);
        } else if(request.readyState === 4){
            // radi nesto kada je doslo do greske
            // resolve(`Could not fetch the data`); // prva mogucnost
            reject(`Doslo je do greske!`) // druga mogucnost
        }
    }); 

    request.open(`GET`, `./sportisti.json`);
    request.send();
};

// Ispisati prosečnu visinu svih sportista.
let prVisinaSvihSportista = nizSportista => {
    let zbirVisina = 0;
    let brSp = nizSportista.length;

    nizSportista.forEach(sp => {
        zbirVisina += sp.visina;
    });

    let prVisina = (brSp != 0) ? zbirVisina / brSp : 0;
    prVisina = prVisina.toFixed(2);

    console.log(`Prosecna visina svih sportista je: ${prVisina}cm.`);
};

// Ispisati ime i prezime sportiste sa najmanje transfera (bilo kog ako ima više takvih sportista).
let minTrans = nizSportista => {
    let minTr = nizSportista[0].timovi.length;
    console.log(minTr)
    nizSportista.forEach(sp => {
        if(sp.timovi.length < minTr){
            minTr = sp.timovi.length;
            console.log(sp.imePrezime);
        }
    });
}

//Ispisati imena i prezimena svih sportista koji su igrali za „Lakers“-e.
let timLejkers = nizSportista => {
    let igraciSaLakers = [];
    nizSportista.forEach(sp => {
        if(sp.timovi.includes(`Lakers`)){
            igraciSaLakers.push(sp.imePrezime);
        }
    });
    console.log(igraciSaLakers);
}

// Reject
let ispisPorukeKonzola = poruka => {
    console.log(poruka);
};

getSportisti(prVisinaSvihSportista, ispisPorukeKonzola);
getSportisti(minTrans, ispisPorukeKonzola);
getSportisti(timLejkers, ispisPorukeKonzola)