const userModel = require("../models/userModel");

async function userProfile(req,res){
    try {
        console.log("user Profile",req.userId);

        const user = await userModel.findById(req.userId).select("-password")
        res.status(200).json({
            message: "user details",
            data: user,
            error: false,
            success: true
        })

    } catch (error) {
        res.status(500).json({
            message: error,
            error: true,
            success: false
        })
    }
}
module.exports = userProfile;