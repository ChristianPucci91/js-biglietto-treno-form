// mettiamo in display none la parte del biglietto

document.getElementById("biglietto").style.display = "none";

// Diamo delle variabili ai due bottoni

var button1 = document.getElementById("button_genera");
var button2 = document.getElementById("button_annulla");

// diamo le funzionalità del bottone genera

  button1.addEventListener('click',
    function() {

      // Ottieni valori input utente
      var nome = document.getElementById('nome').value;
      //console.log(nome);
      var km = document.getElementById('km').value;
      //console.log(km);
      var eta = document.getElementById('eta').value;
      // console.log(eta);
      
      // Valori di output
      var sconto = document.getElementById('sconto')

      // mettiamo in display block la parte del BIGLIETTO
      document.getElementById("biglietto").style.display = "block";

      // Calcolo biglietto
       var costoBiglietto = 0.21 * km;
       document.getElementById('costo').innerHTML = costoBiglietto;

       // output tariffa standard
       sconto = "Tariffa <br> standard";

       // calcolo sconto a seconda della categoria pax

         if ( eta == "minorenne" ) {

           // sconto 20%
           costoBiglietto -= costoBiglietto * 0.2;
           sconto = "Sconto <br> Minorenne";
         } else if ( eta == "over65" ) {

           // sconto 40%
           costoBiglietto -= costoBiglietto * 0.4;
           sconto = "Sconto <br> Over 65";
         }

         // decimali
        costoBiglietto = costoBiglietto.toFixed(2) + '€';

        // Numero random per la carrozza da 1 a 10
        var carrozza = Math.floor( Math.random() * 10) + 1;

        // Numero random per codice cp da 1 a 100000
        var codice = Math.floor( Math.random() * 100000  ) + 1;

        // Inseriamo valori nella pagina
        document.getElementById('passeggero').innerHTML = nome;
        document.getElementById('sconto').innerHTML = sconto;
        document.getElementById('carrozza').innerHTML = carrozza;
        document.getElementById('codice').innerHTML = codice;
        document.getElementById('costo').innerHTML = costoBiglietto;

  }
  );

      // Resettare il biglietto
    button2.addEventListener('click',
      function() {

        // Reset campi da compilare
        document.getElementById('nome').value = '';
        document.getElementById('km').value = 1;
        document.getElementById('eta').value = ('');

        // Reset biglietto
        document.getElementById('sconto').innerHTML = '';
        document.getElementById('carrozza').innerHTML = '';
        document.getElementById('codice').innerHTML = '';
        document.getElementById('costo').innerHTML = '';

        // rimettiamo in display none la parte del biglietto

        document.getElementById("biglietto").style.display = "none";

      }
    );
