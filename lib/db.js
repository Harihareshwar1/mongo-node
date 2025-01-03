
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const url = process.env.URL;
const connect = async () => {
    try {
        const conn = await mongoose.connect(url);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connect;