"use strict";

console.log(`Objekti`);;

//////////////// Kreiranje i ispis objekata ///////////////////////////////////////////

let blog1 = {
    title: `HTML`,
    content: `Ovo je blog o osnovnim HTML tagovima`,
    author: `Marija`
};

console.log(blog1);
console.log(typeof blog1);

// Ispis propertija na dva nacina
console.log(blog1.title); // prvi nacin
console.log(blog1[`content`]); // drugi nacin

// Izmene propertija
blog1.title = `Osnove HTML-a`; // prvi nacin
console.log(blog1.title);
blog1[`author`] = `Jelena Matejic`; // drugi nacin
console.log(blog1[`author`]);

/////////////////// DOdavanje i povezivanje metoda ////////////////////////////////////

let user = {
    username:  `JM`,
    age: 27,
    blogs: [`//////////`, `IF naredba grananja`,`While petlja`, `FOR petlja `],
    // Ovo je metod (Metod se naziva funkcija u objektu)
    login: function(){ // NE MOZE da ide arrow funkcija !!!
        console.log(`Ulogovani ste`);
    }, 
    logout: function(){
        console.log(this); // Ovaj objekat
        console.log(`Izlogovani ste`);        
    },
    logBlogs: function(){
        // THIS //
        console.log(this.blogs); // Unutar objekta, ne možemo „direktno“ pristupiti, pa moramo koristiti reč this
        this.blogs.forEach(blog => {
            console.log(blog);    
    })}
};

console.log(user);
console.log(user.blogs);
let nasloviBlogova = user.blogs;
//Primer 1
for(let i = 0; i < nasloviBlogova.length; i++){
    document.body.innerHTML += `<h3>${nasloviBlogova[i]}</h3>`;
};
// Primer 2
for(let i = 0; i < user.blogs.length; i++){
    document.body.innerHTML += `<h3>${user.blogs[i]}</h3>`;
};
// Primer 3
user.blogs.forEach(el => {
    document.body.innerHTML += `<h3>${el}</h3>`;
});

// Poziv metoda
user.login();
user.login();
user.logout();

// Poziv metoda koji u sebi sadrzi poziv nekog propertija
user.logBlogs();

// this
console.log(this); // Windows objekat


//////////////////////////////// VEZBANJE //////////////////////////////////////////

/* 1  Zadatak
Formirati objekat dan koji sadrži:
- Datum (string u formatu YYYY/MM/DD),
- Kiša (true/false),
- Sunce (true/false),
- Oblačno (true/false),
- Vrednosti temperature (Niz temperatura tog dana).
*/

let dan = {
    datum: `2020/12/23`,
    kisa: true,
    sunce: true,
    oblacno: true,
    vrednostiTemp: [-3, -1, 0, -1, -2, -2, -3, -3, 13],
    // 1. Zadatak - Određuje i vraća prosečnu temperaturu izmerenu tog dana.
    prosecnaTemp: function(){ 
        let suma = 0;
        let broj =0;
        this.vrednostiTemp.forEach(el => {
            suma += el;
            broj++;
        })
        return broj != 0 ? suma / broj : 0;
    },
    // 2. Zadatak - Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
    natprosecnaTemp: function(){ 
        let broj = 0;
        let pt = this.prosecnaTemp(); // Ovako je najbolje !!!
        this.vrednostiTemp.forEach(el => {
            if (el > pt){
                broj++;
            }
        });
        return broj;
    },
    // 3. Zadatak - Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    maxTemp: function(){ 
        let max = this.vrednostiTemp[0];
        this.vrednostiTemp.forEach(el => {
            if(max < el){
                max = el;
            }
        });
        let broj = 0;
        this.vrednostiTemp.forEach(el => {
            if(el == max){
                broj++;
            }
        });
        return broj;
    },
    // 4. Zadatak - Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
    brojMerenjaUtokuDana: function(temp1, temp2){ 
        this.vrednostiTemp.forEach(el => {
            if(temp1 < el && temp2 > el){
                 console.log(el);
            } 
        });
        // 5. Zadatak - Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false.        
        return (this.vrednostiTemp.length / 2) < this.natprosecnaTemp();
                    // 2.5                                  2
    },
    // 6. Zadatak - Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
    ledenDan: function(){
        let ledenDan = true;
        this.vrednostiTemp.forEach(el => {
            if(el > 0){
                ledenDan = false;
            }
        });
        return ledenDan;
    },
    // 7. Zadatak - Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
    tropskiDan: function(){
        let tropskiDan = true;
        this.vrednostiTemp.forEach(el => {
            if(el > 24){
                tropskiDan = true;
            } else{
                tropskiDan =  false;
            }
        });
        return tropskiDan;
    },
    // 8. Zadatak - Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
    nepovoljanDan: function(){
        let nepovoljanDan = true;
        this.vrednostiTemp.forEach(i => {
            if((i && i + 1 || i - 1) >= 8){
                nepovoljanDan = true;
            } else{
                nepovoljanDan =  false;
            }
        });
        return nepovoljanDan;
    },
    // 9. Zadatak - Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
    neuobicajeniDan: function(){
        let kisa = this.kisa;
        let oblacno = this.oblacno;
        let sunce = this.sunce;
        let neuobicajeniDan = false;
        this.vrednostiTemp.forEach(el => {
            if(kisa == true && el <= -5 || oblacno == true && el > 25 || kisa == true && oblacno == true && sunce == true){
                neuobicajeniDan = true;
            } else {
                neuobicajeniDan = false;
            }
        });
        return neuobicajeniDan;
    }
};
console.log(dan.prosecnaTemp());
console.log(dan.natprosecnaTemp());
console.log(dan.maxTemp());
console.log(dan.brojMerenjaUtokuDana(dan.vrednostiTemp[2], dan.vrednostiTemp[4]));
console.log(dan.ledenDan());
console.log(dan.tropskiDan());
console.log(dan.nepovoljanDan());
console.log(dan.neuobicajeniDan());


