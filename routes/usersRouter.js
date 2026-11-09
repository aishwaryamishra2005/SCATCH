const express = require("express")
const router = express.Router()
const {
    registerUser,
    loginUser,
    logout,
} = require("../controllers/authController")
router.get("/", function (req, res) {
    res.send("hey")
})

router.post("/login", loginUser)
router.post("/register", registerUser)

module.exports = router