class Film {
    constructor(nasl, rez, godIzd, oc){
        this.naslov = nasl;
        this.reziser = rez;
        this.godinaIzdanja = godIzd;
        this.ocene = oc;
    }
    // Seteri i geteri

    // Naslov
    set naslov(nasl){
        this._naslov = nasl;
    }
    get naslov(){
        return this._naslov;
    }

    // Reziser
    set reziser(rez){
        this._reziser = rez;
    }
    get reziser(){
        return this._reziser;
    }

    // Godina izdanja
    set godinaIzdanja(godIzd){
        if(godIzd > 1800){
           this._godinaIzdanja = godIzd; 
        } else {
            this._godinaIzdanja = 1800;
        };        
    }
    get godinaIzdanja(){
        return this._godinaIzdanja;
    }
    // Ocene
    set ocene(oc){
        this._ocene = oc;
    }
    get ocene(){
        return this._ocene;
    }

    // Metode
    stampaj(){
        console.log(this);
    }

    // Dodavanje jedne ocene
    dodajOcenu(novaOcena){
        this._ocene.push(novaOcena);
    }

    // Prosek ocena
    prosek(){
        let oc = this.ocene;
        let sum = 0;
        let br = oc.length;

        for (let i = 0; i < oc.length; i++) {
            sum += oc[i];
        }
        let pr = (br !=0) ? sum / br : 0;
        return pr;
    }
    
}

export default Film;