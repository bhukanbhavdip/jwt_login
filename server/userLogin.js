const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');

async function userLogin(req,res){
    try {
        const {email,password} = req.body

        if(!email){
            return res.status(401).json({
                message: "please provide an email..!",
                error: true,
                success: false
            })
        }
        if(!password){
            return res.status(401).json({
                message: "please provide a password..!",
                error: true,
                success: false
            })
        }
        const user = await userModel.findOne({email})
        if(!user){
            console.log(user)
            return res.status(404).json({
                message: "User Not Available..!",
                error: true,
                success: false
            })
        }
        console.log("user",user);
        bcrypt.compare(password, user.password, function(err, result) {
            // result == true
            console.log(result)
            if(err){
                return res.status(500).json({
                    message: err,
                    error: true,
                    success: false
                })
            }
            if(!result){
                return res.status(401).json({
                    message: "Your password does not match",
                    error: true,
                    success: false
                })
            }
            const payload = {
                _id : user._id,
                email : user.email
            }
            const token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn: "3d"
            })
            res.status(200).json({
                token: token,
                error: false,
                success: true,
                message: "Login Successfully"
            })
        
        });

    } catch (error) {
        res.status(500).json({
            message: error,
            error: true,
            success: false
        })
    }
}
module.exports = userLogin