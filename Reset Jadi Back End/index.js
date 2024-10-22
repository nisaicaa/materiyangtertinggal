const express = require("express");
const db = require("./config/db");
const Users = require("./models/users");
const dotenv = require("dotenv");
const Kontak = require("./models/kontak");
const routes = require("./routes/router");

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api", routes);

db
    .authenticate()
    .then(async () => {
        console.log("Database berhasil konek");
        // await Kontak.sync({ alter: true });
    })
    .catch((err) => console.log("Error: " + err));

app.listen(process.env.PORT, () => {
    console.log("server berhasil running di server " + process.env.PORT);
});