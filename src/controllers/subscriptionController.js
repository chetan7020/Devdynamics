// // subscriptionController.js

const express = require('express');
const PubSubService = require('../services/pubsubService');

const router = express.Router();
const pubSubService = new PubSubService();

router.post('/subscribe', (req, res) => {
  const { topicId, subscriberId } = req.body;
  pubSubService.subscribe(topicId, subscriberId);
  res.send(`Subscriber ${subscriberId} subscribed to topic ${topicId}`);
});

router.post('/unsubscribe', (req, res) => {
  const { topicId, subscriberId } = req.body;
  pubSubService.unsubscribe(topicId, subscriberId);
  res.send(`Subscriber ${subscriberId} unsubscribed from topic ${topicId}`);
});

module.exports = router;


// const express = require("express");
// const app = express();

// app.get("/", (req,res)=>{
//     res.send("Hello this is Chetan Haramkhor");
// });

// app.listen(3000, ()=>{
//     console.log("Server sonnected successfully");
// });