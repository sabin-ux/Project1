const bookmodel = (sequelize, DataTypes) => {
    const Book = sequelize.define("book", {
        bookname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bookAuthor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookCentre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Book;
};

module.exports = bookmodel;
