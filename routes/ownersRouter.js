const express = require("express")
const router = express.Router()
const userModel = require("../models/user-model")
const ownerModel = require("../models/owner-model")
const isAdmin = require("../middlewares/isAdmin")



router.get("/admin", isAdmin, function (req, res) {
    let success = req.flash("success")

    let error = req.flash("error")
    res.render("createproducts", { success, error })
})

module.exports = router