// pubsubController.js

const PubSubService = require('../services/pubsubService');

const pubSubService = new PubSubService();

exports.subscribe = (req, res, next) => {
  const { topicId, subscriberId } = req.body;

  try {
    pubSubService.subscribe(topicId, subscriberId);
    res.send(`Subscriber ${subscriberId} subscribed to topic ${topicId}`);
  } catch (error) {
    next(error);
  }
};

exports.unsubscribe = (req, res, next) => {
  const { topicId, subscriberId } = req.params;

  try {
    pubSubService.unsubscribe(topicId, subscriberId);
    res.send(`Subscriber ${subscriberId} unsubscribed from topic ${topicId}`);
  } catch (error) {
    next(error);
  }
};

exports.notify = (req, res, next) => {
  const { topicId } = req.params;

  try {
    const subscribers = pubSubService.notify(topicId);
    if (subscribers.length === 0) {
      return res.status(404).json({ error: 'No subscribers found for the topic.' });
    }
    res.json({ topicId, subscribers });
  } catch (error) {
    next(error);
  }
};
