const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization;

    // check token exists 
    if(!authHeader){
        return res.status(401).json({message : "No token, authorization denied"})
    }

    try{
        const token = authHeader.split(" ")[1]; //Bearer Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded; // attach user id 
        next();
    }catch(error){
        res.status(401).json({message : "Token is not valid"})
    }
}

module.exports = authMiddleware;