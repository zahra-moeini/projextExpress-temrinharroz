const express=require("express");
const app=express();
const port=2002;


app.get("/chocolate",(req,res)=>{
    const {amount}=req.query;
    res.send(`you searched for: ${amount}`);
    
})


app.listen(port,()=>{
    console.log(`listening this port :${port}`);
})