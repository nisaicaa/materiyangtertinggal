const Kontak = require("../models/kontak");
const Users = require("../models/users");

const createKontak = async (req, res) => {
    const {
        id_users,
        no_telepon,
        email
    } = req.body;

    try {
        const users = await Users.findByPk(id_users);

        if (!users) {
            res.status(500).json("Data users tidak ditemukan");
        }

        const kontak = await Kontak.create({
            id_users,
            no_telepon,
            email
        });

        res.status(201).json(kontak)
    } catch (error) {
        console.log(error);
    }
};

const getAllKontak = async (req, res) => {
    try {
        const kontak = await Kontak.findAll();
        res.status(200).json(kontak);
    } catch (error) {
        console.log(error);
    }
};

const updateKontak = async (req, res) => {
    const { id } = req.params;
    const { no_telepon, email } = req.body;

    try {
        const kontak = await Kontak.findByPk(id);
        if (!kontak) {
            return res.status(404).json({ message: "Kontak not found" });
        }
        kontak.no_telepon = no_telepon;
        kontak.email = email;
        await kontak.save();
        res.status(200).json(kontak);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const deleteKontak = async (req, res) => {
    const { id } = req.params;

    try {
        const kontak = await Kontak.findByPk(id);
        if (!kontak) {
            return res.status(404).json({ message: "Kontak not found" });
        }
        await kontakntak.destroy();
        res.status(200).json({ message: "Kontak deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    createKontak,
    getAllKontak,
    updateKontak,
    deleteKontak
}

