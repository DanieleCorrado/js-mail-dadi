// Inizializzo l'arrey

const validEmail = ["prova@gmail.com", "daniele@virgilio.it", "test@test.it"];

let validUserEmail = 0;

// Richedo l'inserimento della mail all'utente

userEmail = prompt("Inserisci la tua Email:");

// Scorro tutti i valorori di validEmail

for (let i = 0; i < validEmail.length; i++) {

  // Controllo se l'i-esimo elemento dell'arrey corrisponde all'email inserita dal'utente

  if( validEmail[i] === userEmail) {

    validUserEmail = 1;
    console.log("Puoi accedere all'evento");
    i = validEmail.length;
  }

}


if (validUserEmail === 0) {

  console.log("Non puoi accedere all'evento");

}