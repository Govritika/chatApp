import mongoose from "mongoose";

const connectToMongodb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongodb...")
    } catch (error) {
        console.log("database connection failed!", error.message)
    }
}

export default connectToMongodb;