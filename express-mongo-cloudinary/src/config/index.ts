import dotenv from 'dotenv';

dotenv.config();

const config = {
    mongoURI: process.env.MONGO_URI || "mongodb+srv://Anjeethkumar:mongodb753@cluster0.2vp9uiv.mongodb.net/?appName=Cluster0",
    cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME || "dndtf7ezd",
        apiKey: process.env.CLOUDINARY_API_KEY || "871795137758312",
        apiSecret: process.env.CLOUDINARY_API_SECRET || "3B_Rk5w7nG2rmtXfSCNktyqbKd8",
    },
    jwtSecret: process.env.JWT_SECRET || "your_jwt_secret_here",
};

export default config;