const mongoose = require("mongoose");


const schemaComment = new mongoose.Schema(

    {

        text: {
            type: String,
            minlength: 2,
            maxlength: 20,
            require: true
        },
        author: {
            type: String,
            minlength: 2,
            maxlength: 20,
            require: true
        },
        //required:function(){return this.isAvailable},

        date: {
            type: Date,
            default: Date.now
        },

        // isAvailable:{type:Boolean,required:true},
    }


)
const CommentsModel = mongoose.model("Comment", schemaComment) // "Comment" i data basen collection

module.exports = CommentsModel;