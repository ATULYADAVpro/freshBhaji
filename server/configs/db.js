import { connect } from 'mongoose'

const connectDB = async () => {
    try {
        await connect(process.env.DB_URL);
        console.log("MongoDB connected");
    } catch (error) {
        console.log("DB Connection Error:", error.message);
        process.exit(1);
    }
}

export default connectDB;
