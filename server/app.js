const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");
const collectionRoutes = require("./routes/collections");
const authRoutes = require("./routes/authRoutes");
const path = require("path");
const adminRoutes = require("./routes/adminRoutes.js");




const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"], // ✅ include Authorization
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/files", express.static(path.join(__dirname, "files")));

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/products", productRoutes);
app.use("/api/collections", collectionRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);



module.exports = app;
