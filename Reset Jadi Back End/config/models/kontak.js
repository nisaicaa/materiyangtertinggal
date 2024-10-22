const { DataTypes } = require("sequelize");
const db = require("../config/db");
const Users = require("./users");

const Kontak = db.define("kontak", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_users: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: "id"
        }
    },
    no_hp: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

Users.hasMany(Kontak, { foreignKey: "id_usesr" });
Kontak.belongsTo(Users, { foreignKey: "id_users" });

module.exports = Kontak;
