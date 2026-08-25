import mongoose from "mongoose";

const users = new mongoose.Schema({
    name : String,
    age: Number
})
 

export const userModel = mongoose.model("user", users);