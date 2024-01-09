// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pharmacy', { useNewUrlParser: true, useUnifiedTopology: true });

// Define MongoDB schema and model
const pharmacySchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

const Medicine = mongoose.model('Medicine', pharmacySchema);

// Routes
app.get('/medicines', async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/addMedicine', async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const newMedicine = new Medicine({ name, quantity });
    await newMedicine.save();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
