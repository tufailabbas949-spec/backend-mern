import mongoose from "mongoose";

export const dbConnect = async () =>{

    await mongoose.connect(process.env.DB_URL);
    console.log("database connect done ")
}

