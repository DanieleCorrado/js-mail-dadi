// Inizializzo l'arrey
const validEmail = ["prova@gmail.com", "daniele@virgilio.it", "test@test.it"]
let validUserEmail;

userEmail = prompt("Inserisci la tua Email:");

for (let i = 0; i < validEmail.length; i++) {

  if( validEmail[i] === userEmail) {

    validUserEmail = 1;

  }

}

if (validUserEmail == 1) {
  console.log("Puoi accedere all'evento");
} else {
  console.log("Non puoi accedere all'evento");
}