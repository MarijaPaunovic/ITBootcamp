"use strict";

console.log(`Objekti u objektu`);

/////////////////// BLOGOVI /////////////////////////////
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

let blog4 = {
    title: `Uvod u JS`,
    likes: 150,
    dislike: 50
};

let blog5 = {
    title: `IF Naredba grananja`,
    likes: 250,
    dislike: 160
};

/////////////////// KORISNICI /////////////////////////////
let user1 = {
    username: 'Jelena Matejic',
    age: 27,
    blogs:[blog1, blog2, blog3],
    sumLikes: function(){
        let s = 0;
        this.blogs.forEach(u => {
            s += u.likes;
        });
        return s;
    }
};

let user2 = {
    username: 'Stefan Stanimirovic',
    age: 32,
    blogs:[blog4, blog5],
    sumLikes: function(){
        let s = 0;
        this.blogs.forEach(u => {
            s += u.likes;
        });
        return s;
    }
};

// Ispis
console.log(user1.username);

// Podaci o prvom blogu korisnika 1
console.log(user1.blogs[0]);

// Naslov prvog bloga korisnika 1
console.log(user1.blogs[0].title);

//////////////////   VEZBANJE   /////////////////////////

// 1. Zadatak - Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.
console.log(`--- 1 Zadatak ---`);
// Niz korisnika
let users = [user1, user2];

// Ko su autori blogova?
users.forEach(u => {
    console.log(u.username);
})

// Ispitati sve naslove blogova koji su napisali autori iz niza users
users.forEach(u => {
    // u je jedan user iz niza
    let blogsU = u.blogs; // Svi blogovi tekuceg korisnika
    blogsU.forEach(b => {
        console.log(b.title);
    });
});


// 2. Zadatak - Ispisati imena onih autora koji imaju ispod 30 godina
// let users = [user1, user2];
console.log(`--- 2 Zadatak ---`);
users.forEach(u => {
    if(u.age < 30){
        console.log(u.username);
    };
});


// 3. Zadatak - Ispisati naslove onih blogova koji imaju više od 50 lajkova
console.log(`--- 3 Zadatak ---`);
users.forEach(u => {
    let blogsU = u.blogs; // niz blogova tekuceg korisnika u
    blogsU.forEach(b => {
        if(b.likes > 50){
           console.log(b.title); 
        }
    });
})


// 4 Zadatak -Ispisati sve blogove autora čiji je username ’Jelena Matejic’
console.log(`--- 4 Zadatak ---`);
users.forEach(u => {
    if(u.username == "Jelena Matejic"){
        let blogsU = u.blogs; // niz blogova tekuceg korisnika u
        blogsU.forEach(b => {
           console.log(b.title); 
    });
    }
});
// 2. nacin
users.forEach(u => {
    let blogsU = u.blogs;
    if(u.username == "Jelena Matejic"){
        blogsU.forEach(b => { // u.blogs.forEach...
           console.log(b.title); 
    });
    }
});


// 5. Zadatak - Ispisati imena onih autora koji imaju ukupno više od 200 lajkova za blogove koje su napisali
console.log(`--- 5 Zadatak ---`);
// 1. nacin
users.forEach(u => {
    let sumaLajkova = 0; // suma lajkova jednog usera
    // Krecem se od bloga do bloga korisnika u
    u.blogs.forEach(b => {
        sumaLajkova += b.likes;
    });
    if(sumaLajkova > 200){
        console.log(u.username);
    }
});

// 2. nacin
// metoda sumLikes u svakom useru
users.forEach(u => {
    if (u.sumLikes() > 200) {
      console.log(u.username);
    }
  });
  
// 3. nacin
let sum = blogs => {
    let suma = 0;
    blogs.forEach(e => {
      suma += e.likes;
    });
    return suma;
};
console.log(sum(user1.blogs));
  
users.forEach(e => {
    let userBlogs = e.blogs;
    let likes = sum(userBlogs);
    if (likes > 200) {
      console.log(e.username);
    }
});  


// 6. Zadatak - Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
console.log(`--- 6 Zadatak ---`);
// Jelena likes: 30 50 70 (avg. likes Jelena (30+50+70) / 3 = 50)
// Stefan likes: 150 250(avg. likes Stefan (150+250) / 2 = 200)

// GLOBALNI PROSEK: (30 + 50 + 70 + 150 + 250) / 5 = 550 / 5 = 110

// NIJE ISTO sto i (Jelenin prosek lajkova + Stefanov prosek lajkova) / 2 = (50+200) / 2 = 125

let globalAvgLikes = arr => {
    let globalSum = 0; // suma svih lajkova svih korisnika
    let globalBr = 0; // broj blogova svih korisnika

    arr.forEach(u => {
        globalSum += u.sumLikes(); // dodaj koliko je pojedinacni korisnik imao ukupno lajkova za sve svoje blogove
        globalBr += u.blogs.length; // dodaj koliko je pojedinacni korisnik imao blogova
    });

    return globalSum / globalBr;
}
console.log(`Globalni prosek lajkova je: ${globalAvgLikes(users)}`);

