const { addBook, deleteBook, fetchBook, singleFetchBook, updateBook } = require("../controller/boookController")
 
const router = require("express").Router()

router.route("/books",fetchBook)
router.route("/books/:id",singleFetchBook)
router.route("/books",addBook)
router.route("/books/:id",updateBook)
router.route("/books/:id",deleteBook)

// router.get("/books",fetchBooks)
// router.post("/boooks",addBook)
// router.delete("/books",deleteBook) yesari ni milxa garna chai 
module.exports = router


