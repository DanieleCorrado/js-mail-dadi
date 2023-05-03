// genero il risultato del dado per l'utente

const userDiceRoll = (Math.floor(Math.random() * 6) + 1);

// Genero il risultato del dado per il computer

const computerDiceRoll = (Math.floor(Math.random() * 6) + 1);

console.log(`Il risultato dell'utente è: ${userDiceRoll}, mentre il risultato del computer è: ${computerDiceRoll}`);

// Controllo quale dei due valori è maggiore per decretare il vincitore

if (userDiceRoll > computerDiceRoll) {

  console.log("L'utente ha vinto");

} else if (computerDiceRoll > userDiceRoll){

  console.log("Il computer ha vinto");

} else {
  console.log("C'è stato un pareggio");
}