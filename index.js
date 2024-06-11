// index.js

const express = require('express');
const bodyParser = require('body-parser');
const pubsubRoutes = require('./src/routes/pubsubRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send('Hello, World!');
}); 

app.use('/api', pubsubRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
