//pubsModel.js

const subscriptions = {};

function subscribe(topicId, subscriberId) {
  if (!subscriptions[topicId]) {
    subscriptions[topicId] = new Set();
  }
  subscriptions[topicId].add(subscriberId);
}

function unsubscribe(topicId, subscriberId) {
  const subscribers = subscriptions[topicId];
  if (subscribers) {
    subscribers.delete(subscriberId);
    if (subscribers.size === 0) {
      delete subscriptions[topicId];
    }
  }
}

function getSubscribers(topicId) {
  return subscriptions[topicId] || new Set();
}

module.exports = { subscribe, unsubscribe, getSubscribers };