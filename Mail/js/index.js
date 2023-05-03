// Inizializzo l'arrey

const validEmail = ["prova@gmail.com", "daniele@virgilio.it", "test@test.it"]

let validUserEmail = 0;

let Form = document.getElementById("form");


Form.addEventListener("submit", (e) => {
  e.preventDefault();

  // inizializzo l'email inserita dall'utente

  let userEmail = document.getElementById("user-email");

  // Esamino tutti gli elemeniti dell'array validEmail

  for (let i = 0; i < validEmail.length; i++) {

    // Controllo se l'i-esimo elemento dell'array corrsponde alla mail inserita dall'utente

    if( validEmail[i] === userEmail.value) {

      validUserEmail = 1;
      document.getElementById("result").innerHTML = "Puoi accedere all'evento";
      i = validUserEmail.length;

    }

  }

  if (validUserEmail === 0) {

    document.getElementById("result").innerHTML = "Non puoi accedere all'evento";

  }

  validUserEmail = 0;

}

);