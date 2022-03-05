"use strict";

console.log(`Nizovi objekata`);

/////////////////////////////////////////////////

let blog1 = {
    title: `Osnovni HTML tagovi`,
    likes: 30,
    dislike: 9
};

let blog2 = {
    title: `Osnovni CSS selektori!`,
    likes: 70,
    dislike: 5
};

let blog3 = {
    title: `Napredni CSS selektori`,
    likes: 50,
    dislike: 60
};

// Ispis objekata iza niza pomocu foreach petlje
let arrBlogs = [blog1, blog2, blog3];
arrBlogs.forEach(objekatBlog => {
    console.log(objekatBlog);
});

arrBlogs.forEach(objekatBlog => {
    document.body.innerHTML += `<h3>${objekatBlog.title}</h3>`;
    document.body.innerHTML += `<p>Likes: ${objekatBlog.likes}</p>`;
    document.body.innerHTML += `<p>Dislikes: ${objekatBlog.dislike}</p>`;
});
// ili preko for petlje
for(let i = 0; i < arrBlogs.length; i++){
    document.body.innerHTML += `<h3>//////// ${arrBlogs[i].title}</h3>`;
    document.body.innerHTML += `<p>Likes: ${arrBlogs[i].likes}</p>`;
    document.body.innerHTML += `<p>Dislikes: ${arrBlogs[i].dislike}</p>`;
};

// Promena vrednosti elementa
// blog3.title = `Napredni HTML tagovi`;
// console.log(blog3);

// Pristup preko niza
// arrBlogs[2].title = `HTML5 tagovi`;
// console.log(arrBlogs[2]);


//////////  VEZBANJE  //////////////

// 1. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

let sumaLajkova = arr => {
    let suma = 0;

    // 1 nacin - forEach
    // arr.forEach(blog => {
    //     suma += blog.likes;
    // });

    // 2 nacin - for petljom
    for(let i = 0; i < arr.length; i++){
        // arr[i] je objekat
        // arr[i].likes je broj lajkova objekta arr[i]
        suma += arr[i].likes;
    }

    return suma;
};
console.log(`Ukupan broj lajkova: ${sumaLajkova(arrBlogs)}`);

// Lajkovi iz prvog i treceg bloga
let sum13 = arrBlogs[0].likes + arrBlogs[2].likes;
console.log(sum13);
// ili 
sum13 = arrBlogs[0]["likes"] + arrBlogs[2]["likes"];
console.log(sum13);


// 2. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let prosecanBrLajkova = (arr, callback) => {
    let suma = callback(arr);
    let broj = arr.length;

    return suma / broj;
};
console.log(prosecanBrLajkova(arrBlogs, sumaLajkova));

// 3. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let moreLikes = arr => {
    arr.forEach(el => {
        // console.log(el.title);
        if(el.likes > el.dislike){
            console.log(el.title);
        }
    })
};
console.log(`Blogovi sa vise lajkova nego dislajkova`);
moreLikes(arrBlogs);

// 4. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let duploViseLjakova = arr => {
    arr.forEach(el => {
        if((el.dislike * 2) <= el.likes){
            console.log(el.title);
        }
    });
};
duploViseLjakova(arrBlogs);

// 5. Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnik = arr => {
    for(let i = 0; i < arr.length; i++){
        let naslov = arr[i].title;
        for(let j = 0; j < naslov.length; j++){
            if(naslov[j] == "!"){
                console.log(naslov);
            }
        }
    };
};
uzvicnik(arrBlogs);

/////////////////////////////////////////////////////////////

let rec = "Hello!s";
let poslednjiKarakter = rec[rec.length - 1]
console.log(poslednjiKarakter);

let poslednjiKarakter1 = rec.slice(-1); //odseca deo stringa
console.log(poslednjiKarakter1);

let poslednjiKarakter2 = rec.charAt(rec.length - 1); //vraća karakter na određenom indeksu
console.log(poslednjiKarakter2);

let poslednjiKarakter3 = rec.endsWith("!"); //Vraća true ukoliko se string završava !, u suprotnom vraća false
console.log(poslednjiKarakter3);

////////////////////////////////////////////////////////////

