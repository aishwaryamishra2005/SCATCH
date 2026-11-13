const express = require("express")
const router = express.Router()
const fetchproducts = require("../models/product-model")
const isLoggedIn = require("../middlewares/isLoggedIn")
const userModel = require("../models/user-model")

router.get("/", isLoggedIn, async function (req, res) {
    let products = await fetchproducts.find()
    let success = req.flash("success")
    let error = req.flash("error")
    res.render("shop", { products, success, error })
})
router.post("/addtocart/:productid", isLoggedIn, async function (req, res) {
    let user = await userModel.findOne({ email: req.user.email })
    user.cart.push(req.params.productid)
    await user.save()
    req.flash("success", "Added to cart")
    res.redirect("/shop")
})
router.get("/cart", isLoggedIn, async function (req, res) {
    let user = await userModel.findOne({ email: req.user.email }).populate("cart")

    res.render("cart", { user })
})
module.exports = router