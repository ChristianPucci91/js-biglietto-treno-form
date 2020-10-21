// Dare display none a il biglietto

document.getElementById("biglietto").style.display = "none";

// Variabili da stabilire

var input1 = document.getElementById('nome');
console.log(input1.value);

var input2 = document.getElementById('km');
console.log(input2.value);

var input3 = document.getElementById('eta');
console.log(input3.value);

// Variabili di calcolo prezzo intero / sconto 20% / sconto 40%

var prezzoBiglietto = ( input2.value * 0.21 );
//
// var prezzoScontato20 = ( prezzoBiglietto - ( prezzoBiglietto * 0.20 ));
//
// var prezzoScontato40 = ( prezzoBiglietto - ( prezzoBiglietto * 0.40 ));



// Variabili di output

var nome_pax = document.getElementById('passeggero');
var offerta = document.getElementById('sconto');
var costo_biglietto = document.getElementById('costo');
var carrozza = document.getElementById('carrozza');
var codice = document.getElementById('codice');

//variabile button Genera & annulla

var button1 = document.getElementById('button_genera');
var button2 = document.getElementById('button_annulla');

// Function genera

button1.addEventListener('click',
 function() {
   nome_pax.innerHTML = input1.value ;
   offerta.innerHTML = input3.value;
   costo.innerHTML = input2.value;
   carrozza.innerHTML = Math.floor(Math.random() * 10) + 1;
   codice.innerHTML = Math.floor(Math.random() * 100000) + 1 ;
   document.getElementById("biglietto").style.display = "block";
} );

// Function annulla

button2.addEventListener('click',
 function() {
   input1.value = ('');
   input2.value = (1);
   input3.value = ('');
   document.getElementById("biglietto").style.display = "none";
} );





// tasti genera e annulla

// OUTPUT
// Nome passeggero

// Tipologia Sconto

// Numero carrozza

// Codice CP

// Costo biglietto
