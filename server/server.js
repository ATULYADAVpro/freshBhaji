import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/cloudinary.js';
import productRouter from './routes/productRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
await connectCloudinary();

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

app.use('/api/user',userRouter);
app.use('/api/seller',sellerRouter);
app.use('/api/product',productRouter);


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server start at http://localhost:${port}`);
    });
}).catch(() => {
    console.log(`failed database connection.`);
});