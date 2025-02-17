/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByLetter(nameArray, letter) {
    let filteredArray = [];
    for (let i = 0; i < nameArray.length; i++) {
        if (nameArray[i].charAt(0) === letter) {
            filteredArray.push(nameArray[i])
        }
    }
    return filteredArray
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filterByLetter(names, 'A'))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]


/* const filterByLetter = (nameArray, letter) => nameArray.filter(name => name[0] === letter); */