import { Pacijent } from "./pacijent.js";

// let pacijent1 = new Pacijent(`Marko Markovic`, 198, 110);
// pacijent1.stampaj();
// console.log(pacijent1.bmi());
// console.log(pacijent1.kritican());

let p1 = new Pacijent(`Jelena`, 173, 66);
let p2 = new Pacijent(`Ana`, 180, 72);
let p3 = new Pacijent(`Pera`, 290, 80);
let p4 = new Pacijent(`Mika`, 167, 57);
let p5 = new Pacijent(`Mila`, 150, 70);

// 1. Kreirati niz od barem tri pacijenta.
let pacijenti = [p1, p2, p3, p4, p5];

// TABELA SA SVIM PODACIMA
let tabela = `<table>
<tr>
    <th>Ime pacijenta:</th>
    <th>Visina pacijenta:</th>
    <th>Tezina pacijenta:</th>
    <th>BMI pacijenta:</th>
    <th>Kritican pacijent:</th>
</tr>
`;
pacijenti.forEach(pac => {
    tabela += `
    <tr>
        <td>${pac.ime}</td>
        <td>${pac.visina}</td>
        <td>${pac.tezina}</td>
        <td>${pac.bmi()}</td>
        <td id="kritican">${pac.kritican()}</td>
    </tr>
    `;
});
tabela += `</table>`;
document.body.innerHTML += tabela;

// 2. Ispisati podatke o pacijentu sa najmanjom težinom.
let btnMinTez = document.getElementById(`minTez`);
let minTezRez = document.getElementById(`minTezRez`);

// 3. Ispisati podatke o pacijentu sa najvećom bmi vrednošću. 
let btnMaxBMI = document.querySelector(`#maxBMI`);
let maxBMIRez = document.querySelector(`#maxBMIRez`);

// 4. Ispisati sve pacijente čije ime sadrži slovo A.
let btnImeSaA = document.getElementById(`imeSaA`);
let imeSaArez = document.getElementById(`imeSaArez`);

btnMinTez.addEventListener(`click`, e => {
    e.preventDefault;

    let min = pacijenti[0]; // pacijent[0] je objekat
    // pacijenti[0].tezina - pozivamo geter

    // for (let i = 0; i < pacijenti.length; i++) {
    //     if(pacijenti[i].tezina < min.tezina){
    //         min = pacijenti[i];
    //     }
    // };
    // console.log(min)
    
    pacijenti.forEach(p => {
        if(min.tezina > p.tezina){
            min = p;
        }
    })
    // min.stampaj();
    
    // 2. Ispisati podatke o pacijentu sa najmanjom težinom.
    minTezRez.innerHTML = min.stampajListu();

});

btnMaxBMI.addEventListener(`click`, e => {
    e.preventDefault;

    let max = pacijenti[0];

    for (let i = 1; i < pacijenti.length; i++) {
        if(pacijenti[i].bmi() > max.bmi()){
            max = pacijenti[i];
        }
    };
    
    // 3. Ispisati podatke o pacijentu sa najvećom bmi vrednošću.
    maxBMIRez.innerHTML = max.stampajListu();

});

btnImeSaA.addEventListener(`click`, () => {
    let pacSaA = [];

    for (let i = 0; i < pacijenti.length; i++) {
        if(pacijenti[i].ime.includes(`A`)){
            pacSaA[i] = pacijenti[i];
        }
    }
    
    // 4. Ispisati sve pacijente čije ime sadrži slovo A.
    pacSaA.forEach(pac => {
        imeSaArez.innerHTML = pac.stampajListu();
    })
    
})

// 5. Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

function srednjaVisina(nizPacijenata){
    let sumaVisinePac = 0;
    let brPac = nizPacijenata.length;
    for (let i = 0; i < nizPacijenata.length; i++) {
        sumaVisinePac += nizPacijenata[i].tezina;    
    }
    let srednjaVisinaPacijenata = (brPac != 0) ? sumaVisinePac / brPac : 0;
    return srednjaVisinaPacijenata;
}
let prVisPac = srednjaVisina(pacijenti);
console.log(`Srednja visina pacijenata je: ${prVisPac}.`);
