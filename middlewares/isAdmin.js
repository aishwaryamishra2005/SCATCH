const ownerModel = require("../models/owner-model")
const jwt = require("jsonwebtoken")
const userModel = require("../models/user-model")
const bcrypt = require("bcrypt");



module.exports = async function (req, res, next) {
    try {

        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY)
        let user = await ownerModel
            .findOne({ email: decoded.email })
            .select("-password")
        if (!user) {
            req.flash("error", "You are not admin")
            return res.redirect("/shop")
        }
        req.user = user
        next()
    }
    catch (err) {
        req.flash("error", "something went wrong")
        res.redirect("/shop")
    }
}

