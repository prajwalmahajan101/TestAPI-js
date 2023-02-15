const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const requestHandler = (req,res) =>{
    let url = req.url;
    let method = req.method;
    res.status(200).json({
        msg:"Working Fine on port"+ port,
        method,
        url,
        port,
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
