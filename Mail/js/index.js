// Inizializzo l'arrey

const validEmail = ["prova@gmail.com", "daniele@virgilio.it", "test@test.it"]

let validUserEmail = 0;

// Chiedo all'utente di inserire la propria mail

userEmail = prompt("Inserisci la tua Email:");

// Esamino tutti gli elemeniti dell'array validEmail

for (let i = 0; i < validEmail.length; i++) {

  // Controllo se l'i-esimo elemento dell'array corrsponde alla mail inserita dall'utente

  if( validEmail[i] === userEmail) {

    validUserEmail = 1;
    console.log("Puoi accedere all'evento");
    i = validUserEmail.length;

  }

}

if (validUserEmail === 0) {

  console.log("Non puoi accedere all'evento");

}