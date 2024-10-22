const Users = require("../models/users");

const createUsers = async (req, res) => {
    const {
        nama
    } = req.body;

    try {
        const user = await Users.create({
            nama
        });
        res.status(2001).json(user);
    } catch (error) {
        console.log(error);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const user = await Users.findAll();
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
    }
}

const updateUsers = async (req, res) => {
    const { id } = req.params;
    const { nama } = req.body;

    try {
        const user = await Users.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.nama = nama;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
};

const deleteUsers = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await Users.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        await user.destroy();
        res.status(201).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createUsers,
    getAllUsers,
    updateUsers,
    deleteUsers
}
