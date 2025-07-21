const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Plant = require('./models/plant');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://techexplorer864:arnoold01@plants.oa4dmcc.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.get('/', async (req, res) => {
  const plants = await Plant.find();
  res.json(plants);
});

app.post('/', async (req, res) => {
  try {
    const plant = new Plant(req.body);
    await plant.save();
    res.status(201).json(plant);
  } catch (error) {
    res.status(400).json({ message: 'Error adding plant', error });
  }
});

app.delete('/:id', async (req, res) => {
  try {
    await Plant.findByIdAndDelete(req.params.id);
    res.json({ message: 'Plant deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err });
  }
});


app.put('/:id', async (req, res) => {
  try {
    const updated = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Update failed', error: err });
  }
});

app.patch('/:id/water', async (req, res) => {
  try {
    const today = new Date();
    const next = new Date();
    next.setDate(today.getDate() + 7); // 7-day watering schedule

    const updated = await Plant.findByIdAndUpdate(
      req.params.id,
      { lastWatered: today, nextWatering: next },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to mark as watered', error: err });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
