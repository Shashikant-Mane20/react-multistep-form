const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Razorpay = require('razorpay');

// Initialize express
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/paymentForm', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB: ", err));

// Define a schema for the user data (excluding sensitive payment details)
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    address: String,
    pancard: String,
    aadhar: String,
    bankDetails: String,
    selectedPlan: {
      name: String,
      amount: Number
    },
    paymentId: String,  // Payment ID (from Razorpay)
    // Removed sensitive data (cardNumber, cardDetails, cvv)
});

const User = mongoose.model('User', userSchema);

// Razorpay instance initialization
const razorpay = new Razorpay({
  key_id: 'your-razorpay-key-id',   // Replace with your Razorpay key_id
  key_secret: 'your-razorpay-key-secret'  // Replace with your Razorpay key_secret
});

// POST API to submit the form data (without payment details)
app.post('/api/submit-form', async (req, res) => {
    try {
      const {
        name,
        email,
        contact,
        address,
        pancard,
        aadhar,
        bankDetails,
        selectedPlan
      } = req.body;

      // Save user data to the database
      const user = new User({
        name,
        email,
        contact,
        address,
        pancard,
        aadhar,
        bankDetails,
        selectedPlan
      });

      await user.save();
      res.status(200).json({ message: "Form data saved successfully", user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error saving form data", error: err });
    }
});

// POST API to create a Razorpay order
app.post('/api/create-order', async (req, res) => {
    try {
      const { amount, currency, receipt } = req.body;

      // Create an order with Razorpay
      const order = await razorpay.orders.create({
        amount: amount * 100, // Amount in paise
        currency: currency || 'INR',
        receipt: receipt || 'order_receipt_123',
        payment_capture: 1
      });

      // Respond with Razorpay order ID
      res.status(200).json({ 
        message: "Order created successfully",
        orderId: order.id 
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error creating order", error: err });
    }
});

// POST API to handle payment success (store Razorpay payment ID)
app.post('/api/payment-success', async (req, res) => {
    try {
      const { paymentId, userId } = req.body;  // User ID and payment ID should be sent by frontend

      // Find the user by ID and update with the payment ID
      const user = await User.findByIdAndUpdate(userId, { paymentId }, { new: true });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "Payment success", user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error processing payment success", error: err });
    }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
