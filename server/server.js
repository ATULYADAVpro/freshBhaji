import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const allowedOrigins = ['http://localhost:5173'];

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.get('/', (req, res) => {
    res.send("Backend Api is working.");
});

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server start at http://localhost:${port}`);
    });
}).catch(() => {
    console.log(`failed database connection.`);
});
