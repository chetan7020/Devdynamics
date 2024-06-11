// index.js

const express = require('express');
const bodyParser = require('body-parser');
const pubsubRoutes = require('./src/routes/pubsubRoutes');
const { errorHandler } = require('./src/middlewares/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/api', pubsubRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
