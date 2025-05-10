const { book } = require("../database/connection");

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

exports.deleteBook = async(req, res) => {
    // first we need to take this id of this books
   const id = req.params.id 
   await books.destroy({
    where :{
        id
    }
   })
    // when id gain the book will reomveo
    res.json({
        message: "Book deleted successfully"
    });
}

exports.updateBook = (req, res) => {
    // which id we need to edit . this id we need to take
    const id = req.params.id
const { bookName, bookPrice, bookAuthor, bookCentre } = req.body;
books.update({ bookname: bookName, bookPrice: bookPrice, bookAuthor: bookAuthor, bookCentre: bookCentre }, {
    where: {
        id: id
    }
}
)
    res.json({
        message: "Book updated successfully"
    });
}

exports.singleFetchBook = async(req,res)=>{
    // first capture what id is he/she sending 
    const id = req.params.id // 2
    const datas=await books.findByPk(id) // always returns object, mongoose --> findById
    // books.findAll({
    //     where : {
    //         bookName : "hello world", 
    //         authorName : "manish"
    //     }
    // })
    // }) // select * from books where bookName="hello world" && authorName = "manish"
    // const datass = await books.findAll({
    //     where : {
    //         id : id
    //     }
    // }) // always returns array
    res.json({
        message : "Single Book fetched successfully", 
        datas : datas
        // datass
    })

}

// module.exports = {fetchBooks,addBook,deleteBook,editBook} yesari pani milxa hai garna chai 