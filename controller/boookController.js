exports.fetchBooks = async (req, res) => {
    const data = await book.findAll(); // fetch all books from DB
    res.json({
        message: "Books fetched successfully",
        data: data
    });
};
exports.addBook = async (req, res) => {
    console.log(req.body);

    const { bookName, bookPrice, bookAuthor, bookCentre } = req.body;

 await book.create({
    bookname: bookName,
    bookPrice: bookPrice,
    bookAuthor: bookAuthor,
    bookCentre: bookCentre,
});


    res.json({
        message: "Book added successfully"
    });
}

exports.deleteBook = (req, res) => {
    res.json({
        message: "Book deleted successfully"
    });
}

exports.updateBook = (req, res) => {
    res.json({
        message: "Book updated successfully"
    });
}

exports.singleBook =async (req, res) => {
    const { id } = req.params;
    const data = await book.findOne({
        where: {
            id: id
        }
    });
    res.json({
        message: "Book fetched successfully",
        data: data
    });
}

