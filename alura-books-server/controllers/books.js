const fs = require("fs");
const { getAllBooks, saveAllBooks } = require("../services/books");

function getBooks(req, res) {
  const books = getAllBooks();
  res.json(books);
}

function getBook(req, res) {
  const books = getAllBooks();
  const bookId = parseInt(req.params.id, 10);
  const book = books.find((b) => b.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
}

function addBook(req, res) {
  const books = getAllBooks();
  const { titulo, autor } = req.body;
  const newBook = {
    id: books.length + 1,
    titulo,
    autor,
  };
  books.push(newBook);
  saveAllBooks(books);
  res.status(201).json(newBook);
}

function updateBook(req, res) {
  const books = getAllBooks();
  const bookId = parseInt(req.params.id, 10);
  const { titulo, autor } = req.body;
  const bookIndex = books.findIndex((b) => b.id === bookId);
  if (bookIndex !== -1) {
    books[bookIndex] = { id: bookId, titulo, autor };
    saveAllBooks(books);
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
}

function deleteBook(req, res) {
  const books = getAllBooks();
  const bookId = parseInt(req.params.id, 10);
  const bookIndex = books.findIndex((b) => b.id === bookId);
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    saveAllBooks(books);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Book not found" });
  }
}

module.exports = {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
};
