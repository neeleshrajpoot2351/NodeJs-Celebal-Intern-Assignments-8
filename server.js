require('dotenv').config();
const express = require('express');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/upload', uploadRoutes); 
app.use('/auth', authRoutes);

app.use('/weather', weatherRoutes);


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
