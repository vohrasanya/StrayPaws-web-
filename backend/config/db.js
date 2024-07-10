import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://straypaws:straypaws789@cluster0.quop1h3.mongodb.net/straypaws').then(()=>console.log("DB Connected"));
}