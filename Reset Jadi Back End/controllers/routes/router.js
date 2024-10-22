const router = require("express").Router();

//Users
router.use("/", require("./users"));

//Kontak 
router.use("/", require("./kontak"));

module.exports = router;
