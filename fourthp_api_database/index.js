import express from "express";
import "dotenv/config"

const port = process.env.PORT
const app = express()
app.use(express.json())

const users_list = []

app.get("/", (req,res)=>{
    res.send("<h1>tufail abbas</h1>")
})

app.get("/users",(req,res)=>{
     
     console.log(req.body)
    
    res.status(200).json({
        "message":'data fetching done',
        "users": users_list
    })
})
app.post("/users",(req,res)=>{
         console.log(req.body)
    users_list.push(req.body)

    res.status(200).json({
        "message":"data create users create done",
    })

})
app.delete("/users/:index",(req,res)=>{
    const index = req.params.index

   delete users_list[index]
   res.status(200).json({
    "message":'delete done',
   })

})
app.patch("/users/:index",(req,res)=>{
    const index = req.params.index;
    const password = req.body
    users_list[index].password = password
    res.status(200).json({
        "message":"data update",
    })
})

app.listen(port,()=>{
    console.log(`run server ${port}`);
})