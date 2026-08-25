import mongoose from "mongoose";

const postSchema =  new mongoose.Schema({
    name :String,
    Image : String,
})

export const postModle = mongoose.model("post",postSchema)