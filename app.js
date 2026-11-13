require("dotenv").config()
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/mongoose-connetion")
const indexRouter = require("./routes/index")
const ownersRouter = require("./routes/ownersRouter")
const usersRouter = require("./routes/usersRouter")
const shopRouter = require("./routes/shopRouter")
const productsRouter = require("./routes/productsRouter")
const mongoose = require("mongoose")
const expressSession = require("express-session")
const flash = require("connect-flash")



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs")
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET
    })
)
app.use(flash())



// app.get("/", function (req, res) {
//     res.render("index", { error: "" })
// })
app.use("/", indexRouter)
app.use("/owners", ownersRouter)
app.use("/products", productsRouter)
app.use("/user", usersRouter)
app.use("/shop", shopRouter)


app.listen(process.env.PORT || 3000)