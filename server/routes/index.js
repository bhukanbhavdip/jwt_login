const express = require("express");
const router = express.Router();
const userSignUp = require("../controllers/userSignUp");
const userLogin = require("../controllers/userLogin");
const userProfile = require("../controllers/userProfile");
const verifyToken = require("../middlewares/verifyToken");


router.post('/sign-up',userSignUp)
router.post('/login',userLogin)
router.post('/user-details',verifyToken,userProfile)

module.exports = router;