const fs = require("fs");

function getAllBooks() {
  return JSON.parse(fs.readFileSync("books.json", "utf-8"));
}

function saveAllBooks(books) {
  fs.writeFileSync("books.json", JSON.stringify(books, null, 2));
}

module.exports = {
  getAllBooks,
  saveAllBooks,
};
