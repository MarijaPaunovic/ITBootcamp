"use strict";

console.log(`--- Cloud Firebase (Googlova baza podataka) ---`);

///////////////////////////////////////
// db - je objekat "baze" (njega vucemo iz html fajla)
console.log(db);

// Pristupanje kolekciji
let customers = db.collection(`customers`);
console.log(customers);

// Pristupanje dokumentu
// Primer 1
let doc1 = customers.doc(`c-1`);
console.log(doc1);

// Primer 2
let doc2 = db.collection(`tasks`).doc(`t-1`);
console.log(doc2);

/*
Za pristup dokumentu:
let doc = db.collection(`...`).doc(`...`)

Kod dokumenata imamo sledece operacije:
CRUD:
- Create : doc.set(...)
- Read : doc.get(...)
- Update : doc.update(...)
- Delete : doc.delete(...)
(zajednicko im je da vracaju promise, sto znaci nakon njih lancamo .then() i .catch() )
*/

// Dodavanje novog dokumenta - set()
let obj = {
    name: `Vesna Lazic`,
    age: 22,
    addresses: [`Nis`, `Leskovac`],
    salary: 47000
};
///////////////////////   ovako ne moze zbog asinhronosti  /////////////////////////////////////////////////////
// Ako se ponove customers on gazi preko vec postojeceg
// db.collection(`customers`).doc(`c-6`).set(obj)
// .then(() => {
//     console.log(`Dodat novi dokument u kolekciju "customers"`);
// })
// .catch(err => {
//     console.error("Greska prilikom dodavanja novog dokumenta: " + err);
// });

// // Spajanje sa vec postojecim
// db.collection(`customers`).doc(`c-6`).set(
//     {height: 180},
//     {merge: true}
// )
// .then(() => {
//     console.log(`Spojen dokument u kolekciju "customers"`);
// })
// .catch(err => {
//     console.error("Greska prilikom dodavanja novog dokumenta: " + err);
// });
/////////////////////////////////////////////////////////////////////////////

db.collection(`customers`).doc(`c-6`).set(obj)
.then(() => {
    console.log(`Dodat novi dokument u kolekciju "customers"`);
    return db.collection(`customers`)
            .doc(`c-6`)
            .set(
                {height: 180},
                {merge: true}
    );
})
.then(() => {
    console.log(`Spojen dokument u kolekciju "customers"`);
})
.catch(err => {
    console.error("Greska prilikom dodavanja novog dokumenta: " + err);
});

console.log(`Test poruka`);

/////////////////////////////////////////////////////////////////////////
// Dodavanje novog taska
let datum1 = new Date("2022-01-26 12:00:00");
let datum2 = new Date("2022-01-26 13:00:00");

let obj2 = {
    title: "Fudbal",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Fudbalica sa drustvom"
}

// Add a new document in collection "tasks"
db.collection("tasks").doc("t-4").set(obj2, {merge: true})
.then(() => {
    console.log("Uspesno dodat task");
})
.catch(err => {
    console.error("Neuspesno dodat task: " + err);
});
////////////////////////////////////////////////////

// UPDATE (bez brisanja kompletnog sadržaja)
db.collection("tasks").doc("t-4").update({
    description: "Fudbalica sa drustvom ako stignem",
    priority: true
})
.then(function() {
    console.log("Task successfully updated!");
})
.catch(function(error) {
    console.error("Error updating task: ", error);
});

///////////////////////////////////////////////////

// DELETE
db.collection(`customers`).doc(`c-10`).delete()
.then(function() {
    console.log("Customers successfully deleted!");
})
.catch(function(error) {
    console.error("Error updating task: ", error);
});

//////////////////////////////////////////////////

// Drugi nacin za dodavanje dokumenta
// db.collection(`tasks`)
// .add({ // id se automatski generise !!!
//     title: `Vezba za projekat`,
//     description: `Vezbanje JavaScripta`,
//     start_date: firebase.firestore.Timestamp.fromDate(new Date(`2022-01-29`)),
//     due_date: null,
//     priority: true
// })
// .then( () => {
//     console.log(`Uspesno dodat zadatak u kolekciju tasks`);
// })
// .catch( err => {
//     console.log(`Desila se greska: ${err}`);
// })

/*
db.collection(`...`).add() isto sto i db.collection(`...`).doc().set()
- dodaje novi dokument sa random generisanjem ID-jem

db.collection(`...`).doc(id).set()
- dodaje novi dokument sa zadatim ID-jem
*/