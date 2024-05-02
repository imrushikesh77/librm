import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
});
import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(`${DB_URI}/${DB_NAME}`);
        console.log("Connected to the database.");
    } catch (error) {
        console.error("Error connecting to the database: ", error);
    }
}

export default dbConnect;