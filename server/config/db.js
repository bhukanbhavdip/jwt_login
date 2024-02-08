const mongoose = require("mongoose");

async function connectDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected..!");
    } catch (error) {
        console.log("mongo error",error);
    }
}

module.exports = connectDb;