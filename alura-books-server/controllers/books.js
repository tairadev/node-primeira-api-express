const fs = require("fs");
const {
  getAllBooks,
  getBookById,
  insertBook,
  deleteBookById,
  updateBookById,
} = require("../services/books");

function getBooks(req, res) {
  const books = getAllBooks();
  res.json(books);
}

function getBook(req, res) {
  const bookId = parseInt(req.params.id, 10);
  const book = getBookById(bookId);
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
  insertBook(newBook);
  res.status(201).json(newBook);
}

function updateBook(req, res) {
  const bookId = parseInt(req.params.id, 10);

  const updatedBook = updateBookById(bookId, req.body);

  if (updatedBook) {
    res.json(updatedBook);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
}

function deleteBook(req, res) {
  const bookId = parseInt(req.params.id, 10);
  const deleted = deleteBookById(bookId);
  if (deleted) {
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
