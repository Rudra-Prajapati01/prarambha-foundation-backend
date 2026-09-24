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

// Load environment variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

/* =====================================
   CORS CONFIGURATION
===================================== */

const allowedOrigins = [
  // Production frontend
  "https://prarambha-foundation.vercel.app",

  // Local development
  "http://localhost:5173",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests that don't contain an Origin header
      // Example: Postman or server-to-server requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log(`[CORS] Blocked origin: ${origin}`);

      return callback(
        new Error(`CORS blocked for origin: ${origin}`)
      );
    },

    credentials: true,

    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS",
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);


app.use(express.json());

app.use("/api/admin", adminRoutes);

app.use("/api/pages", pageRoutes);

app.use("/api/upload", uploadRoutes);

app.use("/api/gallery", galleryRoutes);

app.use("/api/stories", storyRoutes);

app.use("/api/messages", messageRoutes);

app.use("/api/logo", logoRoutes);

/* =====================================
   ROOT
===================================== */

app.get("/", (req, res) => {
  res.send("Prarambha Foundation API Running");
});

app.use((err, req, res, next) => {
  console.error("[SERVER ERROR]", err.message);

  if (err.message?.startsWith("CORS blocked")) {
    return res.status(403).json({
      message: "CORS policy blocked this request",
    });
  }

  res.status(500).json({
    message: "Internal server error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});