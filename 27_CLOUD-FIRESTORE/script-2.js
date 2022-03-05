"use strict";
console.log(`--- script-2 ---`);
///////////////////////////////////////////////////////////////
// 1) Pristupanje konkretnom dokumentu u kolekciji
// 2) Pristupanje svim ili odredjenim dokumentima iz kolekcije

// 1)
// db.collection(`customers`)
// .doc(`c-1`)
// .get() // vraca sve dok.
// .then( (doc) => {
//     if(doc.exists){
//         console.log(`Postoji dokument ${doc}`);
//         let obj = doc.data();
//         console.log(obj);
//     } else {
//         console.log(`Ne postoji dokument ciji je id: ${doc.id}`);
//     }
//     // Polja: doc.id(string), doc.exists(boolean)
//     // Metoda: doc.data()
// })
// .catch( err => {
//     console.log(`Nemoguce dohvatiti dokument: ${err}`);
// })

// 2)
// db.collection(`customers`)
// .get()
// .then( snapshot => { // snapshot - slika trenutnog stanja
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc => {
//             console.log(doc.id, doc.data());
//         });
//     } else {
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch( err => {
//     console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
// })
////////////////////////////////////////////////////////////////////

// 3) Dohvatanje dokumenata u odredjenom redosledu
// 4) Dohvatanje odredjenog broja dok. iz kolekcije 
// 5) Dohvatanje dokumenata koji zadovoljavaju odredjene kriterijume (filtriranje dokumenata)

// 3)
// db.collection(`customers`)
// /////  sva sortiranja se upisuju pre GET() ///////////
// // .orderBy(`age`) // uzece u razmatranje samo one obj koje imaju to polje
// .orderBy(`salary`, `desc`) // descending - opadajuci poredak
// // .orderBy(`salary`, `asc`) // ascending - rastuci poredak
// .orderBy(`name`) // ulazi u catch granu kada ima vise orderBy - composite index (kliknuti na link i otici u bazu da se napravi)
// ///////////////
// .get()
// .then( snapshot => { 
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc => {
//             let obj = doc.data();
//             console.log(obj.name + " " + obj.age + " " + obj.salary);
//         });
//     } else {
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch( err => {
//     console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
// })

// 4)
// db.collection(`customers`)
// // .limit(1) - moze i iznad i ispod orderBy da stoji - hvata prvi dok iz baze
// .orderBy(`name`)
// .orderBy(`age`, `desc`)
// .orderBy(`salary`, `desc`)
// .limit(3) // ogranicavanje broja dokumenta koje zelimo da prikazemo
// .get()
// .then( snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc => {
//             let obj = doc.data();
//             console.log(obj.name + " " + obj.age + " " + obj.salary);
//         });
//     } else {
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch( err => {
//     console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
// })

// 5)
// db.collection(`customers`)
// // .where(`age`, `>=`, 30) // ne mogu 2 ili vise where upita sa jednakostima (mogu sa nejednakostima ako se napravi novi index)
// .where(`salary`, `>=`, 30000)
// // .orderBy(`salary`, `desc`) 
// // .orderBy(`name`) // po default-u je rastuci niz
// .get()
// .then( snapshot => {
//     if(!snapshot.empty){
//         let allDocs = snapshot.docs;
//         allDocs.forEach(doc => {
//             let obj = doc.data();
//             console.log(obj.name + " " + obj.age + " " + obj.salary);
//         });
//     } else {
//         console.log(`Nema dokumenata u kolekciji`);
//     }
// })
// .catch( err => {
//     console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
// })

/////////////   PRIMERI  //////////////////////
// CUSTOMERS //
// Iz kolekcije customers, pročitati sve klijente sortirane po imenu.
/*
db.collection(`customers`)
.orderBy(`name`)
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            console.log(doc.data().name);
        });
    } else {
        console.log(`Nema korisnika sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

// Iz kolekcije customers, pročitati sve klijente koji:
// Imaju adresu u Nišu,
/*
db.collection(`customers`)
.where(`addresses`, `array-contains`, `Nis`)
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let customers = doc.data();
            console.log(customers.name + " " + customers.addresses);
        });
    } else {
        console.log(`Nema korisnika sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

// Imaju platu veću ili jednaku od 500,
/*
db.collection(`customers`)
.where(`salary`, `>=`, 50000)
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let customers = doc.data();
            console.log(customers.name + " " + customers.salary);
        });
    } else {
        console.log(`Nema korisnika sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

// Imaju platu između 300 i 800,
/*
db.collection(`customers`)
.where(`salary`, `>=`, 30000)
.where(`salary`, `<=`, 80000)
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let customers = doc.data();
            console.log(customers.name + " " + customers.salary + " beetwen 3-8");
        });
    } else {
        console.log(`Nema korisnika sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

// Imaju platu manju od 900, i imaju 30 godina,
/*
db.collection(`customers`)
.where(`salary`, `<=`, 90000)
.where(`age`, `==`, 30)
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let customers = doc.data();
            console.log(customers.name + " " + customers.salary + " " + customers.age);
        });
    } else {
        console.log(`Nema korisnika sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

// Imaju adresu u Nišu ili Beogradu,
/*
db.collection(`customers`)
.where(`addresses`, `array-contains-any`, [`Nis`, `Beograd`]) // ili Nis ili Beograd
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let customers = doc.data();
            console.log(customers.name + " " + customers.addresses);
        });
    } else {
        console.log(`Nema korisnika sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

// Imaju 22, 25 ili 28 godina.
/*
db.collection(`customers`)
.where(`age`, `in`, [22, 25, 28])
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let customers = doc.data();
            console.log(customers.name + " " + customers.salary + " " + customers.age);
        });
    } else {
        console.log(`Nema korisnika sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

// TASKS //
// Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.
/*
db.collection(`tasks`)
.orderBy(`title`)
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let tasks = doc.data();
            console.log(tasks.title);
        });
    } else {
        console.log(`Nema korisnika sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

// Iz kolekcije tasks, pročitati sve zadatke, i koji:
// Su prioritetni,
/*
db.collection(`tasks`)
.where(`priority`, `==`, true)
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let tasks = doc.data();
            console.log(tasks.title + " => " + tasks.priority);
        });
    } else {
        console.log(`Nema korisnika sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

// Treba da se izvrše u tekućoj godini,

let trenutniDatum = new Date();
let godina = trenutniDatum.getFullYear();

let pocetakGodine = new Date(godina, 0, 1) ; // 1. januar tekuce godine
let krajGodine = new Date(godina + 1, 0, 1) ; // 1.januar naredne godine

let pocetakGodineTimestamp = firebase.firestore.Timestamp.fromDate(pocetakGodine);
let krajGodineTimestamp = firebase.firestore.Timestamp.fromDate(krajGodine);
/*
db.collection(`tasks`)
.where(`due_date`, `>=`, pocetakGodineTimestamp)
.where(`due_date`, `<`, krajGodineTimestamp)
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let tasks = doc.data();
            console.log(tasks);
        });
    } else {
        console.log(`Nema korisnika sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

// Su završeni,
let trenutniDatum2 = new Date();
let tdTimestamp = firebase.firestore.Timestamp.fromDate(trenutniDatum2);
/*
db.collection(`tasks`)
.where(`due_date`, `<`, tdTimestamp)
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let tasks = doc.data();
            console.log(tasks);
        });
    } else {
        console.log(`Nema korisnika sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

// Tek treba da počnu.
/*
let trenutniDatum3 = new Date();
let trenDatTimestamp = firebase.firestore.Timestamp.fromDate(trenutniDatum3);

db.collection(`tasks`)
.where(`start_date`, `>`, trenDatTimestamp)
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let tasks = doc.data();
            console.log(tasks.title + " => " + tasks.start_date);
        });
    } else {
        console.log(`Nema korisnika sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/


///// MOVIES /////

// Iz kolekcije movies, pročitati sve filmove:
// Koje je režirao George Lucas,
/*
db.collection(`movies`)
.where(`director.name`, `==`, `George`)
.where(`director.surname`, `==`, `Lucas`)
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let movies = doc.data();
            console.log(movies.name);
        });
    } else {
        console.log(`Nema filma sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

// Čija je ocena između 5 i 10,
/*
db.collection(`movies`)
.where(`rating`, `>=`, 7)
.where(`rating`, `<=`, 10)
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let movies = doc.data();
            console.log(movies.name + " => rating: " + movies.rating);
        });
    } else {
        console.log(`Nema filma sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

//Kojima je žanr komedija, tragedija ili drama,
/*
db.collection(`movies`)
.where(`genres`, `array-contains-any`, [`Action`, `Adventure`, `Fantasy`])
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let movies = doc.data();
            console.log(movies.name + " => genres: " + movies.genres);
        });
    } else {
        console.log(`Nema filma sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

// Koji su izašli u 21. veku.
/*
db.collection(`movies`)
.where(`release_year`, `>=`, 2000)
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let movies = doc.data();
            console.log(movies.name + " => release_year: " + movies.release_year);
        });
    } else {
        console.log(`Nema filma sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

// Prikazati sve informacije o najbolje rangiranom filmu.
/*
db.collection(`movies`)
.orderBy(`rating`, `desc`)
.limit(1)
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let movies = doc.data();
            console.log(movies);
        });
    } else {
        console.log(`Nema filma sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})
*/

// Prikazati sve informacije o najslabije rangiranoj drami.
db.collection(`movies`)
.where(`genres`, `array-contains`, `Adventure`)
.orderBy(`rating`, `asc`)
.limit(1)
.get()
.then( snapshot => {
    if(!snapshot.empty){
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let movies = doc.data();
            console.log(movies);
        });
    } else {
        console.log(`Nema filma sa zadatim uslovom!`);
    }
})
.catch( err => {
    console.log(`Nemoguce dohvatiti sve dokumente: ${err}`);
})