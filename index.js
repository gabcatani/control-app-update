const express = require('express');
const app = express();
app.get('/check', (req, res) => res.json({ status: false }));
app.listen(3000, () => console.log('Server running on port 3000'));
