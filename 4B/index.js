const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const heroRoutes = require('./routes/heroRoutes');
const typeRoutes = require('./routes/typeRoutes');
//const multer = require('multer');
//const path = require('path');
//const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/heroes', heroRoutes);
app.use('/api/types', typeRoutes);

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});