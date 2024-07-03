import express from 'express'
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import msgRoutes from './routes/msg.routes.js'
import userRoutes from './routes/users.routes.js'

import connectToMongodb from './db/connectToMongodb.js';

import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", msgRoutes);
app.use("/api/users", userRoutes);


// app.get("/", (req, res)=>{
//     //root route http://localhost:5000
//     res.send("hello world !!");
// })


app.listen(port, ()=>{
    connectToMongodb();
    console.log(`server is running on port ${port}...`)
});