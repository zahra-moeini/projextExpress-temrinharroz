const express=require("express");
const app=express();
const port=3003;

app.get("/multiply",(req,res)=>{
    const {value1,value2}=req.query;
    res.send(`this should return value of ${value1 * value2}`)
})

app.listen(port,()=>{
    console.log(`this is lisening port ${port}`);
})