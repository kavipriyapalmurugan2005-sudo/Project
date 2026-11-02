const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/vegetables")
.then(() => console.log("MongoDB Connected"))
.catch((error) => console.log("MongoDB Error:", error.message));

const orderRoute = require("./route/orderRoute");
const adminRoute = require("./route/adminRoute");

app.use("/order", orderRoute);
app.use("/admin", adminRoute);

app.get("/", (req, res) => {
    res.send("Palmurugan Fresh Vegetables API is running");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
