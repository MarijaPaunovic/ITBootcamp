export class Pacijent {
    constructor(i, v, t){
        this.ime = i;
        this.visina = v; // visina je u cm / za metre => cm/100
        this.tezina = t; // tezina je u kg
    }
    // Seteri i geteri
    // Ime
    set ime(i){
        this._ime = i;
    }
    get ime(){
        return this._ime;
    }
    // Visina
    set visina(v){
        if(v < 0 && v > 250){
            console.log(`Visina nije dobro uneta`);
            this._visina = 0;
        } else {
            this._visina = v;
        }
    }
    get visina(){
        return this._visina;
    }
    // Tezina
    set tezina(t){
        if(t < 0 && t > 550){
            console.log(`Tezina nije dobro uneta`);
            this._tezina = 0;
        } else {
            this._tezina = t;
        }
    }
    get tezina(){
        return this._tezina;
    }

    // Ostale metode
    // Stampa podataka o pacijentu
    stampaj(){
        // document.body.innerHTML = `<h3><u>Podaci o pacijentu</u></h3><p><strong>Ime pacijenta:</strong> ${this.ime}</p><p><strong>Visina pacijenta:</strong> ${this.visina}</p><p><strong>Težina pacijenta:</strong> ${this.tezina}</p>`;
        console.log(this);
    }
    // Stampanje liste
    stampajListu(){
        let htmlLista = `<ul>
        <li>Ime: ${this.ime}</li>
        <li>Visisna: ${this.visina}</li>
        <li>Težina: ${this.tezina}</li>
        </ul>`;
        return htmlLista;
    }
    // BMI
    bmi(){
        // Racunati prema BMI = kg / m2;
        let kg = this.tezina;
        let m2 = (this.visina / 100) * 2;
        let bmi = kg / m2;
        // return document.body.innerHTML += `<p><strong>BMI pacijenta je:</strong> ${bmi}</p>`;
        let bmiRound = Math.round((bmi + Number.EPSILON) * 100) / 100;
        return bmiRound;
    }
    // Kritican BMI
    kritican(){
        let bmi = this.bmi();
        if(bmi < 15 || bmi > 40){
            return `<span style="color: red; font-size: 20px;">true</span>`;
        } else {
            return false;
        }
    }

};