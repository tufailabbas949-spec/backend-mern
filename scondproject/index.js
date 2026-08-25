import express from "express"
import "dotenv/config"
const app = express()
const port = process.env.PORT
app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/about",(req,res)=>{
    res.send("about page")
})
app.get("/ditails",(req,res)=>{
    res.send("ditails page")
})
app.get("/contect",(req,res)=>{
    res.send("contect page")
})
app.get("/about/main",(req,res)=>{
    res.send("main page")
})

app.listen(port,()=>{
    console.log(`project runing.... ${port}`)
})
