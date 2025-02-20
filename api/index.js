import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";




//import dotenv from "dotenv";
//dotenv.config();

//console.log("MongoDB URI:", process.env.MONGO);
mongoose.connect("mongodb+srv://amulya2004:Amulya2004@cluster0.qfupa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
    console.log("Connected to MongoDB.....");
    })
    .catch((err) => {
    console.log(err);
   });

const app = express();
app.use(express.json());



app.listen(3000, () => {
    console.log("Server is running on port 3000 !!! ");
});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.error || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});