import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://amulya92004:Ammu@0912@cluster0.bcaec.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const app = express();
app.listen(3000, () => {
    console.log("Server is running on port 3000 !!! ");
});