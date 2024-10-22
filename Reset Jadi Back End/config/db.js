const { Sequelize } = require("sequelize");

const db = new Sequelize("contoh_backend", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = db;