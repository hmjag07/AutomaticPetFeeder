const express = require('express');
const path = require('path');
const app = express();

// Your API routes here (if any)
app.get('/api/test', (req, res) => {
  res.send('Test API is working!');
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// If no API route matches, serve the React app (catch-all route)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
