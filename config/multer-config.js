const multer= require("multer")
const router = require("../routes/ownersRouter")
const storage= multer.memoryStorage()
const upload= multer({storage:storage})

module.exports=upload
