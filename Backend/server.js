require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// 1. Connect to MongoDB
connectDB();  // Reads process.env.MONGO_URI

// 2. Middleware
app.use(cors({
  origin: '*' // or restrict to your Vercel URL: 'https://your-frontend.vercel.app'
}));
app.use(express.json()); // for parsing application/json

// 3. Health-check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 4. API routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/feeder', require('./routes/feederRoutes'));

// 5. 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// 6. Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server Error' });
});

// 7. Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
