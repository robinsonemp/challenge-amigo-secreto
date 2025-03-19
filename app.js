// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const list = [];

        function addToList() {
            const inputBox = document.getElementById('inputBox');
            const text = inputBox.value;

            if (text) {
                list.push(text);
                inputBox.value = '';
                displayList();
               SelectList();
            }
        }

        function displayList() {
            const listElement = document.getElementById('list');
            listElement.innerHTML = '';

            list.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                listItem.onclick = () => removeFromList(index);
                listElement.appendChild(listItem);
            });
        }

        function updateSelectList() {
            const selectList = document.getElementById('selectList');
            selectList.innerHTML = '';

            list.forEach((item, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = item;
                selectList.appendChild(option);
            });
        }

        function removeFromList(index) {
            list.splice(index, 1);
            displayList();
            updateSelectList();
        }

       
        function sortearAmigo() {
            if (list.length > 0) {
                const randomIndex = Math.floor(Math.random() * list.length);
                const selectedFriend = list[randomIndex];
                alert(`El amigo secreto escogido es: ${selectedFriend}`);
                removeFromList(randomIndex);
            } else {
                alert('La lista está vacía.');
            }
        }