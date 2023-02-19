module.exports.requestHandler = (req,res) =>{
    let url = req.url;
    let method = req.method;
    res.status(200).json({
        msg:"Working Fine",
        method,
        url,
    })
}