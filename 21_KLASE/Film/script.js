import Film from "./film.js";

// Objekat 1 klase Film
let film_1 = new Film(`Matrix`, `Wachowski brothers`, 1999, [8.2, 9.3, 7.9, 9.1]);
// console.log(film_1);
film_1.stampaj();

// Objekat 2 klase film
let film_2 = new Film(`Avatar`, `James Cameron`, 2009, [8.9, 9, 7, 6]);
// console.log(film_2);
film_2.stampaj();

// Objekat 3 klasa film
let film_3 = new Film(`Pera`, `Pera Peric`, 1267, [2.3, 4.5, 5, 5.5, 6]);
// console.log(film_3);
film_3.stampaj();
// Testiram da li moj seter za naslov radi
film_3.naslov = `Mika`;
console.log(film_3);

// Testiram da li moj geter za naslov radi
console.log(film_1.reziser);

// Dodavanje ocene u film 1
film_1.dodajOcenu(10);
film_1.stampaj();

// Prikaz svih filmova u tabelici
let tabelica = 
`
<table border="1">
    <tr>
        <th>Naziv filma</th>
        <th>Reziser</th>
        <th>Godine izdanja</th>
        <th>Ocene</th>
        <th>Prosecna ocena</th>
    </tr>`;

let filmovi = [film_1, film_2, film_3];

filmovi.forEach(f => {
    tabelica += `<tr>
        <td>${f.naslov}</td>
        <td>${f.reziser}</td>
        <td>${f.godinaIzdanja}</td>
        <td>${f.ocene}</td>
        <td>${f.prosek()}</td>
    </tr>`
});

tabelica += `</table>`;

document.body.innerHTML = tabelica;

// Prosecna ocena
console.log(film_3.prosek());

// Vek filma
function vekFilmova(niz, vek){
    let pocetak = vek * 100 - 99;
    let kraj = vek * 100;
    // vek > 20vek je od 1901 - 2000 => 19 > 1801-1900 => 18 > 1701 -1800

    // Bolje resenje >
    niz.forEach(film => {
        if(film.godinaIzdanja >= pocetak && film.godinaIzdanja <= kraj){
            console.log(film.naslov);
        }
    });

    // Moje resenje >
    // for (let i = 0; i < niz.length; i++) {
    //     if(vek == 21 && niz[i].godinaIzdanja > 2000){
    //         console.log(niz[i].naslov);
    //     } else if(vek == 20 && niz[i].godinaIzdanja > 1900 && niz[i].godinaIzdanja <= 2000){
    //         console.log(niz[i].naslov);
    //     } else if(vek == 19 && niz[i].godinaIzdanja > 1800 && niz[i].godinaIzdanja < 1900){
    //         console.log(niz[i].naslov);
    //     }
    // }
}
vekFilmova(filmovi, 21);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća prosečnu ocenu svih filmova.
function prosecnaOcena(nizFilmova){
    let zbirSvihOcena = 0;
    let brojSvihOcena = 0;

    nizFilmova.forEach(film => {
       film.ocene.forEach(oc => {
           zbirSvihOcena += oc;
           brojSvihOcena++;
       })
    })
    // console.log(zbirSvihOcena);
    // console.log(brojSvihOcena);
    let prOcFilmova = (brojSvihOcena != 0) ? zbirSvihOcena / brojSvihOcena : 0;
    let roundProsek = Math.round((prOcFilmova + Number.EPSILON) * 100) / 100;
    return roundProsek;
}
let prosecnaOcenaSvihFilmova = prosecnaOcena(filmovi);
console.log(`Prosecna ocena svih filmova je ${prosecnaOcenaSvihFilmova}.`);

// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
function najboljeOcenjeni(nizFilmova){
    let maxOcenjenFilm = nizFilmova[0].prosek();
    let maxFilm = nizFilmova[0];

    nizFilmova.forEach(film => {
        if(maxOcenjenFilm < film.prosek()){
            maxOcenjenFilm = film.prosek();
            maxFilm = film;
        }
    });

    return maxFilm;
};
console.log(najboljeOcenjeni(filmovi));

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
function osrednjiFilm(nizFilmova){
    let prOcSvihFilmova = prosecnaOcena(nizFilmova); // => 7.13
    let prosecneOc = [];
    
    for (let i = 0; i < nizFilmova.length; i++) {
        let prOcena = nizFilmova[i].prosek();
        prosecneOc[i] = prOcena;
    };

    // Najbliza cifra
    let prosek = prosecneOc.reduce((a, b) => {
        return Math.abs(b - prOcSvihFilmova) < Math.abs(a - prOcSvihFilmova) ? b : a;
    }); // => 7.725

    let prosecniFilm = nizFilmova[0];
    nizFilmova.forEach(film => {
        if(prosek == film.prosek()){
            prosecniFilm = film;
        }
    });
    
    return prosecniFilm.naslov;
}
console.log(osrednjiFilm(filmovi));

//////////////// Jelenino resenje

// Prvo sto nam treba je globalni prosek - npr 7
// i za svaki pojedinacni prosek: npr.
// film 1 avg = 7.5 - rastojanje je (0.5) - (film1avg - globalniprosek) = 0.5
// film 2 avg = 8.9 - (film2avg - globalniprosek) = 1.9
// film 3 avg = 6.9 - (film1avg - globalniprosek) = -0.1
// ............

