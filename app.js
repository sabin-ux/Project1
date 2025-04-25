const express = require('express');
const app = express();

app.get("/books",(req,res)=>{
    res.json({
        message: "books fetched successfully"
    })
})
app.post("/books",(req,res)=>{
    res.json({
        message: "books added successfully"
    })
})
app.delete("/books/:id",(req,res)=>{
    res.json({
        message: "books deleted successfully"
    })
})
app.patch("/books/:id",(req,res)=>{
    res.json({
        message: "books updated successfully"
    })
})
postgresql://postgres.hdpqqugzruwjemcgvnie: SABIN@#123$ @aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
app.listen(3000,()=>{
    console.log(("server is running on port 3000"))
})