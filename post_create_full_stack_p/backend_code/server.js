import express from "express";
import { dbConnect } from "./src/db/db.js";
import "dotenv/config";
import multer from "multer";
import { postModle } from "./src/model/post.model.js";
import uploadimage from "./src/services/storage.service.js";
import cors from "cors"
const port = process.env.PORT;

const app = express();
app.use(express.json())
app.use(cors())
const upload = multer({storage : multer.memoryStorage()})
console.log("KEY:", process.env.IMAGEKIT_PRIVATE_KEY);

dbConnect();
//  app.get("/",(req,res)=>{
//     res.json({
//         "server run " : port
//     })
//  })

app.post("/create", upload.single("Image"), async (req,res) =>{
    console.log(req.file)
    console.log(req.body)
    const result = await uploadimage(req.file.buffer)
    const data =  req.body
   await  postModle.create({
        "Image": result.url,
        "name":data.name
    })
    res.status(200).json({
        "message" : "post created "
    })
})

app.get("/posts", async (req,res)=>{
        console.log(req.body)
    const posts = await postModle.find()
    
    res.status(200).json({
        "message":"data fetching data",
        "all_post": posts
    })
})

app.listen(port,()=>{
    console.log(`server runing... port: ${port}`)
})