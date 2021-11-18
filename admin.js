$(function () {
  let termekek = [];
  $.ajax({
    type: "GET",
    url: "./src/webaruhaz1.json",
    data: { get_param: "value" },
    dataType: "json",
    success: function (data) {
      $.each(data, function (index, element) {
        termekek.push(element);
      });
      megjelenit();
      console.log("jeah conyo")
    },
  });
  function megjelenit() {
    for (let index = 0; index < termekek.length; index++) {
        $("table").append('<tr id="'+index+'"><td>'+termekek[index].nev+'</td><td><img src="'+termekek[index].kep+'"/></td><td>'+termekek[index].leiras+'</td><td>'+termekek[index].ar+'</td><td torol-id="'+index+'"><button>TÖRLÉS</button></td><td modosit-id="'+index+'"><button>Módosítás</button></td></tr>');
        
    }
  }
});

//A kosár új fájlban lesz. 
//lesz egy konstruktora . a kostruktor annyit csinál hogy létrehoz egy kosár tömböt ami kezdetben üres .-> this.kosarElem=$("kosar")
//kaphat setElemet ami belerakja a tömbe az elemet. this.kosarba.push()


//Localstorage set item