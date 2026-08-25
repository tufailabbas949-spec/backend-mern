import mongoose from "mongoose";

const dbConnect = async ()=>{

   try{
         await mongoose.connect(process.env.DATABASE_URL)
         console.log("database connetc done")
   }catch(error){
        console.error(error)
   }

}
export default dbConnect