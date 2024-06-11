// pubsubModel.js

class PubSubModel {
    constructor() {
      this.topics = {};
    }
  
    subscribe(topicId, subscriberId) {
      if (!this.topics[topicId]) {
        this.topics[topicId] = new Set();
      }
      this.topics[topicId].add(subscriberId);
    }
  
    unsubscribe(topicId, subscriberId) {
      if (this.topics[topicId]) {
        this.topics[topicId].delete(subscriberId);
        if (this.topics[topicId].size === 0) {
          delete this.topics[topicId];
        }
      }
    }
  
    getSubscribers(topicId) {
      return this.topics[topicId] || new Set();
    }
  }
  
  module.exports = PubSubModel;
  