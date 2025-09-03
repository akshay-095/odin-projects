const myLibrary = [];

function Book(b, n, a, p) {
    this.book_no = b;
    this.name = n;
    this.author = a;
    this.price = p;
}

// Corrected function name to be consistent with the listener
function addBookToLibrary(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault(); 
    
    const bkno = document.getElementById('bkno').value;
    const name = document.getElementById('book').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;

    const book = new Book(bkno, name, author, price);
    myLibrary.push(book);

    console.log(myLibrary);
}

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    
    // Pass the function reference (without parentheses)
    // and use the correct function name
    submitButton.addEventListener('click', addBookToLibrary);
});