const mongoose= require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected")
}).catch((err)=>{
    console.log("Failed",err)
})