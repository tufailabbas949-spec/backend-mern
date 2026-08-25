import express from "express";
import "dotenv/config"
import dbConnect from "./src/db/db.js";
import { infoModel } from "./src/model/infouser.model.js";
import cors from "cors";
const app = express()
app.use(cors())
app.use(express.json())
dbConnect()

app.get("/" ,(req,res)=>{
    res.send("home page server run ")
})

// create user
app.post("/create",async(req,res)=>{
   const data = req.body

    await infoModel.create({
        "name":data.name,
        "password":data.password
    })
    res.status(201).json({
        "message":"infomation add done"
    })
})
//fetch users all
 app.get("/fetch-info", async (req,res) => {
   const all_user = await infoModel.find()

   res.status(201).json({
    "message":"data fetching done",
    "datauser":all_user
   })
    
 })
app.listen(process.env.PORT,()=>{
    console.log(`run server ${process.env.PORT}`)
})