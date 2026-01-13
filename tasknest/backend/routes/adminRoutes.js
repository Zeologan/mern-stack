const express = require("express");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// Get all users (Admin only) 
router.get("/users", authMiddleware, roleMiddleware("admin"),async(req, res)=>{
    const users = await User.find().select("_password");
    res.json(users);
});

// Delete user (Admin only) 
router.delete("/users/:id", authMiddleware, roleMiddleware("admin"),async(req, res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({ message : "User deleted"});
});

// Promote User to admin 
router.put("/users/:id/role", authMiddleware, roleMiddleware("admin"),async(req, res)=>{
    await User.findByIdAndUpdate(req.params.id, {role: "admin"});
    res.json({ message : "User promoted to admin"});
});

module.exports = router;