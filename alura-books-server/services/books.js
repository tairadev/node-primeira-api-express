const fs = require("fs");

function getAllBooks() {
  return JSON.parse(fs.readFileSync("books.json", "utf-8"));
}

function getBookById(id) {
  const books = getAllBooks();
  return books.find((b) => b.id === id);
}

function insertBook(book) {
  const books = getAllBooks();
  books.push(book);
  saveAllBooks(books);
}

function updateBookById(id, updatedBook) {
  const books = getAllBooks();
  const bookIndex = books.findIndex((b) => b.id === id);

  if (bookIndex !== -1) {
    const originalBook = books[bookIndex];

    books[bookIndex] = {
      ...originalBook,
      ...updatedBook,
      id,
    };

    saveAllBooks(books);
    return books[bookIndex];
  }
  return null;
}

function deleteBookById(id) {
  const books = getAllBooks();
  const bookIndex = books.findIndex((b) => b.id === id);
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    saveAllBooks(books);
    return true;
  }
  return false;
}

function saveAllBooks(books) {
  fs.writeFileSync("books.json", JSON.stringify(books, null, 2));
}

module.exports = {
  getAllBooks,
  getBookById,
  insertBook,
  saveAllBooks,
  deleteBookById,
  updateBookById,
};
