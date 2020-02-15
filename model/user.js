const mongoose=require("mongoose")

 const schemaUser=new mongoose.Schema({

    
        userName:String,
        passWord:String,
        email:String,
        age:Number
    
 })

const userInfo =mongoose.model("user",schemaUser) // "Comment" i data basen collection

module.exports=userInfo;