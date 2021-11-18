$(function () {
  let termekek = [];
  let kosarTartalma = [];
  var valasztott;
  const cardSablon = $("card");
  $.ajax({
    type: "GET",
    url: "./src/webaruhaz1.json",
    data: { get_param: "value" },
    dataType: "json",
    success: function (data) {
      $.each(data, function (index, element) {
        termekek.push(element);
      });
      fizetesMenuFeltolt();
      megjelenit();
      kosarbaTesz();
      jsonLocalhostbolKosarFeltolt();
    },
  });
  function megjelenit() {
    for (let index = 0; index < termekek.length; index++) {
        $("article").append('<div class="card"><h3 class="termek-neve">'+termekek[index].nev+'</h3><img class="termek-img" src="'+termekek[index].kep+'"><p class="termek-leiras">'+termekek[index].leiras+'</p><div class="gomb-ar"><button class="kosarba-gomb" card-id="'+index+'">Kosárba tesz</button><h4 class="ar">'+termekek[index].ar+'</h4></div></div>');
        
    }
  }
var index = 0;
  function kosarbaTesz(){
    jsonLocalhostbolKosarFeltolt();
    $('.kosarba-gomb').click(function(){
        valasztott = $(this).attr('card-id');
        console.log("kasárba tetted "+valasztott);
        kosarTartalma.push(termekek[valasztott]);
        console.log("kosár jelenlegi tartalma: "+JSON.stringify(kosarTartalma));
        $('#kosar-tartalom').append('<div class="termek-kosarban" id="'+index+'"> <p class="termek-kosarba-nev">'+termekek[valasztott].nev+'</p><p class="termek-kosarbban-ar">'+termekek[valasztott].ar+'</p><button class="termek-kosarban-delete" data-id="'+index+'"><img src="kepek/768px-Red_X.svg.png"></button></div>');
        index++;
        kosarbolTorol();
        jsonToLocal();
    });
    console.log("A kosár elemei: "+kosarTartalma);
    
  }
  function fizetesMenuFeltolt(){
    //localStorage.setItem("test", JSON.stringify(test));
    var LocalStorageDatas = localStorage.getItem("kosarTartalma");
    LocalStorageDatas = JSON.parse(LocalStorageDatas); //var test is now re-loaded!
    for (let index = 0; index < LocalStorageDatas.length; index++) {
      $('#kosar-tartalom').append('<div class="termek-kosarban" id="'+index+'"> <p class="termek-kosarba-nev">'+LocalStorageDatas[index].nev+'</p><p class="termek-kosarbban-ar">'+LocalStorageDatas[index].ar+'</p><button class="termek-kosarban-delete" data-id="'+index+'"><img src="kepek/768px-Red_X.svg.png"></button></div>');
    }
    kosarbolTorol()
  }

  function jsonToLocal(){
    localStorage.setItem("kosarTartalma", JSON.stringify(kosarTartalma));
    console.log("HOZZÁADVA A LOCALSTORE-HOZ: "+localStorage.getItem("kosarTartalma")+"\n");
  }



  function jsonLocalhostbolKosarFeltolt(){
    if(localStorage.getItem('kosarTartalma' !== null)){
      kosarTartalma.push(JSON.parse(localStorage.getItem('kosarTartalma')));
      localStorage.setItem('kosarTartalma', JSON.stringify(kosarTartalma));
      kosarTartalma.push(termekek[valasztott]);
        console.log("kosár jelenlegi tartalma JSONből olvasva: "+JSON.stringify(kosarTartalma));
        $('#kosar-tartalom').append('<div class="termek-kosarban" id="'+index+'"> <p class="termek-kosarba-nev">'+termekek[valasztott].nev+'</p><p class="termek-kosarbban-ar">'+termekek[valasztott].ar+'</p><button class="termek-kosarban-delete" data-id="'+index+'"><img src="kepek/768px-Red_X.svg.png"></button></div>');
        index++;
    }
      console.log("A Kosár tartalma local hostból: "+kosarTartalma);
    
  }

  function kosarbolTorol(){
    $('.termek-kosarban-delete').click(function(){
      valasztott = $(this).attr('data-id');
      console.log("Törlésre kiválasztott elem: "+valasztott);
      kosarTartalma.splice(valasztott,1)
      $("#"+valasztott).remove();
      localStorage.setItem('kosarTartalma', JSON.stringify(kosarTartalma));
      console.log("törölve a LOCALSTOREGE.ból: "+localStorage.setItem('kosarTartalma', JSON.stringify(kosarTartalma)));
    });
  }

  //termek-kosarban-delete
});

//A kosár új fájlban lesz. 
//lesz egy konstruktora . a kostruktor annyit csinál hogy létrehoz egy kosár tömböt ami kezdetben üres .-> this.kosarElem=$("kosar")
//kaphat setElemet ami belerakja a tömbe az elemet. this.kosarba.push()


//Localstorage set item