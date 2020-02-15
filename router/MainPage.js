const express = require("express")

const router = express.Router();
const Comment = require("../model/modelComment.js");

const items = 6;
router.get("/MainPage", async (req, res) => {
    const sorted = req.query.sort || 1 // kan behövas
    const page = req.query.page || 1;
    const datet = req.query.date || 1;
    console.log(req.query)
    const komment = await Comment.find()
        .sort({
            author: sorted,
            date: datet
        })
        .skip((page - 1) * items) // skipper i forsta sidan 1-1 *3 betyder 
        // inget skipning på första sidan
        // sen i andra sidan skipper det 2-1 *3 , 3 items 
        // i mer förklaring
        .limit(items)
    res.render("MainPage", {
        komment
    })
})

router.get("/MainPage", (req, res) => {
    res.render("MainPage")
})


router.post("/MainPage", async (req, res) => {
    console.log("Why ", req.body)
    const createComments = new Comment({ // måste hämtas här ifrån const Commentar=require("../model/commentar")
        author: req.body.author,
        text: req.body.text
    })
    try {
        const SaveCreate = await createComments.save(); // save() sparar i data bas
        console.log(SaveCreate)
        res.redirect("/MainPage")
    } catch (e) {
        console.log(e)
        res.send("du måste skriva in två nummer")
    }
})




module.exports = router;
//https://wuma18.nodehill.com/en-databas-med-bocker-importerad-fran-json/
//https://www.freecodecamp.org/forum/t/help-updating-blog-posts-in-node-js-mongoose/259380/5

//https://mongoosejs.com/docs/tutorials/dates.html