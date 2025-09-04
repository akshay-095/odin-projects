const myLibrary = [];
function Book(b, n, a, p) {
    this.book_no = b;
    this.name = n;
    this.author = a;
    this.price = p;
}
function addBookToLibrary(event) {
    event.preventDefault(); 
    const bkno = document.getElementById('bkno').value;
    const name = document.getElementById('book').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;
    const book = new Book(bkno, name, author, price);
    myLibrary.push(book);
    const bookDisplay = document.createElement('div');
    bookDisplay.classList.add('result');
    bookDisplay.innerHTML = `Book No: ${book.book_no}<br>Name: ${book.name}<br>Author: ${book.author}<br>Price: ${book.price}`;
    const booksContainer = document.getElementById('books-container');
    booksContainer.appendChild(bookDisplay);
}

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', addBookToLibrary);
});
