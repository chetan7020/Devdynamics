// pubsubRoutes.js

const express = require('express');
const pubsubController = require('../controllers/pubsubController');
const { validateInput } = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/subscribe', validateInput, pubsubController.subscribe);
router.delete('/unsubscribe/:topicId/:subscriberId', pubsubController.unsubscribe);
router.get('/notify/:topicId', pubsubController.notify);

module.exports = router;
