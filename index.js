const express = require("express");
const app = express();
const port = process.env.PORT || 8000;



app.use(require('./routes'));

app.listen(port,(err)=>{

    if(err){
        console.log("Error",err);
    }

    else {
        console.log("server is running on Port",port);
    }
})
