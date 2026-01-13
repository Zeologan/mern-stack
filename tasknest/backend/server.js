const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// mongoDB connection 
mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("MongoDB Connected"))
    .catch((err) => console.log(err))

// routes 
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})