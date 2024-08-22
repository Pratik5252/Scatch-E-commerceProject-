const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");
const router = express.Router();

router.get("/", function (req, res) {
  let error = req.flash("error");
  let success = req.flash("success");
  const toggle = req.query.toggle === "true";
  res.render("index", { error, success, loggedin: false, toggle });
});

router.get("/shop", isLoggedIn, async (req, res) => {
  let product = await productModel.find();
  let success = req.flash("success");
  res.render("shop", { product, success });
});

router.get("/logout", isLoggedIn, (req, res) => {
  res.render("shop");
});
module.exports = router;

router.get("/cart/:productid", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  user.cart.push(req.params.productid);
  await user.save();
  req.flash("success", "Added to Cart");
  res.redirect("/shop");
});

router.get("/cart", isLoggedIn, async (req, res) => {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("cart");
  const bill = Number(user.cart[0].price + 20) - Number(user.cart[0].discount);
  res.render("cart", { user, bill });
});
