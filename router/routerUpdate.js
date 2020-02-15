const express = require("express")

const routerUpdate = express.Router();

const CommentsModel = require("../model/modelComment.js");

routerUpdate.get("/update/:id", async (req, res) => {
  const CommentsModelSave = await CommentsModel.findById({
    _id: req.params.id
  })
  console.log("hej")
  res.render("update", {
    CommentsModelSave

  })
  // skickar {SaveUpdate} till update.ejs
})

routerUpdate.post("/update/:id", async (req, res) => { // här blir jag lite förrvirad
  console.log(req.body)
  try {
    const CommentsModelSaveUpdate = await CommentsModel.updateOne({
        _id: req.body._id
      }, // varför ska de var body , jag tycker de borde vara params eftersom borde lästa av vilken man vill upptatera sammtidigt så läser inmatningen body
      {
        $set: {
          text: req.body.text,
          author: req.body.author
        }
      }, {
        runValidators: true
      } // får samma valdering som model
    )
  } catch (e) {
    console.log(e, "du skrev inget")
    res.send("min 2 nummer")
  }
  res.redirect("/MainPage")

})


//https://books.google.se/books?id=CCe7DwAAQBAJ&pg=PA356&lpg=PA356&dq=.find().sort()+req.query&source=bl&ots=Gn0XQoUGv7&sig=ACfU3U0CUvr-n-5bkMQKhnEZWvaDaTkjCg&hl=sv&sa=X&ved=2ahUKEwj5qLT36r3nAhXntYsKHXARARAQ6AEwAnoECAgQAQ#v=onepage&q=.find().sort()%20req.query&f=false

module.exports = routerUpdate;