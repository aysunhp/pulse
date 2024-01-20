const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    ingredients:String,
    price:String,
    type:String
},
{
    collection:"exam"
})

const User=mongoose.model("exam",userSchema)

module.exports=User