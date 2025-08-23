const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");


const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://markefy.ai"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Routes
app.use("/api/contact", contactRoutes);


module.exports = app;
