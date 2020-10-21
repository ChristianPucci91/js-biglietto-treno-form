// Dare display none a il biglietto

document.getElementById("biglietto").style.display = "none";

//variabile button Genera & annulla

var button1 = document.getElementById('button_genera');
var button2 = document.getElementById('button_annulla');

// Otteniamo il valore dei campi e gli diamo una variabile

var input1 = document.getElementById('nome').value;
// console.log(input1.value);
var input2 = document.getElementById('km').value;
// console.log(input2.value);
var input3 = document.getElementById('eta').value;
// console.log(input3.value);
var eta = document.getElementById('eta').value;
// console.log(eta);


// Variabili di calcolo prezzo intero / sconto 20% / sconto 40%

var prezzoBiglietto = ( input2 * 0.21 );
// console.log(costoBiglietto);
var prezzoScontato20 = ( prezzoBiglietto - ( prezzoBiglietto * 0.20 ));
// console.log(prezzoScontato20);
var prezzoScontato40 = ( prezzoBiglietto - ( prezzoBiglietto * 0.40 ));
// console.log(prezzoScontato40);

// Variabili di output

var nome_pax = document.getElementById('passeggero');
var offerta = document.getElementById('sconto');
var costo_biglietto = document.getElementById('costo');
var carrozza = document.getElementById('carrozza');
var codice = document.getElementById('codice');

// Function genera

    button1.addEventListener('click',
     function() {

           // output nome utente
           nome_pax.innerHTML = input1;
           // output tipologia sconto
           offerta.innerHTML = input3;
           // output carrozza da 1 a 10
           carrozza.innerHTML = Math.floor(Math.random() * 10) + 1;
           // output codice cp da 1 a 100000
           codice.innerHTML = Math.floor(Math.random() * 100000 ) + 1 ;
           // display block del box biglietto
           document.getElementById("biglietto").style.display = "block";

              // condizioni if & else


    } );

// Function annulla

    button2.addEventListener('click',
     function() {
           // dare un valore nullo al click annulla
           input1.value = ('');
           input2.value = (1);
           input3.value = ('');
           // display none del box biglietto dopo il click annulla
           document.getElementById("biglietto").style.display = "none";

    } );
