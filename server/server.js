const port = process.env.PORT || 3000

const express = require("express");
const app = express();
const path = require("path");

var publicPath = path.join(__dirname, "../public");

app.get("/", (req, res)=>{
	res.sendFile(publicPath + "/main.html")
})

app.get("/hair", (req, res)=>{
	res.sendFile(publicPath + "/hair/secong.html")
})



app.listen(port, ()=>{
	console.log(`sever is starting in ${port}`)
})