const { Sequelize, DataTypes } = require("sequelize")

// Create connection
const sequelize = new Sequelize("postgresql://postgres.hdpqqugzruwjemcgvnie:Wq7nE2vT4kY9bR5m@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres");

// Test connection
sequelize.authenticate()
  .then(() => {
    console.log("Connection was successful!");
  })
  .catch((err) => {
    console.log("Error occurred:");
  });

// Export
const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
