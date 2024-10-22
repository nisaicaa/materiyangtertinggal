const {
    createKontak,
    getAllKontak,
    updateKontak,
    deleteKontak
} = require("../controllers/kontak");
const express = require("express");

const router = express.Router();

router.post("/kontak", createKontak);
router.get("/kontak", getAllKontak);
router.post("/kontak", updateKontak);
router.post("/kontak", deleteKontak);

module.exports = router;