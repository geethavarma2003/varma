const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is data from backend' });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
