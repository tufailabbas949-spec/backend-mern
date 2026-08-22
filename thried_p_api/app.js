import express from "express"
import "dotenv/config"
const app = express()
const port = process.env.PORT_NUMBER
console.log(port)
const note =[]
app.use(express.json())
 
app.post("/note",(req,res)=>{
    console.log(req.body);

    note.push(req.body)
    res.status(201).json({
        message: "node created"
    })
})
app.delete("/note/:index",(req,res)=>{
    const index = req.params.index
    delete  note[index]
    res.status(200).json({
        "massage":"note delete"
    })
})
app.patch("/note/:index",(req,res)=>{
    const index = req.params.index
    const age = req.body.age
    note[index].age = age
    res.status(200).json({
        "massage":"update successfully"
    })
})
app.get("/note",(req,res)=>{

    res.status(200).json({
        message: "note fetach successfully",
        notes : note
    })
})

 app.listen(port,()=>{
    console.log(`run server ${port}`)
 })