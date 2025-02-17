/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function prendiIniziali(nomiArray) {
    let inizialiArray = [];
    for (let i = 0; i < nomiArray.length; i++) {
        inizialiArray.push(nomiArray[i].charAt(0))
    }
    return inizialiArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(prendiIniziali(names))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


/* const prendiIniziali = nomiArray => {
    let inizialiArray = [];
    for (let i = 0; i < nomiArray.length; i++) {
        inizialiArray.push(nomiArray[i].charAt(0))
    }
    return inizialiArray;
}

console.log(prendiIniziali(names)) */