import mongoose from "mongoose";

const userinfo = new mongoose.Schema({
    name : String,
    password:Number
})

 export const infoModel = mongoose.model("userinfo",userinfo)