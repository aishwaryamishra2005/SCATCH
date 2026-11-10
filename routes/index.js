const express = require("express")
const router = express.Router()
const isLoggedIn = require("../middlewares/isLoggedIn")
const productModel = require("../models/product-model")
const userModel = require("../models/user-model")

router.get("/", function (req, res) {
    let error = req.flash("error")
    let success = req.flash("success")
    res.render("index", { error, success })
})


module.exports = router