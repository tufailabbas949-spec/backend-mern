import express from "express";
import "dotenv/config"
import connectDB from "./ser/db/db.js";
import { userModel } from "./models/user.model.js";

const port = process.env.PORT
const app = express()
app.use(express.json())

connectDB()
const users_list = []

app.get("/", (req,res)=>{
    res.send("<h1>tufail abbas</h1>")
})
app.post("/user", async (req,res)=>{
    const data = req.body 
    
   await userModel.create({
        name:data.name,
        age:data.age
    })
    res.status(201).json({
        "message":"user created"
    })
})

app.get("/user", async(req,res)=>{
    const users_list =  await userModel.find()  // always send array []
    res.status(201).json({
        "message":"data fetching successfuly",
        "users": users_list
    })
})

app.delete("/user/:name", async (req,res)=>{
    const id = req.params.name

    await userModel.findOneAndDelete({
          name: id
    })
    res.status(201).json({
        "message":"user delete done"
    })
})
app.patch("/user/:name",async (req,res)=>{
    const name = req.params.name
    const age = req.body.age
    await userModel.findOneAndUpdate({
        _id:name
    },{
        age:age
    })
})
app.listen(port,()=>{
    console.log(`run server ${port}`);
})