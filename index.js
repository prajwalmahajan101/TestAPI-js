const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const requestHandler = (req,res) =>{
    res.status(200).json({
        msg:"working fine",
        method:req.method,
        url: req.url
    })
}

app.use("/",requestHandler);

app.listen(port,(err)=>{

    if(err){
        console.log("Error",err);
    }

    else {
        console.log("server is running on Port",port);
    }
})