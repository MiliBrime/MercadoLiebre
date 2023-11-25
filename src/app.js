const express =require('express');
app=express();

const path = require('path');


app.use(express.static("public"));
app.use(express.static("views"));

const port= process.env.PORT || 3050;

app.listen(3050,()=>
    console.log("servidor corriendo en http://localhost:$(port)"));

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
})

app.get("/login.html",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
})

app.get("/register.html",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
})

/* app.post("/register.html",(req,res)=>{) */