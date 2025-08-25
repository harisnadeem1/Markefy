const express = require("express");
const router = express.Router();
const { createPayment, handleWebhook } = require("../controllers/paymentController");

// create payment
router.post("/create-payment", createPayment);

// webhook (NowPayments will POST here)
router.post("/webhook", handleWebhook);

module.exports = router;
