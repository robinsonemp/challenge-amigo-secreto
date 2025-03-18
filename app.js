// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables
const listaAmigos = [];

function agregarAmigo() {
    const entradaAmigo = document.getElementById('amigo');
    const nombreAmigo = entradaAmigo.value;

   if (nombreAmigo) {
       listaAmigos.push(nombreAmigo);
       entradaAmigo.value = '';
       displayList();
       SelectList();
   }
}

function displayList() {
    const listElement = document.getElementById('list');
    listElement.innerHTML = '';

    listaAmigos.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.onclick = () => removeFromList(index);
        listElement.appendChild(listItem);
    });
}

function updateSelectList() {
    const selectList = document.getElementById('selectList');
    selectList.innerHTML = '';

    listaAmigos.forEach((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = item;
        selectList.appendChild(option);
    });
}

function removeFromList(index) {
    listaAmigos.splice(index, 1);
    displayList();
    updateSelectList();
}

function sortearAmigo() {
    if (listaAmigos.length > 0) {
        const randomIndex = Math.floor(Math.random() * listaAmigos.length);
        const selectedFriend = listaAmigos[randomIndex];
        alert(`El amigo sorteado es: ${selectedFriend}`);
        removeFromList(randomIndex);
    } else {
        alert('La lista está vacía.');
    }
}