// js biglietto treno


/* Calcolo prezzo del treno:
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio. Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65. */


// chiedere all'utente il numero di km che vuole percorrere creando la var

// chiedere all'utente la sua età creando la var

// creare var prezzo base , 0.21 € al km

// creare var scontata del 40% per gli over 65

// creare var scontata del 20% per i minorenni

// applicare sconto in caso di over 65 e under 18

// creare var prezzo biglietto finale


// calcolare prezzo base del biglietto, il prezzo con sconto per gli over 65 e per i minorenni

var prezzobase = kmutente * 0.21;
var prezzofinale;

var kmutente = prompt("Quanti km vuoi percorrere?");

var anniutente = prompt("Quanti anni hai?");

if (anniutente > 18 && anniutente < 66){
  prezzofinale = prezzobase;
} else if ( anniutente < 18 ){
  prezzofinale = prezzobase - ((prezzobase * 20) / 100);
} else if  (anniutente > 65){
  prezzofinale = prezzobase - ((prezzobase * 40) / 100);
}

document.getElementById('idp').innerHTML = "Prezzo biglietto ottenuto" + prezzofinale + " €";
