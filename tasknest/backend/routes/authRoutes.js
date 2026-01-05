const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// Register 
router.post("/register", async(req, res)=>{
    const {name, email, password} = req.body;
    console.log(name,email,password);
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message: "User already exists"})
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        name,
        email,
        password: hashedPassword,
    });

    res.json({ message : "User registered"});
})


// login 
router.post("/login", async (req, res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({message : "Invalid credentials"});

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({message : "Invalid credentails"})

    const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET,{expiresIn: "1d"});
    res.json({token});
});

// Protected Route 
const authMiddleware = require("../middleware/authMiddleware");

router.get("/profile", authMiddleware, async(req, res) => {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
})


module.exports = router;