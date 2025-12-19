const express = require("express");
const booksRouter = require("./routes/books");

const app = express();

app.use("/books", booksRouter);

const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
