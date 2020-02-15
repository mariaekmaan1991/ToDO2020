const express = require("express")
const mongoose = require("mongoose")
const config = require("./config/config.js")
const expect = require("chai")

//const UserRouter=require("./model/user.js") 
//const modelComment=require("./model/modelComment")
//const bodyparser = require("body-parser"); 
const path = require("path")
//const createRouter=require("./router/routerCreateC.js")
const sassMiddleware = require('node-sass-middleware')
const MainRouter = require("./router/MainPage.js")
const RouterDelete = require("./router/routerDelete.js")
const RouterUpdate = require("./router/routerUpdate.js")
const RouterAbout = require("./router/RouterAbout.js")

//måste skriva mapp namn sen filnamn
const app = express()

//app.use(bodyparser.urlencoded({extended:false}));
app.use(express.urlencoded({
    extended: true
}))
app.set("views", "views")
app.set("view engine", "ejs");


app.use(sassMiddleware({ //path en module som har join metoden som kan 
    // concatinate "lägger ihop "projektmappen med sin underapparna.
    src: path.join(__dirname, "scss"), // lägg i alla sass filer 
    //feddatabase_version/scss
    dest: path.join(__dirname, "public") // renderar till en css fil
}))
app.use(express.static(path.join(__dirname, "public")))

app.use(RouterAbout)
app.use(MainRouter)
//app.use(createRouter)
app.use(RouterDelete)
app.use(RouterUpdate)



const option = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


const port = process.env.PORT || 8000;

mongoose.connect(config.databasUrl, option).then(() => {

    console.log("Det funkar")
    app.listen(port)

})

module.exports = {
    app
}