var denise = {
  peso : 96,
  altezza : 153,
  salute : 100,
  fame : 5,
  cacca : 5,
  sonno: 5
}

var cose = [
  {nome: "chestnut", "salute" : 0, "cacca": 1, "fame": -1, frase: "CACCAstagne!"},
  {nome: "rice", "salute" : 5, "cacca": 1, "fame": -10, frase: "Questo mi fa bene"},
  {nome: "pizza", "salute" : -5, "cacca": 1, "fame": -30, frase: "Buono ma mi fa mmale"},
  {nome: "egg", "salute" : 0, "cacca": 1, "fame": -10, frase: "Mestruo di pollo! Buono!"},
  {nome: "doughnut", "salute" : -5, "cacca": 1, "fame": -10, frase: "Mi fa male! Ne voglio ancora!"},
  {nome: "ice-cream", "salute" : -5, "cacca": 1, "fame": -10, frase: "Mi fa male! Ne voglio ancora!"},
  {nome: "cake", "salute" : -5, "cacca": 1, "fame": -10, frase: "Voglio una sacher!"},
  {nome: "fries", "salute" : -1, "cacca": 1, "fame": -10, frase: "Voglio le patatine!"}
];

function ri(n) {return Math.floor((Math.random() * n) + 1);}

function parla(cosa) {
  $("#ballon").fadeIn();
  $("#ballon").html(cosa);
  setTimeout(function(){$("#ballon").fadeOut()}, 1000);
}

function aggiorna_statistiche(cosa) {
  for (var key in cosa) {
    if (!cosa.hasOwnProperty(key)) continue;
    if (denise.hasOwnProperty(key)) {
      denise[key]+=cosa[key];
      if (denise[key] > 100) denise[key] = 100;
      if (denise[key] < 0) denise[key] = 0;
      $("#"+key+">div").css("width",denise[key]+"%");
    }    
  }
}

//loop delle cose
setInterval(function(){
  var id = "#cosa"+ri(5);
  var quale = ri(cose.length-1);
  var classe = "twa twa-3x twa-"+cose[quale].nome;
  $(id).removeClass().addClass(classe);
  $(id).data( "quale", quale );
  aggiorna_statistiche({fame : ri(5)});
  if (denise.fame > 65) parla("HO FAME!!!");
  if (denise.cacca > 90) parla("MI SCAPPA!!!");
},2500);

$("#cose>i").click(function(){
  var quale = $(this).data("quale");
  parla(cose[quale].frase);
  aggiorna_statistiche(cose[quale]);
});