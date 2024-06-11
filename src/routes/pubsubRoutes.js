// pubsubRoutes.js

const express = require('express');
const subscriptionController = require('../controllers/subscriptionController');
const notificationController = require('../controllers/notificationController');

const router = express.Router();

router.use('/subscription', subscriptionController);
router.use('/notification', notificationController);

module.exports = router;
