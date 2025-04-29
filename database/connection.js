const { Sequelize, DataTypes } = require("sequelize");
const bookModel = require("./models/bookModel");
const userModel = require("./models/userModel");

// Create connection
const sequelize = new Sequelize("postgresql://postgres.hdpqqugzruwjemcgvnie:Wq7nE2vT4kY9bR5m@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres");

// Test connection
sequelize.authenticate()
  .then(() => {
    console.log("Connection was successful!");
  })
  .catch((err) => {
    console.log("Error occurred:" + err);
  });

// Export
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.book = bookModel(sequelize, DataTypes);
db.User = userModel(sequelize, DataTypes);

// Migrate
sequelize.sync({ alter: false }).then(() => {
  console.log("Project start vayo hai");
});

module.exports = db;
