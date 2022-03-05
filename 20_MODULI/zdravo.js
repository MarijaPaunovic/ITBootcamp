"use strrict";

function ispis(poruka) {
    console.log(poruka);
}

function zdravo(ime) {
    ispis(`Zdravo ${ime}!`);
};

let ime = `Marija`;

export {zdravo, ime};

/// drugi nacin
// export function zdravo(ime) {
//     ispis(`Zdravo ${ime}!`);
// };

// export let ime = `Marija`;