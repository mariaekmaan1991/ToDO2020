const express = require("express")
const router = express.Router();
const CommentsModelSave = require("../model/modelComment.js");

router.get("/about", (req, res) => {
    res.send("this todo app was created by My")
    //res.render("About.ejs")

})


module.exports = router;