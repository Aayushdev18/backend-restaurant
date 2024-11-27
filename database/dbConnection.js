import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose
        .connect('mongodb+srv://ayushdev12345:JdmOqwy4m5xsStWH@cluster0.nvj1k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
            dbName: "RESTAURANT",
        })
        .then(() =>{
            console.log("Connected to database successfully");
        })
        .catch((err) =>{
            console.log(`Some error occured while connecting to database! $(err)`);
        });
}