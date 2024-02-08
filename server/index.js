const express = require("express")
const cors = require("cors")
const bodyParser=require('body-parser');
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const router = require("./routes");
dotenv.config();
// const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.json({
        message: "server is running"
    })
})
app.use('/api',router)

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server Running");
    })
})
