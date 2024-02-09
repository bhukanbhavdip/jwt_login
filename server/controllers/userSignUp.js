const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs');
const saltRounds = 10;


async function userSignUp(req,res){
    try {
        if(!req.body.name){
             return res.status(401).json({
                message: "please provide an name..!",
                error: true,
                success: false
            })
        }
        if(!req.body.email){
            return res.status(401).json({
                message: "please provide an email..!",
                error: true,
                success: false
            })
        }
        if(!req.body.password){
            return res.status(401).json({
                message: "please provide a password..!",
                error: true,
                success: false
            })
        }

        const user = await userModel.findOne({email: req.body.email})
    
        if(user){
            return res.status(409).json({
                message: "User Is Already Exists..!",
                error: true,
                success: false
            })
        }

        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(req.body.password, salt, async function(err, hash) {
                if(err){
                    return res.status(400).json({
                        message: err,
                        error: true,
                        success: false
                    })
                }
                console.log("hash",hash);
                const payload ={
                    ...req.body,
                    password: hash
                }

                const userDetails = new userModel(payload);
                const save = await userDetails.save();
                return res.status(200).json({
                    message: "User Created Succesfully..!",
                    data: save,
                    error: false,
                    success: true
                })
            });
        });

    } catch (error) {
        return res.status(500).json({
            message: error,
            error: true,
            success: false
        })
    }
}
module.exports = userSignUp
