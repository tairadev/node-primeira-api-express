const { Router } = require("express");
const {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");
const router = Router();

// Get all books
router.get("/", getBooks);

// Get a book by ID
router.get("/:id", getBook);

// Add a new book
router.post("/", addBook);

// Update a book by ID
router.patch("/:id", updateBook);

// Delete a book by ID
router.delete("/:id", deleteBook);

module.exports = router;
