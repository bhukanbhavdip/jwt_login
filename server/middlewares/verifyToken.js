const jwt = require("jsonwebtoken")

async function verifyToken(req,res,next){
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log(token)

        jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
            console.log("decode",decode)

            if(err){
                res.status(400).json({
                    message: "Unauthorized access",
                    err: true,
                    success: false
                })
            }
            req.userId = decode._id

            next();

        })

    } catch (error) {
        res.status(500).json({
            message: error,
            error: true,
            success: false
        }) 
    }
}
module.exports = verifyToken