let blogoviSaNatprosecnoLajkova = arr => {
    let globalAvg = globalAvgLikes(arr);
    arr.forEach(u => {
        u.blogs.forEach(b => {
            if(b.likes > globalAvg){
                console.log(b.title);
            }
        })
    }); 
}
console.log(`Ispis naslova blogova sa natprosecnim brojem lajkova:`);
blogoviSaNatprosecnoLajkova(users);

// 7. Zadatak - Ispisati naslove onih blogova koji imaju ispodprosečan broj negativnih ocena
console.log(`--- 7 Zadatak ---`);

let blogoviSaIspodprosecnoLajkova = arr => {
    let globalAvg = globalAvgLikes(arr);
    arr.forEach(u => {
        u.blogs.forEach(b => {
            if(b.dislike < globalAvg){
                console.log(b.title);
            };
        });
    });
};
console.log(`Ispis naslova blogova koji imaju ispodprosečan broj negativnih ocena:`);
blogoviSaIspodprosecnoLajkova(users);

// 8. Zadatak - VREMENSKA PROGNOZA

// Napraviti niz dan objekata (podsetiti se objekta dan sa 14. slajda i kreirati nekoliko takvih objekata)

let dan1 = {
    datum: `2020/12/23`,
    kisa: true,
    sunce: true,
    oblacno: true,
    vrednostiTemp: [-3, -1, 0, -1, -2, -2, -3, -3, 13],
    prosecnaTemp: function(){ 
        let suma = 0;
        let broj =0;
        this.vrednostiTemp.forEach(el => {
            suma += el;
            broj++;
        })
        return broj != 0 ? suma / broj : 0;
    },
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
};

let dan2 = {
    datum: `2000/10/13`,
    kisa: true,
    sunce: true,
    oblacno: true,
    vrednostiTemp: [5, 7, 10, 13, 15, 12, 9, 5, 3],
    prosecnaTemp: function(){ 
        let suma = 0;
        let broj =0;
        this.vrednostiTemp.forEach(el => {
            suma += el;
            broj++;
        })
        return broj != 0 ? suma / broj : 0;
    },
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
};

let dan3 = {
    datum: `2010/01/23`,
    kisa: true,
    sunce: false,
    oblacno: true,
    vrednostiTemp: [-10, -10, -8, -7, -5, -8, -10, -10, -11],
    prosecnaTemp: function(){ 
        let suma = 0;
        let broj  =0;
        this.vrednostiTemp.forEach(el => {
            suma += el;
            broj++;
        })
        return broj != 0 ? suma / broj : 0;
    },
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
};

let nizArr = [dan1, dan2, dan3];

// 8.1 - Napraviti arrow funkciju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:

// - Ispisati prvi od njih
// - Ispisati poslednji od njih

console.log(`--- 8.1 Zadatak ---`);

let maxIzmerenaTemp = niz => {
    let maxDuz = 0;

    niz.forEach((dan, i) => {
        if(dan.vrednostiTemp.length > maxDuz){
            maxDuz = dan.vrednostiTemp.length;
            // - Ispisati prvi od njih
            console.log(`Prvi datum u kome je najviše puta izmerena temperatura: ${dan.datum}`);
        }
    }); 

    let index = [];
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].vrednostiTemp.length >= maxDuz){
            maxDuz = niz[i].vrednostiTemp.length;
            index = niz[i].datum;
        }
    }
    // - Ispisati poslednji od njih 
    console.log(`Poslednji datum u kome je najviše puta izmerena temperatura: ${index}`);
};
maxIzmerenaTemp(nizArr);


// 8.2. Zadatak - Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana
console.log(`--- 8.2 Zadatak ---`);

let kakviSuDani = niz => {
    let kisniDani = 0;
    let sunacaniDani = 0;
    let oblacniDani = 0;

    niz.forEach(dan => {
        if(dan.kisa == true){
            kisniDani++;
        }
        if(dan.sunce == true){
            sunacaniDani++;
        }
        if(dan.oblacno == true){
            oblacniDani++;
        }
    })
    console.log(`Kisnih dana je bilo: ${kisniDani} dana.`)
    console.log(`Suncanih dana je bilo: ${sunacaniDani} dana.`)
    console.log(`Oblacnih dana je bilo: ${oblacniDani} dana.`)
}
kakviSuDani(nizArr);

// 8.3. Zadatak - Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom

console.log(`--- 8.3 Zadatak ---`);

let natprosecniDani = niz =>{
    // let natprosecnaTemp = 0;
    // niz.forEach(dan => {
    //     natprosecnaTemp = dan.natprosecnaTemp();
    //     console.log(`Dana sa natprosecnom temp ${natprosecnaTemp}.`)
    // })
    
    let broj = 0;
    let prosecnaTemp = 0;

    niz.forEach(dan => {
        prosecnaTemp = dan.prosecnaTemp();
        
        dan.vrednostiTemp.forEach(el =>{
        if(el > prosecnaTemp){
            broj++;
        }
    })
    })

   
    return broj;
};
console.log(`Bilo je ${natprosecniDani(nizArr)} dana sa natprosečnom temperaturom.`)
// natprosecniDani(nizArr);