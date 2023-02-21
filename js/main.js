const myName = prompt('Inserisci il tuo nome!');

const mySurname = prompt('Inserisci il tuo cognome!')

const myFavouriteColour = prompt('Ci siamo quasi! Ora inserisci il tuo colore preferito?')

const currentYear = '23'


document.getElementById('yourname').innerHTML = myName;

document.getElementById('yoursurname').innerHTML = mySurname;

document.getElementById('yourcolour').innerHTML = myFavouriteColour;

document.getElementById('yourpassword').innerHTML = myName + mySurname + myFavouriteColour + currentYear;