let osrednjiFilm2 = arr => {
    let globalniProsek = prosecnaOcena(arr);
    let filmNajbliziProseku = arr[0]; // pretpostavka da je prvi film najblizi proseku
    let najmanjaRazlikaOdProseka = Math.abs(globalniProsek - filmNajbliziProseku.prosek());

    arr.forEach(film => {
        let prosecnaOcenaFilma = film.prosek(); // prosecna ocena jednog filma
        if(Math.abs(globalniProsek - prosecnaOcenaFilma) < najmanjaRazlikaOdProseka){
            najmanjaRazlikaOdProseka = Math.abs(globalniProsek - prosecnaOcenaFilma);
            filmNajbliziProseku = film;
        }
    });

    return filmNajbliziProseku;
}
osrednjiFilm2(filmovi).stampaj();


// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
function najmanjaOcenaNajboljeg(nizFilmova) {
    let najboljiFilm = najboljeOcenjeni(nizFilmova);
    let minOcena = najboljiFilm.ocene[0];

    najboljiFilm.ocene.forEach(oc => {
        if(minOcena > oc){
            minOcena = oc;
        }
    });

    console.log(minOcena);
}
najmanjaOcenaNajboljeg(filmovi);

//////////////// Jelenino resenje
// let najboljiFilm = arr => {
//     let maxOcenjenFilm = arr[0].prosek();
//     let maxFilm = arr[0];

//     arr.forEach(film => {
//         if(maxOcenjenFilm < film.prosek()){
//             maxOcenjenFilm = film.prosek();
//             maxFilm = film;
//         }
//     });

//     return maxFilm;
// };
// najboljiFilm(filmovi)

let najmanjaOcenaNajboljeg2 = arr => {
    let najboljiFilm = najboljeOcenjeni(arr);
    let oceneNajboljegFilma = najboljiFilm.ocene;
    let najslabijaOcena = oceneNajboljegFilma[0]; // vraca niz ocena najbolje ocenjenog filma

    oceneNajboljegFilma.forEach(o => {
        if(o < najslabijaOcena){
            najslabijaOcena = o;
        }
    });

    console.log(najslabijaOcena);
};
najmanjaOcenaNajboljeg2(filmovi);

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

let najmanjaOcena = niz => {
    let najmanjaOcena = Number.MAX_SAFE_INTEGER;
    niz.forEach(film => {
        film.ocene.forEach(oc => {
           if(najmanjaOcena > oc) {
               najmanjaOcena = oc;
           }
        });
    });
    return najmanjaOcena;
}
console.log(najmanjaOcena(filmovi));

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 

// treba mi koliko se puta ponavljala neka cifra
// prvo izvuci niz ocena iz svih filmova
// let f1 = [8.2, 9.3, 7.9, 9.1, 10];
// let f2 = [8.9, 9, 7, 6];
// let f3 = [2.3, 4.5, 5, 5.5, 6];
// let f = [];
// f = f.concat(f1, f2, f3);
// drugi nacin
// f = f.concat(f1);
// f = f.concat(f2);
// f = f.concat(f3);

let sveOcene = arr => {
    let arrSveOcene = []; // sa concat tip je objekat a sa push tip je array

    arr.forEach(film => {
        arrSveOcene = arrSveOcene.concat(film.ocene); // concat spaja nizove u 1 niz
        // ili arrSveOcene.push(film.ocene); // vraca niz u kome su 3 niza 
    });

    return arrSveOcene;
}
console.log(sveOcene(filmovi));
// Niz koji prosledjujemo je niz svih ocena
// f = [8.2, 9.3, 7.9, 9.1, 10, 8.9, 9, 7, 6, 2.3, 4.5, 5, 5.5, 6]
// moglo bi da se odradi sa sort ali mi cemo da uradimo bez
let najcescaOcena = nizOcena => {
    let pretpostavkaElem  = nizOcena[0];
    let pretpostavkaElemPojavljivanja = 1 // sigurno se jednom pojavio

    for(let i = 0; i < nizOcena.length; i++){
        let tekuci = nizOcena[i]; // zvezdica
        let tekuciBrPojavljivanja = 0;

        for(let j = 0; j < nizOcena.length; j++){
            if(tekuci == nizOcena[j]){
                // naisli smo na isti element
                tekuciBrPojavljivanja++;
            }
        }

        if(pretpostavkaElemPojavljivanja < tekuciBrPojavljivanja){
            pretpostavkaElemPojavljivanja = tekuciBrPojavljivanja;
            pretpostavkaElem = tekuci;
        }
    }

    return pretpostavkaElem;
}
let sve = sveOcene(filmovi);
console.log(najcescaOcena(sve));

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.

let iznadOcene = (ocena, nizFilmova) => {
    let nFilmova = [];
    nizFilmova.forEach(film => {
        if(film.prosek() > ocena){
            nFilmova.push(film);
        }
    });
    return nFilmova;
}
console.log(iznadOcene(7.4, filmovi));

// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova a koja treba da na ekranu ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

let iznadOceneNoviji = (ocena,arr) =>{
    let nizf =iznadOcene(ocena,arr);
    let noviji = nizf[0];

    nizf.forEach(e=>{
        if(noviji.godina < e.godina){
            noviji = e;
        };
    });
    
    console.log(noviji);
};
iznadOceneNoviji(7, filmovi)