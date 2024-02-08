const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    }
},
    {timestamps:true}
);

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;