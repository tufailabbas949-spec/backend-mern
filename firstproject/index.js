import express from "express";
import "dotenv/config"
const app = express()
const students = [
  {
    "id": 1,
    "name": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "age": 18,
    "class": "12th",
    "section": "A",
    "roll_no": 101,
    "city": "Jaipur",
    "marks": {
      "math": 87,
      "science": 82,
      "english": 91
    }
  },
  {
    "id": 2,
    "name": "Ananya Verma",
    "email": "ananya.verma@example.com",
    "age": 17,
    "class": "12th",
    "section": "A",
    "roll_no": 102,
    "city": "Ajmer",
    "marks": {
      "math": 94,
      "science": 89,
      "english": 96
    }
  },
  {
    "id": 3,
    "name": "Vivaan Singh",
    "email": "vivaan.singh@example.com",
    "age": 18,
    "class": "12th",
    "section": "B",
    "roll_no": 103,
    "city": "Kota",
    "marks": {
      "math": 78,
      "science": 85,
      "english": 81
    }
  },
  {
    "id": 4,
    "name": "Diya Gupta",
    "email": "diya.gupta@example.com",
    "age": 17,
    "class": "12th",
    "section": "B",
    "roll_no": 104,
    "city": "Udaipur",
    "marks": {
      "math": 91,
      "science": 93,
      "english": 88
    }
  },
  {
    "id": 5,
    "name": "Aditya Kumar",
    "email": "aditya.kumar@example.com",
    "age": 18,
    "class": "12th",
    "section": "A",
    "roll_no": 105,
    "city": "Jodhpur",
    "marks": {
      "math": 76,
      "science": 79,
      "english": 84
    }
  },
  {
    "id": 6,
    "name": "Ishita Meena",
    "email": "ishita.meena@example.com",
    "age": 17,
    "class": "12th",
    "section": "C",
    "roll_no": 106,
    "city": "Bikaner",
    "marks": {
      "math": 96,
      "science": 92,
      "english": 94
    }
  },
  {
    "id": 7,
    "name": "Kabir Joshi",
    "email": "kabir.joshi@example.com",
    "age": 18,
    "class": "12th",
    "section": "C",
    "roll_no": 107,
    "city": "Alwar",
    "marks": {
      "math": 83,
      "science": 80,
      "english": 86
    }
  },
  {
    "id": 8,
    "name": "Myra Yadav",
    "email": "myra.yadav@example.com",
    "age": 17,
    "class": "12th",
    "section": "A",
    "roll_no": 108,
    "city": "Sikar",
    "marks": {
      "math": 89,
      "science": 87,
      "english": 93
    }
  },
  {
    "id": 9,
    "name": "Arjun Rathore",
    "email": "arjun.rathore@example.com",
    "age": 18,
    "class": "12th",
    "section": "B",
    "roll_no": 109,
    "city": "Bharatpur",
    "marks": {
      "math": 81,
      "science": 84,
      "english": 78
    }
  },
  {
    "id": 10,
    "name": "Saanvi Kumari",
    "email": "saanvi.kumari@example.com",
    "age": 17,
    "class": "12th",
    "section": "C",
    "roll_no": 110,
    "city": "Chittorgarh",
    "marks": {
      "math": 93,
      "science": 90,
      "english": 97
    }
  }
]
const port = process.env.PORT || 7000

app.get('/',(req,res)=>{
    res.send("app run secussefully hlw tufail sir")
})

app.get("/about",(req,res)=>{
    res.send("<h1'>about page </h1>")
})
app.get("/about/a",(req,res)=>{
  res.send("about ke ander ka page")
})
app.get("/github",(req,res)=>{
    res.json(students)
})
app.listen(port,()=>{
    console.log(`app run succesfully ${port}`)
})
