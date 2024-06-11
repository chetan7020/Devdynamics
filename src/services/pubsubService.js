// pubsubService.js

const { subscribe, unsubscribe, getSubscribers } = require('../models/pubsubModel');

class PubSubService {
  subscribe(topicId, subscriberId) {
    subscribe(topicId, subscriberId);
  }

  unsubscribe(topicId, subscriberId) {
    unsubscribe(topicId, subscriberId);
  }

  notify(topicId) {
    return Array.from(getSubscribers(topicId));
  }
}

module.exports = PubSubService;
