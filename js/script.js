// Dare display none a il biglietto

document.getElementById("biglietto").style.display = "none";

// Variabili da stabilire

var input1 = document.getElementById('nome');
console.log(input1.value);

var input2 = document.getElementById('km');
console.log(input2.value);

var input3 = document.getElementById('eta');
console.log(input3.value);

// Variabili di output

var nome_pax = document.getElementById('passeggero');

//variabile button Genera & annulla

var button1 = document.getElementById('button_genera');
var button2 = document.getElementById('button_annulla');

// Function genera

button1.addEventListener('click',
 function() {
   nome_pax.innerHTML = input1.value;
   document.getElementById("biglietto").style.display = "block";
} );

// Function annulla

button2.addEventListener('click',
 function() {
   input1.value = ('');
   document.getElementById("biglietto").style.display = "none";
} );


// prezzo biglietto ( 0.21€ per km * km inseriti dall'utente)

var prezzoBiglietto = ( km * 0.21 );

// prezzo biglietto scontato 20% ( prezzo intero - prezzo percentuale = prezzo scontato)

var prezzoScontato20 = ( prezzoBiglietto - ( prezzoBiglietto * 0.20 ));

// prezzo biglietto scontato 40% ( prezzo intero - prezzo percentuale = prezzo scontato)

var prezzoScontato40 = ( prezzoBiglietto - ( prezzoBiglietto * 0.40 ));


// tasti genera e annulla

// OUTPUT
// Nome passeggero

// Tipologia Sconto

// Numero carrozza

// Codice CP

// Costo biglietto
