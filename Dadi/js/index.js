// Versione automatica con entrambi i valori generati casualmente e output mostrato in console

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


// Versione manuale, l'utente inserisce il valore desiderato in un form e il risultato è mostrato nel body

let Form = document.getElementById("form");

const userNumber = 0;

Form.addEventListener("submit", (e) => {
  e.preventDefault();

  // inizializzo il valore inserito dall'utente

  let userNumber = document.getElementById("user-number");

  // Genero il risultato del dado per il computer

  const computerNumber = (Math.floor(Math.random() * 6) + 1);

  // Controllo se il valore inserito dall'utente rispetta la condizione richiesta

  if (userNumber.value >= 1 && userNumber.value <= 6) {

    document.getElementById("result").style.display = "block";

    // Mostro sul sito il valore inserito dall'utente e il valore "scelto" dal computer

    document.getElementById("user-value").innerHTML = userNumber.value;

    document.getElementById("computer-value").innerHTML = computerNumber;

    // Controllo quale dei due valori è maggiore per decretare il vincitore

    if (userNumber.value > computerNumber) {

      document.getElementById("winner").innerHTML = "L'utente ha vinto";

    } else if (computerNumber > userNumber.value){

      document.getElementById("winner").innerHTML = "Il computer ha vinto";

    } else {
      document.getElementById("winner").innerHTML = "C'è stato un pareggio";
    }
      
  } else {
      alert("Valore non valido! Inserire un valore compreso tra 1 e 6");
  }

}

);