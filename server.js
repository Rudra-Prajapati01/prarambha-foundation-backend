import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import adminRoutes from "./routes/adminRoutes.js";
import pageRoutes from "./routes/pageRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import logoRoutes from "./routes/logoRoutes.js";

// ==========================================
// LOAD ENVIRONMENT VARIABLES
// ==========================================

dotenv.config();

// ==========================================
// CONNECT MONGODB
// ==========================================

connectDB();

// ==========================================
// CREATE EXPRESS APP
// ==========================================

const app = express();

// ==========================================
// CORS CONFIGURATION
// ==========================================

const allowedOrigins = [
  "https://prarambhafoundation.org",
  "https://www.prarambhafoundation.org",
  "https://prarambha-foundation.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

// ==========================================
// CORS MIDDLEWARE
// ==========================================

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ==========================================
// BODY PARSER
// ==========================================

app.use(express.json());

// ==========================================
// API ROUTES
// ==========================================

app.use("/api/admin", adminRoutes);

app.use("/api/pages", pageRoutes);

app.use("/api/upload", uploadRoutes);

app.use("/api/gallery", galleryRoutes);

app.use("/api/stories", storyRoutes);

app.use("/api/messages", messageRoutes);

app.use("/api/logo", logoRoutes);

// ==========================================
// ROOT ROUTE
// ==========================================

app.get("/", (req, res) => {
  res.status(200).send("Prarambha Foundation API Running");
});

// ==========================================
// SERVER ERROR HANDLER
// ==========================================

app.use((err, req, res, next) => {
  console.error("[SERVER ERROR]", err);

  res.status(500).json({
    message: "Internal server error",
  });
});

// ==========================================
// PORT
// ==========================================

const PORT = process.env.PORT || 5000;

// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});