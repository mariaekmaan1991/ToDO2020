const express = require("express")

const routerDelete = express.Router();


const CommentsModel = require("../model/modelComment.js");


routerDelete.get("/delete/:id", async (req, res) => {
    console.log(req.params.id)
    const deleteComment = await CommentsModel.deleteOne({
        _id: req.params.id
    })
    console.log(deleteComment)
    res.redirect("/MainPage")

})

module.exports = routerDelete;