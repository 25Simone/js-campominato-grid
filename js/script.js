// functions
// funzione evento cambio colore al click del box
function createEvent(element) {
    element.addEventListener('click', function() {
        this.classList.toggle('green');
    })
}

// funzione per creare i box collegata all'evento
function createNewBox(container){
    const square = document.createElement('div');
    square.className = 'box';
    boxContainer.append(square); 
    createEvent(square);
}

// funzione per definire il numero di massimo di celle nella griglia
function createGrid(maxCell) {
    for (let i = 0; i < maxCell; i++) {
        createNewBox(boxContainer);
    }
}



// definisco la variabile di collegamento all'html
const boxContainer = document.querySelector('.container');

// definisco le variabili dei tre bottoni
const button1 = document.getElementById('button-level1');
const button2 = document.getElementById('button-level2');
const button3 = document.getElementById('button-level3');

// definisco gli eventi click dei tre bottoni
button1.addEventListener('click', function() {
    createGrid(100);
    boxContainer.classList.toggle('level1');
})
button2.addEventListener('click', function() {
    createGrid(81);
    boxContainer.classList.toggle('level2');
})
button3.addEventListener('click', function() {
    createGrid(49);
    boxContainer.classList.toggle('level3');
})