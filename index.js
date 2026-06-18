require("dotenv").config();

const express = require("express");
const cors    = require("cors");
const path    = require("path");
const connectDB = require("./config/db");

const cocktailRoutes = require("./routes/cocktailroutes");
const authRoutes     = require("./routes/authroutes");
const passport       = require("./config/passport");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Serve uploaded files locally (fallback)
app.use("/uploads", express.static("uploads"));

// API routes
app.use("/api/", cocktailRoutes);
app.use("/api/auth", authRoutes);

// Serve frontend UI
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`✅  Server running at http://localhost:${PORT}`);
});
