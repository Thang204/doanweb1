const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const adminAuth = async (req, res, next) => {
    try {
        const token = req.header
        if (!token) {
            return res.status(400).json({  success: false, message: "Invalid Authentication" })
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if (!token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(400).json({ success: false, message: "Invalid Authentication" })
        }
        next();

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message })
           
        }

}
module.exports = adminAuth;