let arrayEmail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];

let email = prompt("Inserisci la tua email");

if (arrayEmail.indexOf(email) === -1) {
    alert("Email non esistente");
    arrayEmail.push(email);
    alert("Nuova email aggiunta");
    console.log("Gli utenti che posso entrare sono: " + arrayEmail);
    document.getElementById("utenti").innerHTML = arrayEmail;
} else {
    alert("Bentornato!");
    console.log("Gli utenti che posso entrare sono: " + arrayEmail);
    document.getElementById("utenti").innerHTML = arrayEmail;
}