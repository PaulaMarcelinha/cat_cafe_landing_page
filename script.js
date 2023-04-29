// book a table popup / modal

const openButton = document.getElementById('btBtn');
const closeButton = document.getElementById('btClose');

function toggleModal() {
    const modalDiv = document.querySelector('.btModal');
    modalDiv.classList.toggle('show');

}

openButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);