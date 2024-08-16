const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");

const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

const userModel = require("./models/user-model");
const productModel = require("./models/product-model");
const ownerModel = require("./models/owners-model");

const db = require("./config/mongoose-connection");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(3000);
