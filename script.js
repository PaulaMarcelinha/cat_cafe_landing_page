// book a table popup / modal

const openButton = document.getElementById('btBtn');
const closeButton = document.getElementById('btClose');

function toggleModal() {
    const modalDiv = document.querySelector('.btModal');
    modalDiv.classList.toggle('show');

}

openButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);


// CAT QUOTE GENERATOR

let quotes = [
    "\“All you need is love and a cat.\” – Unknown",
    "\“In ancient times cats were worshipped as gods; they have not forgotten this.\” – Terry Pratchett",
    "\“Time spent with cats is never wasted.\” – Sigmund Freud",
    "\“Cats choose us; we don’t own them.\” – Kristin Cast",
    "\"Meow meeeeooooow\" -Mei"
    
    
  ];
  
  
  function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('catQuote').innerHTML = quotes[randomNumber];
    }
  
  window.onload=newQuote;  //when page loads, quote appears
  
  