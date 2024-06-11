// pubsubService.js

const PubSubModel = require('../models/pubsubModel');

class PubSubService {
  constructor() {
    this.model = new PubSubModel();
  }

  subscribe(topicId, subscriberId) {
    this.model.subscribe(topicId, subscriberId);
  }

  unsubscribe(topicId, subscriberId) {
    this.model.unsubscribe(topicId, subscriberId);
  }

  notify(topicId) {
    return Array.from(this.model.getSubscribers(topicId));
  }
}

module.exports = PubSubService;
