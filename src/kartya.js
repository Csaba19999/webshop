class Kartya {

    constructor(elem, adat, idIndex){
        //Létrehozunk változókat az új elemhez.
        this.elem = elem;
        this.idIndex = idIndex;
        //Változókat hozunk létre az elem eggyek grafikus részihez.
        this.nev = this.elem.children("h3");
        this.kep = this.elem.children("img")//.attr('id', idIndex);
        this.leiras = this.elem.children("p");
        this.ar = this.elem.children("h4");
        this.gomb = this.elem.children("button").attr('id', idIndex);
        this.adat = adat;
        //konténer elemkenek értékeket adunk: 
        this.nev.html(this.adat.nev);
        this.kep.attr("src",this.adat.kep);
        this.leiras.html(this.adat.leiras);
        this.ar.html(this.adat.ar);
    }


   


}