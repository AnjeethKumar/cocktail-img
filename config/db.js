const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("Missing MONGO_URI in environment");
        }

        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 30000,

            // Atlas requires TLS; keep options explicit for newer Node/OpenSSL
            tls: true,

            // Avoids intermittent TLS handshake issues on some environments
            // (safe for typical Atlas clusters)
            tlsAllowInvalidCertificates: false,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;