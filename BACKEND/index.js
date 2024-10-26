import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./database/db.js";
import router from "./routes/userRoutes.js";

const app=express()
dotenv.config();
const port=process.env.PORT
const DATABASE_URL=process.env.MONGODB_URL
connectDB(DATABASE_URL);
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
app.use('/api',router)

