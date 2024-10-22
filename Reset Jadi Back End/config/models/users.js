const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Users = db.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

module.exports = Users;
