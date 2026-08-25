import mongoose from "mongoose";

const connectDB = async ()=>{
   await mongoose.connect(process.env.DATABASE_URL);

   console.log("database connect")
}

export default connectDB