"use strict";

let movie2 = {
    name: `Star Wars: Episode V - The Empire Strikes Back`,
    director: {
        name: `George`,
        surname: `Lucas`
    },
    release_year: 1980,
    genres: [`Action`, `Adventure`, `Fantasy`],
    rating: 8.7
};

let movie3 = {
    name: `Star Wars: Episode VI - Return of the Jedi`,
    director: {
        name: `George`,
        surname: `Lucas`
    },
    release_year: 1983,
    genres: [`Action`, `Adventure`, `Fantasy`],
    rating: 8.3
};

// Napisati skript koji:

//Dodaje nekoliko filmova u bazu,
db.collection(`movies`).doc(`m-2`).set(movie2)
.then( () => {
    console.log(`Film je uspesno dodat u kolekciju "movies"`);
    return db.collection(`movies`).doc(`m-3`).set(movie3)
})
.catch( err => {
    console.log(`Error : ${err}`);
});

// Menja podatke o nekim filmovima u bazi,
db.collection(`movies`).doc(`m-1`).update({
    rating: 8.7
})
.then( () => {
    console.log(`Film se uspesno updejtovao.`);
})
.catch( err => {
    console.log(`Error: ${err}`);
})

// Dodaje žanr nekom filmu
let m1 = db.doc(`movies/m-1`);

// Za dodavanje elementa niza koje je polje dokumenta:
/*
let movie = db.doc(‘movies/movie-01’);
movie.update({
   genres : firebase.firestore.FieldValue.arrayUnion(“comedy")
});
*/
m1.update({
    genres : firebase.firestore.FieldValue.arrayUnion(`Comedy`)
});

// Za brisanje elementa niza koje je polje dokumenta:
/*
movie.update({
    genres: firebase.firestore.FieldValue.arrayRemove(“comedy")
});
*/
m1.update({
    genres : firebase.firestore.FieldValue.arrayRemove(`Comedy`)
});

// Za menjanje polja objekta koje je polje dokumenta:
/*
movie.update({
    “director.name”: “Geogre”
});
*/
m1.update({
    "director.name" : "Geogre"
});