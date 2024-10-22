const {
    createUsers,
    getAllUsers,
    updateUsers,
    deleteUsers,
} = require("../controllers/users");
const express = require("express");

const router = express.Router();

router.post("/users", createUsers);
router.get("/users", getAllUsers);
router.post("/users", updateUsers);
router.post("/users", deleteUsers);

module.exports = router;
