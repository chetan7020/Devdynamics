// notificationController.js

const express = require('express');
const PubSubService = require('../services/pubsubService');

const router = express.Router();
const pubSubService = new PubSubService();

router.post('/notify', async (req, res) => {
  const { topicId } = req.body;
  const subscribers = pubSubService.notify(topicId);
  res.json({ topicId, subscribers });
});

module.exports = router;
