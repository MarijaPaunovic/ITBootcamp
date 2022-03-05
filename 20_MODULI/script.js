"use strict";

console.log(`---Moduli---`);

//////////////////////////////////
// let prezime = `Paunovic`; - ovo moze ali nije preporucljivo

import { zdravo, ime } from "./zdravo.js";

// ime = `Marko`; - nije moguce menjati vrednost promenljivih iz modula
// let ime = 10; i nije dozvoljeno redefinisati promenljivu
// nije moguce imati "lokalnu" promenljivu sa istim imenom

zdravo("Pera");
console.log(ime);