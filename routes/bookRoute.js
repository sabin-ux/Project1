const { fetchBooks, addBook, deleteBook, updateBook } = require("../controller/boookController");

const router =require("express").Router();

router.route("/books",).get(fetchBooks).post(addBook)
router.route("/books/:id").delete(deleteBook).patch(updateBook)

module.exports = router;