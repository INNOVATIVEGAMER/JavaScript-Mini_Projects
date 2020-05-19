
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const list = document.getElementById("book-list");
const container = document.querySelector(".container");
const form = document.getElementById("book-form");

class Book
{
    constructor(title,author,isbn)
    {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI
{
    addBookToList(book)
    {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><a href="#" class = "delete">X</a></td>`;
        list.appendChild(row);
    }

    showAlert(message, className) {
        const div = document.createElement("div");
        div.appendChild(document.createTextNode(message));
        div.className = `alert ${className}`;

        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector(".alert").remove();
        },3000)
    }

    clearFields() {
        title.value = "";
        author.value = "";
        isbn.value = "";
    }

    deleteBookFromList(target) {
        if (target.className == "delete") {
            console.log("123");
            target.parentElement.parentElement.remove();
        }
    }
}

class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem("books") == null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;
    }

    static addBooks(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }

    static displayBooks() {
        const books = Store.getBooks();
        const ui = new UI();
        books.forEach(function (book) {
            ui.addBookToList(book);
        });
    }

    static removeBooks(isbn) {
        const books = Store.getBooks();
        books.forEach(function (book, index) {
            if (book.isbn == isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem("books", JSON.stringify(books));
    }
}

document.addEventListener("DOMContentLoaded", Store.displayBooks());

document.getElementById('book-form').addEventListener('submit', addBook);

function addBook(e)
{
    const book = new Book(title.value, author.value, isbn.value);
    const ui = new UI();
    if (title.value == "" || author.value == "" || isbn.value == "") {
        ui.showAlert("Please fill out all the fields...", "error");
    }
    else {
        ui.addBookToList(book);
        Store.addBooks(book);
        ui.showAlert("Book Added!!!", "success");
        ui.clearFields();
    }

    e.preventDefault();
}

document.getElementById("book-list").addEventListener("click", deleteBook);

function deleteBook(e) {
    const ui = new UI();
    ui.deleteBookFromList(e.target);
    Store.removeBooks(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert("Book Deleted!!!", "success");
    e.preventDefault();
}